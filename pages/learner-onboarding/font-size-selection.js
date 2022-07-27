import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import styled from "styled-components";
import FontFlex from "../../components/Styled-Components/FontFlex";
import { useEffect } from "react";

export default function LearnerFontSizesSelection({
  fontSize,
  setFontSize,
  background,
  avatarNameInLocalStorage,
}) {
  function updateFontSize(newSize) {
    setFontSize(newSize);
  }
  let html = (
    <>
      <FontFlex>
        <LearnerFontSizeSelectionButton
          tabIndex={0}
          onClick={() => updateFontSize("small")}
          className={fontSize === "small" ? "selected" : null}
        >
          <LearnerFontSizeSmall>cat on the mat</LearnerFontSizeSmall>
        </LearnerFontSizeSelectionButton>
        <LearnerFontSizeSelectionButton
          tabIndex={0}
          onClick={() => updateFontSize("medium")}
          className={fontSize === "medium" ? "selected" : null}
        >
          <LearnerFontSizeMedium>cat on the mat</LearnerFontSizeMedium>
        </LearnerFontSizeSelectionButton>
        <LearnerFontSizeSelectionButton
          tabIndex={0}
          onClick={() => updateFontSize("large")}
          className={fontSize === "large" ? "selected" : null}
        >
          <LearnerFontSizeLarge>cat on the mat</LearnerFontSizeLarge>
        </LearnerFontSizeSelectionButton>
      </FontFlex>
    </>
  );

  return (
    <>
      <LearnerOnboardingLayout
        ttsTitle="What is easier to read?"
        stepNumber={3}
        nextStep="background-selection"
        previousStep="font-selection"
        children={html}
        avatarNameInLocalStorage={avatarNameInLocalStorage}
        background={background}
        fontSize={fontSize}
      />
    </>
  );
}

const LearnerFontSizeSelectionButton = styled.a`
  align-items: center;
  border: 5px solid #ccc;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 1rem;
  user-select: none;

  &:hover {
    border-color: #666;
  }

  &.selected {
    border-color: black;
  }
`;

// margin-top: 10px;
// margin-bottom: 10px;
// padding: 12px 18px;
// background-color: transparent;
// border: none;

const LearnerFontSizeSmall = styled.span`
  font-size: 2rem;
`;

const LearnerFontSizeMedium = styled.span`
  font-size: 3.5rem;
`;

const LearnerFontSizeLarge = styled.span`
  font-size: 5rem;
`;
