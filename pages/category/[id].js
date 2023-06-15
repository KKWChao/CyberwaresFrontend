import Center from "@/components/Center";
import Header from "@/components/Header";
import styled from "styled-components";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import ItemGrid from "@/components/ItemGrid";
import Title from "@/components/Title";

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin: 40px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
`;

export default function catetory({ products, categoryName, categories }) {
  return (
    <>
      <Header />
      <Center>
        <ItemGrid items={categories} type={"categories"} />
        <Title>{categoryName[0].name}</Title>
        {products.length > 0 ? (
          <ItemGrid items={products} type={"product"} />
        ) : (
          <div>Nothing Here!</div>
        )}
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const products = await Product.find({ category: id });
  const categoryId = await Category.find({ _id: id });
  const categories = await Category.find();

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      categoryName: JSON.parse(JSON.stringify(categoryId)),
      categories: JSON.parse(JSON.stringify(categories)),
    },
  };
}
