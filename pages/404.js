import PhonemeLayout from "../components/PhonemeLayout";
import styled from "styled-components";
import Star from "../public/decorations/star.svg";
import Image from "next/image";

export default function ErrorPage({ stars, setStars }) {
  return (
    <>
      <PhonemeLayout stars={stars}>
        <Oops>Oops, nothing to see here yet!</Oops>
      </PhonemeLayout>
    </>
  );
}

const Oops = styled.h2`
  text-align: center;
`;
