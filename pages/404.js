import PhonemeLayout from "../components/PhonemeLayout";
import styled from "styled-components";
import Star from "../public/decorations/star.svg";
import Image from "next/image";
import Rainbow from "../public/decorations/rainbow.svg";

export default function ErrorPage({ stars }) {
  return (
    <>
      <PhonemeLayout
        firstText={"Oops, nothing to see here yet!"}
        secondText={"Try another game 🙂"}
        stars={stars}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src={Rainbow} alt="rainbow" width={150} height={150} />
        </div>
      </PhonemeLayout>
    </>
  );
}

const Oops = styled.h2`
  text-align: center;
`;
