import Tts from "./Tts";
import Link from "next/link";
import LearnerOnboardingProgressBar from "../components/LearnerOnboardingProgressBar";
import LearnerNextButton from "../components/Styled-Components/LearnerNextButton";
import LearnerBackButton from "../components/Styled-Components/LearnerBackButton";
import { useEffect } from "react";

export default function LearnerOnboardingLayout({
  ttsTitle,
  children,
  stepNumber,
  nextStep,
  previousStep,
  completed,
  avatarNameInLocalStorage,
  background,
}) {
  return (
    <>
      <LearnerOnboardingProgressBar
        stepNumber={stepNumber}
        totalSteps={5}
        avatarNameInLocalStorage={avatarNameInLocalStorage}
      />
      <Tts>{ttsTitle}</Tts>
      <div>{children}</div>
      <Link
        href={completed ? "/child-landing" : `/learner-onboarding/${nextStep}`}
        passHref
      >
        <LearnerNextButton>
          {completed ? "Lets play a game" : "Next"}
        </LearnerNextButton>
      </Link>
      <Link
        href={!previousStep ? "/" : `/learner-onboarding/${previousStep}`}
        passHref
      >
        <LearnerBackButton>Back</LearnerBackButton>
      </Link>
    </>
  );
}
