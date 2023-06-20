import Center from "./Center";
import styled from "styled-components";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { motion } from "framer-motion";

const Bg = styled.div`
  background-color: #222;
  color: white;
  padding: 4rem 0;
`;

const Title = styled(motion.h1)`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  font-family: "Press Start 2P", cursive;

  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: #aaa;
  font-size: 1rem;
`;

const ColumnWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 5rem;

  img {
    max-width: 100%;
    height: 25rem;
    max-height: 30rem;
    display: block;
    margin: 0 auto;
  }

  div:nth-child(1) {
    order: 2;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;

    div:nth-child(1) {
      order: 0;
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

export default function Featured({ products }) {
  const { addProduct } = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(products?._id);
  }

  return (
    <Bg>
      <Center>
        <ColumnWrapper>
          <Column>
            <div>
              <Title>{products?.title}</Title>
              <Description>{products?.description}</Description>
              <ButtonWrapper>
                <ButtonLink
                  href={"/product/" + products?._id}
                  outline={1}
                  white={1}
                >
                  Read More
                </ButtonLink>
                <Button white="true" onClick={() => addFeaturedToCart()}>
                  <CartIcon />
                  Add to Cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Column>
            <img src={products?.images?.[0]} alt="" />
          </Column>
        </ColumnWrapper>
      </Center>
    </Bg>
  );
}
