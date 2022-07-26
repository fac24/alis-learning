import styled from "styled-components";

const FontFlex = styled.div`
  margin: 0 auto;
  width: 38rem;

  & > * + * {
    margin-top: 1rem;
  }
`;

export default FontFlex;
