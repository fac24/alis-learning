import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
// import LearnerFontsDys from "../../components/Styled-Components/LearnerFontsDys";
// import LearnerFontsComic from "../../components/Styled-Components/LearnerFontsComic";
// import LearnerFontsRoman from "../../components/Styled-Components/LearnerFontsRoman";
import FontFlex from "../../components/Styled-Components/FontFlex";
import styled from "styled-components";
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
      <FontFlex>
        <LearnerFontsRoman onClick={updateFont} value="Roman">
          cat on the mat
        </LearnerFontsRoman>
        <LearnerFontsDys onClick={updateFont} value="Dyslexic">
          cat on the mat
        </LearnerFontsDys>
        <LearnerFontsComic onClick={updateFont} value="Comic">
          cat on the mat
        </LearnerFontsComic>
      </FontFlex>
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

const LearnerFontsRoman = styled.button`
  font-family: "Times New Roman", Times, serif;
  font-size: 1.8rem;
  margin: 10px;
  padding: 12px 18px;
  background-color: transparent;
  border: none;
`;

const LearnerFontsDys = styled.button`
  font-family: OpenDyslexic;
  font-size: 1.8rem;
  margin: 10px;
  padding: 12px 18px;
  background-color: transparent;
  border: none;
`;

const LearnerFontsComic = styled.button`
  font-family: ComicNeue;
  font-size: 1.8rem;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 12px 18px;
  background-color: transparent;
  border: none;
`;
