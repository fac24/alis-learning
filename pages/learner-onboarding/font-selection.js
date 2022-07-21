import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import FontFlex from "../../components/Styled-Components/FontFlex";
import styled from "styled-components";
import { useState, useEffect } from "react";

export default function LearnerFontsSelection({
  font,
  setFont,
  background,
  avatarNameInLocalStorage,
}) {
  useEffect(() => {
    document.body.style.backgroundColor = background;
  }, []);

  function updateFont(e) {
    e.preventDefault();
    setFont(e.target.value);
    console.log(font);
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
        stepNumber={2}
        nextStep="font-size-selection"
        previousStep="name"
        children={html}
        avatarNameInLocalStorage={avatarNameInLocalStorage}
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
