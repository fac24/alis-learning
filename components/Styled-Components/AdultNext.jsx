import styled from "styled-components";

// The absolute and and top/left 50% move the buttons top left corner to the center of the page
// minus some margin on top and left to bring the whole thing back to the center
// If you want to adjust the position change the 'margin-top' and the 'margin-left' accordingly
// ask maria if you are confused (:

const AdultNext = styled.button`
position: absolute;
top: 50%;
left: 50%;
margin-top: -7rem;
margin-left: -7.5rem;
width: 13rem;
padding: 1.5rem;
box-shadow: 5px 10px 8px #888888;
color: white;
font-size: 15px;
border-radius: 20px;
border: none;
background-color: #4316A3;
letter-spacing: 1px;
text-align: center;
cursor: pointer;

&:hover{
    transform: translateY(0.125rem);
}
`;



export default AdultNext;