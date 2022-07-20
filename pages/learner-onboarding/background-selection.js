import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";

export default function LearnerBackgroudSelection() {
  return (
    <LearnerOnboardingLayout
      ttsTitle="Click the colours to change the background."
      stepNumber={4}
      nextStep="onboarding-done"
      previousStep="font-size-selection"
    />
  );
}
