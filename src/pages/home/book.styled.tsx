import { styled } from "@mui/material/styles";
import paper1 from "../../images/paper.png";

export const MainContainer = styled("div")`
  position: relative;
  min-height: 24vh;
  @media (max-width: 750px) {
  }
`;

export const CardContainer = styled("div")`
  width: 220px;
  height: 300px;
  position: absolute;
  top: 95%;
  left: 55%;
  perspective: 2000px;
  transform: rotateX(50deg) skewX(20deg) translate(-50px, -400px);
  background: url(${paper1}) no-repeat;
  background-size: cover;
  transform-style: preserve-3d;
  transition: 8s;
  animation: one 8s forwards 2s;

  .imgBox {
    animation: open 2s forwards 1s;
  }

  @keyframes one {
    0% {
      -webkit-transform: translate(-50px, -300px) rotateX(50deg) skewX(20deg);
      transform: translate(-50px, -300px) rotateX(50deg) skewX(20deg);
    }
    100% {
      transform: perspective(2000px) rotate(-10deg);
      -webkit-transform: rotateX(0) scale(1.8) translate(-50px, -200px);
      transform: rotateX(0) scale(2) translate(30px, -150px);
      -webkit-transform: rotateX(0) scale(1.8) translate(30px, -200px);
    }
  }

  @-webkit-keyframes one {
    0% {
      -webkit-transform: translate(15px, -400px) rotateX(50deg) skewX(20deg);
      transform: translate(15px, -400px) rotateX(50deg) skewX(20deg);
    }
    100% {
      transform: perspective(2000px) rotate(-10deg);
      -webkit-transform: rotateX(0) scale(1.8) translate(-50px, -200px);
      transform: rotateX(0) scale(2) translate(30px, -150px);
      -webkit-transform: rotateX(0) scale(1.8) translate(30px, -200px);
    }
  }

  @keyframes open {
    100% {
      transform: rotateY(-180deg);
      -webkit-transform: rotateY(-180deg);
    }
  }

  @media (max-width: 750px) {
  }
`;

export const ImgContainer = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  transform-origin: left;
`;

export const TextContainer = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 95%;
  padding-top: 2vh;
  z-index: -1;
  color: ${({ theme }) => theme.palette.colorRed.main};
`;

export const ImgVert = styled("img")`
  height: 100%;
  width: 100%;
`;
