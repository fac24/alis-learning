import Tts from "./Tts";
import Link from "next/link";
import { ImHome3, ImStarFull } from "react-icons/im";
import styled from "styled-components";
import { useEffect } from "react";
import Image from "next/image";
import Star from "../public/decorations/star.png";

// need to figure out what props we will send for the gameplay - the word broken into an array for the tiles makes sense. Then we can map through and use the same template regarless of how long the word is :)

export default function PhonemeLayout({
  firstText,
  secondText,
  background,
  stars,
  children,
}) {
  // Will want to use and update local storage with the stars

  useEffect(() => {
    document.body.style.backgroundColor = background;
  }, []);

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
      <ImageContainer>
        <Image src={Star} alt="star" width={80} height={80} />
      </ImageContainer>
      <Score suppressHydrationWarning={true}>{stars}</Score>
      {/* <Score>{stars}</Score> */}
      <Tts>{firstText}</Tts>

      {children}

      <Tts>{secondText}</Tts>
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

const ImageContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 80px;
`;
