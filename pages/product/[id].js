import Box from "@/components/Box";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import Header from "@/components/Header";
import ProductImages from "@/components/ProductImages";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { useContext } from "react";
import styled from "styled-components";

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin: 40px;

  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
`;

const PriceRow = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const Price = styled.span`
  font-size: 1.5rem;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <Header />
      <Center>
        <ColumnWrapper>
          <Box>
            <ProductImages images={product.images} />
          </Box>
          <ItemInfo>
            <Title>{product?.title}</Title>
            <p>{product?.description}</p>
            <PriceRow>
              <div>
                <Price>${product?.price}</Price>
              </div>
              <div>
                <Button primary="true" onClick={() => addProduct(product._id)}>
                  Add to Cart
                </Button>
              </div>
            </PriceRow>
          </ItemInfo>
        </ColumnWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}
