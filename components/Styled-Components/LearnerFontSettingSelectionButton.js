import styled from "styled-components";

// Use a button so that keyboard enter fires onClick :)
const LearnerFontSettingSelectionButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 5px solid #ccc;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  padding: 1rem 2rem;
  user-select: none;

  // Use :focus for quick 'n' imperfect styling of tab focus
  &:hover,
  &:focus {
    border-color: #666;
  }

  &.selected {
    border-color: black;
  }
`;

export default LearnerFontSettingSelectionButton;
