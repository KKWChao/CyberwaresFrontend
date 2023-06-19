import styled from "styled-components";
import Button from "./Button";
import CartIcon from "./icons/CartIcon";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { motion } from "framer-motion";

const ProductWrapper = styled(motion.div)``;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2px;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 600;
  text-align: right;
  width: 50%;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
    font-weight: 600;
    text-align: left;
  }
`;

export default function ProductBox({ _id, title, description, price, images }) {
  const { addProduct } = useContext(CartContext);

  const url = "/product/" + _id;

  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <img src={images?.[0]} alt={title} />
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>${price}</Price>
          <Button
            block="true"
            primary="true"
            outline="true"
            onClick={() => addProduct(_id)}
          >
            Add to Cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
