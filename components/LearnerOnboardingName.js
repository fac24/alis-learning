import Tts from "../components/tts";
import Link from "next/link";

export default function LearnerOnboardingName({
  ttsTitle,
  nextStep,
  previousStep,
}) {
  return (
    <>
      <Tts>{ttsTitle}</Tts>
      <form>
        <label for="learnerName">Name</label>
        <input type="text" id="learnerName" name="learnerName" />
      </form>
      <Link href={nextStep}>
        <a>Next</a>
      </Link>
      <Link href={previousStep}>
        <a>Back</a>
      </Link>
    </>
  );
}
