// 1. alis-learning title above.
// 2. progress bar component will go after
// 3. what is your name speech click icon. Also include text prompting the learner.
// 4. form with will include input area for learner to type name.
// 5. orange next button on bottom center.
// 6. back button on bottom left.

// import styled from "styled-components"
import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import LearnerOnboardingName from "../../components/LearnerOnboardingName";

export default function LearnerChoiceName() {
  return (
    <LearnerOnboardingLayout
      ttsTitle="What is your name?"
      stepNumber="1"
      nextStep="what font size is easier"
      previousStep="avatar-selection"
    >
      <LearnerOnboardingName />
      {/* Content goes here */}
    </LearnerOnboardingLayout>
  );
}

// const ChildText = styled.h2`
// text-align: center;
// font-size: 2rem;
// `;
