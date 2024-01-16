import { styled } from "@mui/material/styles";
import paper from "../../images/bible-christliche.png";
import paper1 from "../../images/paper.png";

export const MainContainer = styled("div")`
  position: relative;
  min-height: 100vh;
  @media (max-width: 750px) {
  }
`;

export const CardContainer = styled("div")`
  width: 300px;
  height: 400px;
  position: absolute;
  top: 25%;
  left: 50%;
  transform-style: preserve-3d;
  perspective: 250px;
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
      transform: rotateY(-190deg);
      -webkit-transform: rotateY(-190deg);
    }
  }

  /* &:before {
    content: "";
    position: absolute;
    top: -5px;
    left: 0;
    width: 100%;
    height: 5px;
    background: url(${paper}) no-repeat center center;
    transform-origin: bottom;
    transform: skewX(-45deg);
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: -5px;
    width: 5px;
    height: 100%;
    background: url(${paper}) no-repeat center center;
    transform-origin: left;
    transform: skewY(-45deg);
  } */

  @media (max-width: 750px) {
  }
`;

export const ImgContainer = styled("div")`
  --c1: rgba(221, 150, 70, 0.5);
  --c2: rgba(221, 150, 70, 0.4);
  --c3: rgba(221, 150, 70, 0.3);
  --c4: rgba(221, 150, 70, 0.2);
  --c5: rgba(221, 150, 70, 0.1);
  --c6: rgba(221, 150, 70, 0.05);

  width: 100%;
  height: 100%;
  position: relative;
  transform-origin: left;
  transition: 1s cubic-bezier(0.15, 1.7, 0.84, 0.58);
  /* box-shadow: var(--c1) -5px 5px, var(--c2) -10px 10px, var(--c2) -15px 15px,
    var(--c3) -20px 20px, var(--c3) -25px 25px, var(--c4) -30px 30px,
    var(--c4) -35px 35px, var(--c5) -40px 40px, var(--c5) -45px 45px,
    var(--c6) -50px 50px, var(--c6) -55px 55px; */
`;

export const TextContainer = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: boreder-box;
  padding: 24px;
  z-index: -1;
  color: ${({ theme }) => theme.palette.colorRed.main};
`;

export const ImgVert = styled("img")`
  height: 100%;
  width: 100%;
`;
