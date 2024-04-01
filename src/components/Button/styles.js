import styled from "styled-components";

export const Button = styled.button`
 width: 342px;
 height: 58px;
 padding-left: 20px;
 border-radius: 14px;
 border: ${props => props.isBack ? "solid 1px  rgba(255, 255, 255, 1) ;" : "none"};
 background-color: ${props => props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"} ;
 color: rgba(255, 255, 255, 1);
 font-weight: 700px;
 font-size: 17px;
 line-height: 28px;
 cursor: pointer;
 margin-top: 130px;
 display: flex;
 align-items: center;
 justify-content: center;
 gap: 10px;

 &:hover {
    opacity: 0.8;
 }
 &:active {
    opacity: 0.2;
 }
 img {
   transform: ${props => props.isBack && "rotate(180deg)"};
 }
 `;


