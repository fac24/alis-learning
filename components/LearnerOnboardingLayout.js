import Tts from "../components/tts";
import Link from "next/link";
import LearnerOnboardingProgressBar from "../components/LearnerOnboardingProgressBar";
import ChildNext from "../components/Styled-Components/ChildNext";
import Back from "../components/Styled-Components/Back";

export default function LearnerOnboardingLayout({
  ttsTitle,
  children,
  stepNumber,
  nextStep,
  previousStep,
  completed,
  avatarNameInLocalStorage,
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
      >
        <ChildNext>{completed ? "Lets play a game" : "Next"}</ChildNext>
      </Link>
      <Link href={!previousStep ? "/" : `/learner-onboarding/${previousStep}`}>
        <Back>Back</Back>
      </Link>
    </>
  );
}
