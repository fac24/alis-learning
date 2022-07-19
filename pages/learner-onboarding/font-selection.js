import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import LearnerFontsDys from "../../components/Styled-Components/LearnerFontsDys";
import LearnerFontsComic from "../../components/Styled-Components/LearnerFontsComic";
export default function LearnerFontsSelection() {
  let html = (
    <>
      <div>cat on the mat</div>
      <LearnerFontsDys>cat on the mat</LearnerFontsDys>
      <LearnerFontsComic>cat on the mat</LearnerFontsComic>
    </>
  );
  return (
    <>
      <LearnerOnboardingLayout
        ttsTitle="What is easier to read?"
        nextStep="font-size-selection"
        previousStep="learner-name"
        children={html}
      />
    </>
  );
}
