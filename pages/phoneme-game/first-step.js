import { useEffect, useState } from "react";
import PhonemeLayout from "../../components//PhonemeLayout";
import { phonemeData } from "../../data/phoneme.js";
import styled from "styled-components";

export default function PhonemeFirstStep({ phonemeLevel }) {
  const [phonemeTiles, setPhonemeTiles] = useState([]);
  // checking to see the data working.
  // we need to identify what level the learner is on ?
  // we want the learner to see three tiles of each letter.
  // only need to pick up one level at a time.
  let currentWordObject = phonemeData.find(
    (word) => word.level === phonemeLevel
  );

  // setting the phoneme tiles here inside the useEffect
  useEffect(() => {
    setPhonemeTiles(currentWordObject.phonemes);
  }, []);

  const html = (
    <>
      <Flex>
        {phonemeTiles.map((tile, index) => (
          <PhonemeTile key={index}>{tile}</PhonemeTile>
        ))}
      </Flex>
    </>
  );

  return (
    <PhonemeLayout
      firstText={"Can you read the word?"}
      secondText={"Press the button and read the word out loud"}
      context={html}
    />
  );
}

const PhonemeTile = styled.p`
  border: 4px solid black;
  text-align: center;
  margin: 0 auto;
  border-radius: 0.625rem;
  width: 6rem;
  height: 6rem;
  font-size: 3rem;
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: 6rem 6rem 6rem;
  gap: 10px;
  text-align: center;
  margin: 0 auto;
  grid-template-rows: repeat(1, 1fr);
`;
