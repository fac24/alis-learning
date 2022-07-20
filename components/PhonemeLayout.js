import Tts from "../components/tts";
import Link from "next/link";
import GameNext from "../components/Styled-Components/GameNext";
import { ImMic, ImHome3, ImStarFull } from "react-icons/im";
import styled from "styled-components";
import { useState } from "react";

// need to figure out what props we will send for the gameplay - the word broken into an array for the tiles makes sense. Then we can map through and use the same template regarless of how long the word is :)

export default function LearnerOnboardingLayout({ nextStep, word }) {
  // Will want to use and update local storage with the stars
  const [stars, setStars] = useState(0);
  return (
    <>
      <Link href="/child-landing">
        {/* do we want to link to the map instead when we have it? */}
        <a>
          <ImHome3
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
            size="50px"
            cursor="pointer"
            // color="" if we want to change the colour
          />
        </a>
      </Link>
      <ImStarFull
        style={{
          position: "absolute",
          top: "20px",
          left: "100px",
        }}
        color="gold"
        size="50px"
      />
      <Score>{stars}</Score>
      <Tts>Can you read the word?</Tts>

      <p>GAME WILL GO HERE</p>
      <Link href={`/phoneme-game/${nextStep}`}>
        <GameNext>
          <ImMic /> Go!
        </GameNext>
      </Link>
      <Tts>Press the button and read the word out loud</Tts>
    </>
  );
}

const Score = styled.div`
  font-weight: 700;
  font-size: 60px;
  position: absolute;
  top: 10px;
  left: 170px;
`;
