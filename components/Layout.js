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
  color: green;
`;

// import Nav from "./Nav";
// // import PaintboxSparkleLogoImage from "../styled-components/PaintboxSparkleLogoImage";
// import Image from "next/image";
// import logo from "../../Public/paintbox-logo.png";
// import styled from "styled-components";

// function Layout(props) {
//   return (
//     <div>
//       <Header>
//         <Image src={logo} alt="paintbox-logo" height={250} width={300} />
//       </Header>
//       <main>{props.children}</main>
//     </div>
//   );
// }

// export default Layout;

// const Header = styled.header`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
// `;
