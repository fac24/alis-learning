import Tts from "./Tts";
import Link from "next/link";
import LearnerOnboardingProgressBar from "../components/LearnerOnboardingProgressBar";
import LearnerBigCTAButton from "../components/Styled-Components/LearnerBigCTAButton";
import LearnerNextButton from "./Styled-Components/LearnerNextButton";
import LearnerBackButton from "./Styled-Components/LearnerBackButton";
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
        {completed ? (
          <LearnerBigCTAButton>Let&apos;s play a game</LearnerBigCTAButton>
        ) : (
          <LearnerNextButton>Next</LearnerNextButton>
        )}
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
