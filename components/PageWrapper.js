import { motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  margin: 0;
  padding: 0;
`;

export default function PageWrapper({ children }) {
  return (
    <Wrapper
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 40,
      }}
    >
      {children}
    </Wrapper>
  );
}
