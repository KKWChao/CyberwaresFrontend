import Center from "./Center";

import styled from "styled-components";
import Title from "./Title";
import Button from "./Button";

const StyledDiv = styled.div`
  margin-top: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.bg};
  height: 10rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-image: ; */
`;

export default function MailingList() {
  return (
    <Center>
      <StyledDiv>
        <Title>Subscribe for updates</Title>
        <Button primary={"true"}>Click here for more info</Button>
      </StyledDiv>
    </Center>
  );
}
