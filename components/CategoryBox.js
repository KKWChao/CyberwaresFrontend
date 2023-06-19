import styled from "styled-components";
import Link from "next/link";

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  font-size: 0.9rem;
  margin: 0;
  text-decoration: none;
  border-radius: 0.25rem;
  box-shadow: 0px 1px 2px #5c5c5c;

  height: 2rem;
  transition: all 100ms ease-in-out;
  color: ${(props) => props.theme.highlight};
  background-color: ${(props) => props.theme.bg};

  &:hover {
    background-color: ${(props) => props.theme.hover};
    box-shadow: 0px 3px 2px #5c5c5c;
  }
`;

export default function CategoryBox({ _id, name }) {
  const url = "/category/" + _id;

  return (
    <CategoryWrapper>
      <Title href={url}>{name}</Title>
    </CategoryWrapper>
  );
}
