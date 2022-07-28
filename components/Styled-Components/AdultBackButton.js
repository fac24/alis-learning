import styled from "styled-components";
import LearnerBackButton from "./LearnerBackButton";

const AdultBackButton = styled(LearnerBackButton).attrs({ tabIndex: 0 })`
  font-family: Arial, sans-serif;
  font-size: 1.25rem;
  // font-weight: normal;
  letter-spacing: normal;
  padding-bottom: 1rem;
  padding-top: 1rem;
`;

export default AdultBackButton;
