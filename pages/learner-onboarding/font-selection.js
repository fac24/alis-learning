import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import LearnerFontsDys from "../../components/Styled-Components/LearnerFontsDys";
import LearnerFontsComic from "../../components/Styled-Components/LearnerFontsComic";
import LearnerFontsRoman from "../../components/Styled-Components/LearnerFontsRoman";
import { useState } from "react";

export default function LearnerFontsSelection() {
  const [font, setFont] = useState("");

  function updateFont(e) {
    e.preventDefault();
    setFont(e.target.value);
    console.log(font);
//We need to update the local storage here!
  }
  let html = (
    <>
      <LearnerFontsRoman onClick={updateFont} value="Roman">
        cat on the mat
      </LearnerFontsRoman>
      <LearnerFontsDys onClick={updateFont} value="Dyslexic">
        cat on the mat
      </LearnerFontsDys>
      <LearnerFontsComic onClick={updateFont} value="Comic">
        cat on the mat
      </LearnerFontsComic>
    </>
  );

  return (
    <>
      <LearnerOnboardingLayout
        ttsTitle="What is easier to read?"
        nextStep="font-size-selection"
        previousStep="name"
        children={html}
      />
    </>
  );
}
