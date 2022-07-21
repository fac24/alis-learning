import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import styled from "styled-components";
import Image from "next/image";
import avatars from "../../data/avatars.js";
import useLocalStorageState from "../../components/Hooks/useLocalStorageState";

// key of avatar
// set a key value of particular avatar
export default function LearnerAvatarSelection() {
  const [avatar, setAvatar] = useLocalStorageState("avatar", "") || [
    null,
    null,
  ];

  function handleClick(avatar_name) {
    // calling the function for setAvatar to select the avatar name once learner handles that click.
    setAvatar(avatar_name);
    // console.log(avatar_name);
    // console.log("ladyBird");
  }

  return (
    <LearnerOnboardingLayout
      ttsTitle="Pick your avatar"
      stepNumber={0}
      nextStep="name"
      // we need to change the previous step!
    >
      <StyledUnorderedList>
        {/*
          - Make a key-value array from the avatars object.
          - For each key-value pair, split into variables avatar_name and avatar_file.
          - Render a new StyledListItem component with an Image component for each pair.
        */}
        {Object.entries(avatars).map(([avatar_name, avatar_file], index) => (
          <StyledListItem onClick={() => handleClick(avatar_name)} key={index}>
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

// Selecting an Avatar //

// Step One = selecting an avatar by clicking
// set the avatar so that learner may wish to pick an avatar they desire.

// function setAvatar() {
// first part of local storage would be the key picking up the avartar
// the initial value.
// custom hook
// first is the first value set of the avatar.
// second is the function that lets you update the value of the avatar updated
// const [avatar, setAvatar] = useLocalStorageState("avatar", "image") || [
//   null,
//   null,
// ];
// using || null, null for nextJS to recognise
// useState to be set as null
// onclick so that learner clicks and picks up in the console
// creating a function to handle click.
// li as clickable on function for handling click.

// }

// StepTwo = now setting the avatar inside the progress bar.

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
