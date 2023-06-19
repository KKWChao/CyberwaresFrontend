import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
import { Product } from "@/models/Product";
import { buffer } from "micro";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const endpointSecretEnv = process.env.WEBHOOK_ENDPOINT_SECRET;

export default async function handle(req, res) {
  await mongooseConnect();

  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      await buffer(req),
      sig,
      endpointSecretEnv
    );
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case "checkout.session.completed":
      const data = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      const orderId = data.metadata.orderId;
      const paid = data.payment_status === "paid";

      if (orderId && paid) {
        await Order.findByIdAndUpdate(orderId, {
          paid: true,
        });
        // add another function to update product for item purchase count
        await Product.findByIdAndUpdate();
      }
      console.log(data);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send("ok");
}

export const config = {
  api: { bodyParser: false },
};

// famed-feisty-zippy-salute
// acct_1NGAJuBFaSG8EebA
// whsec_620c37a7e5b25b552fc584444a2e99012a0e332ebb971b3b6e1df73fd9a0e828
