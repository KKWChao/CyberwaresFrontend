import styled from "styled-components";
import ProductBox from "./ProductBox";
import CategoryBox from "./CategoryBox";
import { motion } from "framer-motion";

const ItemsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

export default function ItemGrid({ items, type }) {
  switch (type) {
    case "product":
      return (
        <ItemsGrid
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
        >
          {items.map((item, idx) => (
            <ProductBox {...item} key={idx} />
          ))}
        </ItemsGrid>
      );
    case "categories":
      // if no items in category, do not show
      return (
        <ItemsGrid>
          {items.map((item, idx) => (
            <CategoryBox {...item} key={idx} />
          ))}
        </ItemsGrid>
      );
  }
}
