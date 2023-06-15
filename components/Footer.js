import { styled } from "styled-components";
import Center from "./Center";
import { primary } from "@/lib/colors";

const StlyedFooter = styled.div`
  background-color: #474747;
  color: ${primary};
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 2rem;
  padding: 2rem;
`;

const FooterWrapper = styled.div`
  border: 0;
`;

export default function Footer() {
  return (
    <StlyedFooter>
      <Center>div</Center>
    </StlyedFooter>
  );
}
