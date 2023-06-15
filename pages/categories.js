import Center from "@/components/Center";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import ItemGrid from "@/components/ItemGrid";
import Title from "@/components/Title";

export default function CatagoriesPage({ products, categories }) {
  return (
    <>
      <Header />
      <Center>
        <Title>Categories</Title>
        <ItemGrid items={categories} type={"categories"} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const categories = await Category.find();

  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
