import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import { useEffect } from "react";

export default function OnboardingDone({
  setOnboarding,
  background,
  font, 
  fontSize,
  avatarNameInLocalStorage,
}) {
  useEffect(() => {
    setOnboarding(true);
  }, []);

  return (
    <LearnerOnboardingLayout
      ttsTitle="Well done! Now you're ready to play a game."
      stepNumber={5}
      previousStep="background-selection"
      nextStep="child-landing"
      completed="true"
      avatarNameInLocalStorage={avatarNameInLocalStorage}
      background={background}
      font={font}
      fontSize={fontSize}
    />
  );
}
