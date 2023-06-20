import styled from "styled-components";
import { PacmanLoader } from "react-spinners";

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Loader() {
  return (
    <>
      <LoaderWrapper>
        <PacmanLoader size={50} />
      </LoaderWrapper>
    </>
  );
}
