import LearnerOnboardingLayout from "../../components/LearnerOnboardingLayout";
import styled from "styled-components";

export default function LearnerAvatarSelection() {
  const avatars = {
    butterfly: "/avatars/butterfly.svg",
    caterpillar: "/avatars/caterpillar.svg",
    ladybird: "/avatars/ladybird.svg",
    crab: "/avatars/crab.svg",
    fish: "/avatars/fish.svg",
    penguin: "/avatars/penguin.svg",
    snail: "/avatars/snail.svg",
    warhol: "/avatars/warhol.svg",
  };

  console.log(Object.entries(avatars).map((element) => element[1]));

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
          Object.entries(avatars).map(([avatar_name, avatar_file]) => (
         
<StyledListItem>
            <img src={avatar_file} alt={avatar_name} />
          </StyledListItem>

));
        */}
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
  margin: 0.5rem;
  padding: 0.5rem;
  width: 10rem;

  &:hover {
    border-color: #666;
  }

  &.selected {
    border-color: black;
  }
`;
