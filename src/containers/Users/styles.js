import styled from "styled-components"
import Backgroud from "../../assets/backgroud2.svg"


export const Container = styled.div`
background: url("${Backgroud}");
background-size: cover ;
display: flex;
gap: 40px;
align-items: center;
flex-direction: column;
width: 100vw;
height: 100%;
min-height: 100vh;

`;

export const Image = styled.img`
margin-top: 30px;
`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 342px;
    height: 58px;
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 20px;

    font-weight: 400px;
    font-size: 20px;
    line-height: 28px;

    p {
      color: rgba(255, 255, 255, 1);
    }

    button {
      background: none;
      border: none;
      cursor: pointer;

      &:active {
         opacity: 0.8;
      
    }
    }
   


 

 
 `