import LearnerOnboardingFonts from "../../components/LearnerOnboardingFonts";

export default function LearnerFontsSelection() {
  return (
    <LearnerOnboardingFonts
      ttsTitle="What is easier to read?"
      nextStep="font-size-selection"
      previousStep="learner-name"
    />
  );
}
