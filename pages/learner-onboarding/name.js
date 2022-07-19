import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";

export default function LearnerAvatarSelection() {
  return (
    <LearnerOnboardingLayout
      ttsTitle="What is your name?"
      stepNumber="1"
      nextStep="font-selection"
      previousStep="avatar-selection"
    />
  );
}
