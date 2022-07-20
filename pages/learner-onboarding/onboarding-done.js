import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";

export default function OnboardingDone() {
  return (
    <LearnerOnboardingLayout
      ttsTitle="Well done! Now you're ready to play a game."
      stepNumber={5}
      previousStep="background-selection"
      nextStep="child-landing"
      completed="true"
    />
  );
}
