import Tts from "../components/Tts";
import Link from "next/link";
import styled from "styled-components";

export default function ChildLanding({ learnerName }) {
  return (
    <>
      <SayHi>{learnerName ? `Hi, ${learnerName}!` : "Hi there!"}</SayHi>

      <Tts>What game would you like to play?</Tts>

      <GameSelection>
        <Link href="404" passHref>
          <OneHundred>One Hundred Words</OneHundred>
        </Link>
        <Link href="phoneme-game" passHref>
          <GameTile tabIndex={0}>Phoneme Game</GameTile>
        </Link>
        <Link href="404" passHref>
          <StoryTime>Story Time</StoryTime>
        </Link>
      </GameSelection>
    </>
  );
}

const GameTile = styled.a`
  align-items: center;
  justify-content: center;
  border: 5px solid #ccc;
  border-radius: 1rem;
  cursor: pointer;
  display: flex;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  max-width: 16rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  margin: 0 auto;
  text-decoration: none;
  color: black;

  &:hover {
    color: white;
    border-color: #320e80;
    background-color: #cccccc;
    background-image: linear-gradient(#4316a3, #320e80, darkorange);
  }
`;

const OneHundred = styled(GameTile)`
  &:hover {
    opacity: 0.7;
    border-color: #21a300;
    background-color: #cccccc;
    background-image: linear-gradient(#11d600, #21a300, darkorange);
  }
`;

const StoryTime = styled(GameTile)`
  &:hover {
    opacity: 0.7;
    border-color: #21a300;
    background-color: #cccccc;
    background-image: linear-gradient(#11d600, #21a300, darkorange);
  }
`;

const SayHi = styled.h2`
  font-size: 2.25rem;
  text-align: center;
`;

const GameSelection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-evenly;
  margin-top: 3rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 64rem;
`;
