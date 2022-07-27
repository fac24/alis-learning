import Tts from "../components/Tts";
import Link from "next/link";
import styled from "styled-components";
import { useEffect } from "react";

export default function ChildLanding({ learnerName }) {
  return (
    <>
      <h2>{learnerName ? `Hi, ${learnerName}!` : "Hi there!"}</h2>

      <Tts>What game would you like to play?</Tts>
      <Link href="phoneme-game" passHref>
        <GameTile tabIndex={0}>Phoneme Game</GameTile>
      </Link>
    </>
  );
}

const GameTile = styled.a`
  border: 5px solid #ccc;
  border-radius: 1rem;
  cursor: pointer;
  display: block;
  text-align: center;
  max-width: 9rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  margin: 0 auto;

  &:hover {
    border-color: #666;
  }
`;
