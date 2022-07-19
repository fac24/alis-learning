import Tts from "../components/tts";
import Link from "next/link";

export default function LearnerOnboardingLayout(props) {
  const ttsTitle = props.ttsTitle;

  return (
    <>
      <div>Progress bar component</div>
      <Tts>{ttsTitle}</Tts>
      <div>{props.children}</div>
      <Link href={props.nextStep}>
        <a>Next</a>
      </Link>
      <Link href={props.previousStep}>
        <a>Back</a>
      </Link>
    </>
  );
}
