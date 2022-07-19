import Head from "next/head";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Alis Learning</title>
        <meta
          name="description"
          content="A learning app to help children with dyslexia with their reading and writing"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* font go here */}
      </Head>
      <header>
        <StyledTitle>Alis Learning</StyledTitle>
      </header>
      <main>{children}</main>
    </>
  );
}

const StyledTitle = styled.h1`
  font-family: OpenDyslexic;
  color: black;
  font-family: OpenDyslexic;
`;


