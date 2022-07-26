import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
// import styled from "styled-components";
import styled, { keyframes } from "styled-components";
// import Image from "next/image";
import avatars from "../../data/avatars.js";
import { useEffect } from "react";

export default function LearnerAvatarSelection({
  background,
  avatarNameInLocalStorage,
  setAvatarNameInLocalStorage,
}) {
  function handleClick(avatar_name) {
    // calling the function for setAvatar to select the avatar name once learner handles that click.
    setAvatarNameInLocalStorage(avatar_name);
    // console.log(avatar_name);
    // console.log("ladyBird");
  }

  return (
    <LearnerOnboardingLayout
      ttsTitle="Pick your avatar"
      stepNumber={0}
      nextStep="name"
      avatarNameInLocalStorage={avatarNameInLocalStorage}
      background={background}
      // we need to change the previous step!
    >
      <StyledUnorderedList>
        {/*
          - Make a key-value array from the avatars object.
          - For each key-value pair, split into variables avatar_name and avatar_file.
          - Render a new StyledListItem component with an Image component for each pair.
        */}
        {Object.entries(avatars).map(([avatar_name, avatar_file], index) => (
          <StyledListItem
            className={
              avatar_name === avatarNameInLocalStorage ? "selected" : ""
            }
            onClick={() => handleClick(avatar_name)}
            key={index}
          >
            <StyledImage
              src={avatar_file}
              alt={avatar_name + " avatar"}
              layout="fill"
              className="shake_avatar"
            />
            <Shadow />
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
    // animation: shake 0.5s;
    // animation-iteration-count: 6s;
  }
`;

const AVATAR_SIZE = "65px";
// const DURATION = "0.5s";
const DURATION = "1s";
const SHADOW_HEIGHT = `${Math.round(48 / 5)}px`;
const DROP_HEIGHT = "200px";
const OFFSET = "0px";

const bounce = keyframes`
  from {
    transform: translateY(0) scale(1);
  }
  to {
    transform: translateY(${DROP_HEIGHT}) scale(1, 0.7);
  }
`;

const grow = keyframes`
  from {
    transform: scale(0.2, 0.5);
  }
  to {
    transform: scale(1.5, 0.8);
  }
`;

const StyledImage = styled.img`
  position: absolute;
  top: ${OFFSET};
  left: calc(25% - ${AVATAR_SIZE} / 2);
  animation-name: ${bounce};
  animation-duration: ${DURATION};
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  animation-iteration-count: infinite;
`;

const Shadow = styled.div`
  width: ${AVATAR_SIZE};
  height: ${SHADOW_HEIGHT};
  background: radial-gradient(
    50% 50%,
    rgba(150, 150, 150, 1),
    rgba(150, 150, 150, 0.05)
  );
  position: absolute;
  top: calc(
    ${OFFSET} + ${DROP_HEIGHT} + ${AVATAR_SIZE} - 1.5 * ${SHADOW_HEIGHT}
  );
  left: calc(25% - ${AVATAR_SIZE} / 2);
  animation-name: ${grow};
  animation-duration: ${DURATION};
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  animation-iteration-count: infinite;
`;
