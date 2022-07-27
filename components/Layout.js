import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import { useEffect } from "react";

export default function Layout({ children, font, fontSize, background }) {
  useEffect(() => {
    // the if statement below isn't currently working - I (maria) was trying trying to get learner background choice to NOT show on the adult pages

    // if (children.type.name != "Home" || children.type.name !== "Adult") {
    document.body.style.backgroundColor = background;
    // }

    document.documentElement.className = `font-size-${fontSize}`;
  }, [background, fontSize]);

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
      </Head>
      <header>
        <StyledTitle className="atitle">
          <Link href="/">
            <a>Alis Learning</a>
          </Link>
        </StyledTitle>
      </header>
      <main className={`${font} ${fontSize}`}>{children}</main>
    </>
  );
}

const StyledTitle = styled.h1`
  font-family: Arial, sans-serif;
  margin: 3rem auto;
  text-align: center;
  // user-select: none;

  & > a {
    color: #666;
    text-decoration: none;
  }
`;
