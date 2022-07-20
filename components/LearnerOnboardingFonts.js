import Tts from "../components/tts";
import Link from "next/link";
import LearnerFontsDys from "./Styled-Components/LearnerFontsDys";
import LearnerFontsComic from "./Styled-Components/LearnerFontsComic";

export default function LearnerOnboardingFonts({
  ttsTitle,
  nextStep,
  previousStep,
}) {
  return (
    <>
      <Tts>{ttsTitle}</Tts>
      <div>cat on the mat</div>
      <LearnerFontsDys>cat on the mat</LearnerFontsDys>
      <LearnerFontsComic>cat on the mat</LearnerFontsComic>
      <Link href={nextStep}>
        <a>Next</a>
      </Link>
      <Link href={previousStep}>
        <a>Back</a>
      </Link>
    </>
  );
}
