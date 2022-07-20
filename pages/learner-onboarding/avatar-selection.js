import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import styled from "styled-components";
import Image from "next/image";
import avatars from "../../data/avatars.js";

export default function LearnerAvatarSelection() {
  return (
    <LearnerOnboardingLayout
      ttsTitle="Pick your avatar"
      stepNumber={0}
      nextStep="name"
      // we need to change the previous step!
      previousStep=""
    >
      <StyledUnorderedList>
        {/*
          - Make a key-value array from the avatars object.
          - For each key-value pair, split into variables avatar_name and avatar_file.
          - Render a new StyledListItem component with an Image component for each pair.
        */}
        {Object.entries(avatars).map(([avatar_name, avatar_file], index) => (
          <StyledListItem key={index}>
            <Image
              src={avatar_file}
              alt={avatar_name + " avatar"}
              layout="fill"
            />
          </StyledListItem>
        ))}
      </StyledUnorderedList>
    </LearnerOnboardingLayout>
  );
}

const StyledUnorderedList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin: 4rem auto 4rem auto;
  max-width: 44rem;
  padding: 0;
`;

const StyledListItem = styled.li`
  border: 5px solid #ccc;
  border-radius: 1rem;
  cursor: pointer;
  height: 10rem;
  margin: 0.5rem;
  /* Padding won't work here unless we rejig other bits */
  /* padding: 0.5rem; */
  position: relative;
  width: 10rem;

  &:hover {
    border-color: #666;
  }

  &.selected {
    border-color: black;
  }
`;
