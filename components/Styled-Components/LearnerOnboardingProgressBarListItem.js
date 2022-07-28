import styled from "styled-components";

const LearnerOnboardingProgressBarListItem = styled.li`
  align-items: center;
  display: flex;
  height: 120px;
  justify-content: center;
  position: relative;

  &:nth-child(2n + 1) {
    border: 5px solid black;
    border-radius: 4rem;
    box-shadow: 5px 5px black;
    margin-right: 9px;
    width: 120px;
  }

  /* &:nth-child(2n) {
    margin: 0;
  } */
`;

export default LearnerOnboardingProgressBarListItem;
