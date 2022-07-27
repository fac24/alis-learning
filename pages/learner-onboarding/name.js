import styled from "styled-components";
import { useEffect } from "react";
import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";

export default function LearnerChoiceName({
  learnerName,
  setLearnerName,
  background,
  avatarNameInLocalStorage,
}) {
  const saveName = (e) => {
    setLearnerName(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <LearnerOnboardingLayout
      ttsTitle="What is your name?"
      stepNumber={1}
      nextStep="font-selection"
      previousStep="avatar-selection"
      avatarNameInLocalStorage={avatarNameInLocalStorage}
      background={background}
    >
      <StyledForm onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="learnerName"></label>
        <StyledInput
          onChange={saveName}
          type="text"
          name="learnerName"
          value={learnerName}
        />
      </StyledForm>
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
