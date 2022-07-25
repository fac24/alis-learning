import { useEffect, useState } from "react";
import PhonemeLayout from "../../components//PhonemeLayout";
import { phonemeData } from "../../data/phoneme.js";

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
      {phonemeTiles.map((tile, index) => (
        <p key={index}>{tile}</p>
      ))}
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
