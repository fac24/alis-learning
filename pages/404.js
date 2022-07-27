import PhonemeLayout from "../components/PhonemeLayout";
import styled from "styled-components";
import Star from "../public/decorations/star.svg";
import Rainbow from "../public/decorations/Rainbow.svg";
import Image from "next/image";

export default function ErrorPage({ stars, setStars }) {
  return (
    <>
      <PhonemeLayout
        stars={stars}
        firstText={"Oops, nothing to see here yet!"}
        secondText={"Please come back later"}
      >
        <RainbowDiv>
          <Image src={Rainbow} alt={"rainbow"} width={200} height={300} />
        </RainbowDiv>
      </PhonemeLayout>
    </>
  );
}

const RainbowDiv = styled.div`
  text-align: center;
`;