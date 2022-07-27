import styled from "styled-components";

const LearnerBigCTAButton = styled.a`
  background: linear-gradient(hsl(25, 100%, 62%), hsl(25, 100%, 51%));
  border-radius: 1rem;
  box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
  color: #fff;
  cursor: pointer;
  display: block;
  margin: 3rem auto;
  padding: 1rem 6rem;
  font-size: 2.25rem;
  font-weight: bold;
  letter-spacing: 0.25rem;
  text-decoration: none;
  text-shadow: 0px 2px 4px black;
  width: fit-content;

  &:active {
    transform: translateY(0.2rem);
  }
`;

// const LearnerBigCTAButton = styled.a`
//   position: absolute;
//   top: 40%;
//   left: 50%;
//   margin-left: -6.5rem;
//   width: 15rem;
//   padding: 2rem;
//   box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
//   color: #000;
//   font-size: 18px;
//   font-weight: 700;
//   border-radius: 20px;
//   text-align: center;
//   border: none;
//   background-color: orange;
//   letter-spacing: 2px;
//   cursor: pointer;

//   &:hover {
//     transform: translateY(0.125rem);
//   }

//   @media only screen and (max-width: 600px) {
//     margin-left: -4.75rem;
//     width: 10rem;
//   }
// `;

export default LearnerBigCTAButton;
