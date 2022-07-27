import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import styled from "styled-components";
import LearnerFontSettingSelectionButton from "../../components/Styled-Components/LearnerFontSettingSelectionButton";
import LearnerFontSettingSelectionContainer from "../../components/Styled-Components/LearnerFontSettingSelectionContainer";
import { useState, useEffect } from "react";

export default function LearnerFontsSelection({
  font,
  setFont,
  background,
  avatarNameInLocalStorage,
}) {
  function updateFont(newFont) {
    setFont(newFont);
  }
  let html = (
    <>
      <LearnerFontSettingSelectionContainer>
        <LearnerFontSettingSelectionButton
          onClick={() => updateFont("Comic")}
          className={font === "Comic" ? "selected" : null}
        >
          <LearnerFontsComic>cat on the mat</LearnerFontsComic>
        </LearnerFontSettingSelectionButton>
        <LearnerFontSettingSelectionButton
          onClick={() => updateFont("Dyslexic")}
          className={font === "Dyslexic" ? "selected" : null}
        >
          <LearnerFontsDys>cat on the mat</LearnerFontsDys>
        </LearnerFontSettingSelectionButton>
        <LearnerFontSettingSelectionButton
          onClick={() => updateFont("Roman")}
          className={font === "Roman" ? "selected" : null}
        >
          <LearnerFontsRoman>cat on the mat</LearnerFontsRoman>
        </LearnerFontSettingSelectionButton>
      </LearnerFontSettingSelectionContainer>
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
        background={background}
        font={font}
      />
    </>
  );
}

const LearnerFontsRoman = styled.span`
  font-family: "Times New Roman", Times, serif;
  font-size: 2.25rem;
`;

const LearnerFontsDys = styled.span`
  font-family: OpenDyslexic;
  font-size: 2.25rem;
`;

const LearnerFontsComic = styled.span`
  font-family: ComicNeue;
  font-size: 2.25rem;
`;
