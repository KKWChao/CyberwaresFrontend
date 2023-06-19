import Center from "@/components/Center";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import ItemGrid from "@/components/ItemGrid";
import Title from "@/components/Title";
import PageWrapper from "@/components/PageWrapper";

export default function ProductsPage({ products, categories }) {
  return (
    <>
      <Header />
      <Center>
        <ItemGrid items={categories} type={"categories"} />
        <Title>All Products</Title>
        <ItemGrid items={products} type="product" />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, { sort: { id: -1 } });
  const categories = await Category.find();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
