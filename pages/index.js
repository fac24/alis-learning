import Link from "next/link";
// import styled from "styled-components";
import avatars from "../data/avatars";
// import Image from "next/image";
import styled, { keyframes } from "styled-components";
import LearnerBigCTAButton from "../components/Styled-Components/LearnerBigCTAButton";
import AdultBackButton from "../components/Styled-Components/AdultBack";
import Tts from "../components/Tts";

export default function Home({ onboarding, learnerName }) {
  return (
    <>
      <Grid>
        {Object.entries(avatars).map(([avatar_name, avatar_file], index) => (
          <Icon key={avatar_name}>
            <LandingImage
              src={avatar_file}
              alt={avatar_name + " avatar"}
              height={100}
              width={100}
            />
          </Icon>
        ))}
      </Grid>
      <LandingMessage>
        {onboarding
          ? `Hi ${learnerName}, welcome back!`
          : `Hi, it looks like this is your first visit.`}
      </LandingMessage>
      <Tts>Click the button to {onboarding ? "continue" : "get started"}</Tts>
      <Link
        href={
          onboarding ? "child-landing" : "learner-onboarding/avatar-selection"
        }
        passHref
      >
        <LearnerBigCTAButton id="get_started">
          {onboarding ? "Continue learning" : "Get started!"}
        </LearnerBigCTAButton>
      </Link>
      <Link href="adult-onboarding1" passHref>
        <AdultStartButton>I'm a parent or teacher</AdultStartButton>
      </Link>
    </>
  );
}

const LandingMessage = styled.h2`
  font-size: 2.25rem;
  font-weight: normal;
  margin: 6rem auto 3rem auto;
  max-width: fit-content;
`;

const AdultStartButton = styled(AdultBackButton)`
  margin: 12rem auto 3rem auto;
  padding-left: 4rem;
  padding-right: 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  // column-gap: 80%;
  column-gap: 70%;
  // position: absolute;

  @media only screen and (max-width: 600px) {
    column-gap: 25%;
    row-gap: 20%;
  }
`;

const Icon = styled.div`
  margin: 2rem;
`;

const AVATAR_DURATION = "2s";

const FloatingAvatar = keyframes`
0% {
  transform: translateY(5px);
}
50% {
  transform: translateY(-5px);
}
100% {
  transform: translateY(5px);
}
`;

const LandingImage = styled.img`
  width: 100%;
  height: auto;
  animation-name: ${FloatingAvatar};
  animation-duration: ${AVATAR_DURATION};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;
