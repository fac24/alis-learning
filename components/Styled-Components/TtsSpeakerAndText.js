import styled from "styled-components";

const TtsSpeakerAndText = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 2rem;
  justify-content: center;
  margin: 3rem auto;
  max-width: max-content;
  // text-align: center;
  user-select: none;

  & > svg {
    margin-right: 1rem;
  }
`;

export default TtsSpeakerAndText;
