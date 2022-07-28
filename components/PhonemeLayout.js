import Tts from "./Tts";
import Link from "next/link";
import { ImHome3, ImStarFull } from "react-icons/im";
import styled from "styled-components";
import { useEffect } from "react";
import Image from "next/image";
import Star from "../public/decorations/star.svg";

// need to figure out what props we will send for the gameplay - the word broken into an array for the tiles makes sense. Then we can map through and use the same template regarless of how long the word is :)

export default function PhonemeLayout({
  firstText,
  secondText,
  stars,
  children,
}) {
  return (
    <>
      <LearnerStatusContainer>
        <Link href="/child-landing" passHref>
          {/* we can link to the map here in the future when we have it */}
          <a>
            <ImHome3
              size="4rem"
              cursor="pointer"
              color="black"
              aria-label="Link back to games selection"
            />
          </a>
        </Link>
        <ImageContainer>
          <Image src={Star} alt="star" width={80} height={80} />
        </ImageContainer>
        {/* <Score suppressHydrationWarning={true}>{stars}</Score> */}
        <Score>{stars}</Score>
      </LearnerStatusContainer>
      <Tts>{firstText}</Tts>

      {children}

      <Tts>{secondText}</Tts>
    </>
  );
}

const Score = styled.p`
  font-size: 4rem;
  margin: 0;
  font-weight: 600;
`;

const ImageContainer = styled.div`
  padding: 0 10px;
`;

const LearnerStatusContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -8rem;
  padding-left: 10px;
`;
