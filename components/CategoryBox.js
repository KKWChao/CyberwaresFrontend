import styled from "styled-components";
import Link from "next/link";

const CategoryWrapper = styled.div`
  text-align: center;
  box-shadow: 0px 2px 3px #5c5c5c;
  border-radius: 0.25rem;
  height: 1.5rem;
  transition: all 100ms ease-in-out;
  color: ${(props) => props.theme.highlight};
  background-color: ${(props) => props.theme.bg};

  &:hover {
    background-color: ${(props) => props.theme.active};
    box-shadow: 0px 3px 4px #5c5c5c;
  }
`;

const Title = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: bold;
  font-size: 0.7rem;
  margin: 0;
  color: inherit;
  text-decoration: none;
  height: 100%;
`;

export default function CategoryBox({ _id, name }) {
  const url = "/category/" + _id;

  return (
    <CategoryWrapper>
      <Title href={url}>{name}</Title>
    </CategoryWrapper>
  );
}
