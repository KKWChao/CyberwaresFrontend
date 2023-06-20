import styled from "styled-components";
import Center from "./Center";
import ItemGrid from "./ItemGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin: 30px 0 20px;
  font-weight: normal;
  font-family: "Press Start 2P", cursive;
`;

export default function NewProducts({ products }) {
  return (
    <Center>
      <Title>New Arrivals</Title>
      <ItemGrid items={products} type={"product"} />
    </Center>
  );
}
