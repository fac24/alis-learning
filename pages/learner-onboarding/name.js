// 1. alis-learning title above.
// 2. progress bar component will go after
// 3. what is your name speech click icon. Also include text prompting the learner.
// 4. form with will include input area for learner to type name.
// 5. orange next button on bottom center.
// 6. back button on bottom left.

import styled from "styled-components";
import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";

export default function LearnerChoiceName() {
  return (
    <LearnerOnboardingLayout
      ttsTitle="What is your name?"
      stepNumber="1"
      nextStep="font-selection"
      previousStep="avatar-selection"
    >
      {/* <LearnerOnboardingName /> */}
      <StyledForm>
        <label for="learnerName"></label>
        <StyledInput type="text" name="learnerName" />
      </StyledForm>
      {/* Content goes here */}
    </LearnerOnboardingLayout>
  );
}

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const StyledInput = styled.input`
  text-align: center;
  font-size: 2rem;
  padding: 2rem;
  color: black;
  border-radius: 2.813rem;
  border: 0.313rem solid black;
  box-shadow: inset 0 0 0.625rem rgba(0, 0, 0, 0.5);
`;
