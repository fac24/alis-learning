import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";

export default function OnboardingDone() {
  return (
    <LearnerOnboardingLayout
      ttsTitle="Well done! Now you're ready to play a game."
      // we need to change this next step once we have the map page!
      stepNumber="5"
      previousStep="background-selection"
      nextStep="/"
      completed="true"
    />
  );
}
