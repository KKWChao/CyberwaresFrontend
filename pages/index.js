import Featured from "@/components/Featured";
import Header from "@/components/Header";
import MailingList from "@/components/MailingList";
import NewProducts from "@/components/NewProducts";
import PageWrapper from "@/components/PageWrapper";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

function randomItem() {}

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <PageWrapper>
      <Header />
      <Featured products={featuredProduct} />
      <NewProducts products={newProducts} />
      <MailingList />
    </PageWrapper>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  // getting a random item to show as featured
  const allProducts = await Product.find();
  const featuredProductId =
    allProducts[Math.floor(Math.random() * allProducts.length)]?._id;

  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 8,
  });

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
