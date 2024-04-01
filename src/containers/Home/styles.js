import styled from "styled-components"
import Backgroud from "../../assets/backgroud.svg"


export const Container = styled.div`
background: url("${Backgroud}");
background-size: cover ;
display: flex;
gap: 40px;
align-items: center;
flex-direction: column;

`;
export const Image = styled.img`
margin-top: 30px;
`;
export const InputLabel = styled.p`
color: rgba(238, 238, 238, 1);
font-weight: bold;
font-size: 18px;
margin-left: 20px;
margin-bottom: 5px;
`;
export const Input = styled.input`
background-color: rgba(255, 255, 255, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
padding-left: 20px;
border: none;
box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
outline: none;
color: rgba(255, 255, 255, 1);
font-weight: 400px;
font-size: 20px ;
line-height: 28px;
margin-bottom: 35px;
 
`;









