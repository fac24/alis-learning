import Link from "next/link";
// import styled from "styled-components";
import avatars from "../data/avatars";
// import Image from "next/image";
import styled, { keyframes } from "styled-components";
import LearnerBigCTAButton from "../components/Styled-Components/LearnerBigCTAButton";
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
      <h2>
        {onboarding
          ? `Hi <b>${learnerName}</b>, welcome back!`
          : `Hi, it looks like this is your first visit.`}
      </h2>
      <Tts>Click the button to get started</Tts>
      <Link
        href={
          onboarding ? "child-landing" : "learner-onboarding/avatar-selection"
        }
        passHref
      >
        <LearnerBigCTAButton id="get_started">Get started!</LearnerBigCTAButton>
      </Link>
      {/* <Link href="adult-onboarding1" passHref>
        <ParentStart>Go to parents section</ParentStart>
      </Link> */}
    </>
  );
}

const ParentStart = styled.a`
  position: absolute;
  text-align: center;
  bottom: 15%;
  left: 50%;
  margin-left: -6.5rem;
  width: 15rem;
  padding: 1.5rem;
  box-shadow: rgb(136 136 136) 5px 10px 8px;
  color: white;
  font-size: 15px;
  border-radius: 20px;
  border: none;
  background-color: rgb(67, 22, 163);
  letter-spacing: 1px;
  cursor: pointer;

  &:hover {
    transform: translateY(0.125rem);
  }
  @media only screen and (max-width: 600px) {
    margin-left: -4.75rem;
    width: 10rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  // column-gap: 80%;
  column-gap: 70%;

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
