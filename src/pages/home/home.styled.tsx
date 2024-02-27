import { styled } from "@mui/material/styles";
import img1 from "../../images/2ecran.png";

export const MainContainer = styled("div")`
  width: 100%;
  /* margin-bottom: 40vh; */
  overflow-x: hidden;
  @media (max-width: 750px) {
  }
`;

export const TitreColor = styled("div")`
  transition: 500ms;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; //dedcdca9
  background-clip: text;

  background: linear-gradient(
    45deg,
    #ffffff,
    #a1a1a1,
    #ffffff,
    #a1a1a1,
    #ffffff
  );

  background-size: 3200px 200px;
  animation: gradient 15s linear infinite;
  color: transparent;
  background-clip: text;

  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
`;

export const GridContainer = styled("div")`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 30% 20%;
  justify-items: center;
  position: relative;
  @media (max-width: 750px) {
  }
`;

export const GridContainer2ecran = styled(GridContainer)`
  align-items: center;

  @media (max-width: 750px) {
  }
`;

export const Side = styled("div")`
  text-align: center;
  width: 50vw;
  height: 100vh;
  transition: transform 0.3s ease-in-out;
`;

export const LeftSide1ecran = styled(Side)`
  grid-row: 1 / span 3;
  grid-column: 1;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: #dedcdca9;
`;

export const RightSide1ecran = styled(Side)`
  grid-row: 1 / span 3;
  grid-column: 2;
  text-align: center;
  background-color: #dedcdc;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Puzzle = styled("div")`
  grid-column: 1 / span 2;
  grid-row: 2;
  padding-top: 6vh;
  display: grid;
  grid-template-columns: 14.286% 3.5715% 10.7145% 3.5715% 10.7145% 3.5715% 10.7145% 3.5715% 10.7145% 3.5715% 10.7145% 3.5715% 14.286%;
  align-items: center;
  width: 55vw;
  height: 18vh;
  color: #dedcdca9;
`;

export const ElAnimation = styled("div")`
  &:hover .hide {
    animation: none;
    -webkit-animation: flip-in-hor-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: flip-in-hor-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  &:hover .card {
    animation: none;
    -webkit-animation: flip-in-hor-bottom 0.5s
      cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: flip-in-hor-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  /**
 * ----------------------------------------
 * animation flip-in-hor-bottom
 * ----------------------------------------
 */
  @-webkit-keyframes flip-in-hor-bottom {
    0% {
      -webkit-transform: rotateX(80deg);
      transform: rotateX(80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      opacity: 1;
    }
  }
  @keyframes flip-in-hor-bottom {
    0% {
      -webkit-transform: rotateX(80deg);
      transform: rotateX(80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      opacity: 1;
    }
  }

  /**
 * ----------------------------------------
 * animation flip-in-hor-top
 * ----------------------------------------
 */
  @-webkit-keyframes flip-in-hor-top {
    0% {
      -webkit-transform: rotateX(-80deg);
      transform: rotateX(-80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      opacity: 1;
    }
  }
  @keyframes flip-in-hor-top {
    0% {
      -webkit-transform: rotateX(-80deg);
      transform: rotateX(-80deg);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      opacity: 1;
    }
  }
`;

export const Element = styled(ElAnimation)<{ index: number }>`
  grid-row: 1;
  grid-column: ${({ index }) =>
    index === 1 || index == 2
      ? `${index} / span 2`
      : `${index + (index - 2)} / span 2`};
  position: relative;
`;

export const ElImg = styled("img")`
  width: 10vw;
  display: block;
`;

export const ElImgHide = styled("img")`
  width: 10vw;
  display: none;
`;

export const ElText = styled("div")<{ index: number }>`
  position: absolute;
  top: 6vh;
  right: ${({ index }) => (index === 1 || index === 7 ? "3vw" : "1.5vw")};
  color: ${({ index }) => (index > 3 ? "white" : "inherit")};
  height: 100%;
  width: 4%;
  word-break: break-all;
  writing-mode: vertical-lr;
  transform: scale(-1);
  text-align: end;
  z-index: 100;
`;

export const TitleLeft1ecran = styled("div")`
  margin-top: 24vh;
  grid-column: 1 / span 2;
  grid-row: 1;
  text-align: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  color: #dedcdca9;

  -webkit-animation: swirl-in-fwd 0.6s ease-out both;
  animation: swirl-in-fwd 0.6s ease-out both;

  @-webkit-keyframes swirl-in-fwd {
    0% {
      -webkit-transform: rotate(-540deg) scale(0);
      transform: rotate(-540deg) scale(0);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotate(0) scale(1);
      transform: rotate(0) scale(1);
      opacity: 1;
    }
  }
  @keyframes swirl-in-fwd {
    0% {
      -webkit-transform: rotate(-540deg) scale(0);
      transform: rotate(-540deg) scale(0);
      opacity: 0;
    }
    100% {
      -webkit-transform: rotate(0) scale(1);
      transform: rotate(0) scale(1);
      opacity: 1;
    }
  }
`;
export const TitleRight1ecran = styled("div")`
  margin-top: 24vh;
  grid-column: 1 / span 2;
  grid-row: 1;
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.main};
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
`;

export const LogoContainer = styled("div")`
  text-align: center;
  padding-top: 20vh;
`;

export const CatContainer = styled("div")`
  position: absolute;
  bottom: 4px;
  grid-row: 3;
  grid-column: 1 / span 2;
`;

export const LeftSide2ecran = styled(Side)`
  grid-row: 1;
  grid-column: 1;
  left: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: #dedcdca9;
`;

export const RightSide2ecran = styled(Side)`
  grid-row: 1;
  grid-column: 2;
  right: 0;
  text-align: center;
  background-color: #dedcdca9;
  background: url(${img1}) no-repeat;
  background-size: cover;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const ImgLeft2ecran = styled("img")`
  width: 70%;
  padding-top: 10vh;
  padding-right: 10%;
  opacity: 0.7;
`;

export const TitleLeft2ecran = styled("div")`
  grid-column: 1 / span 2;
  grid-row: 1;
  text-align: center;
  color: #dedcdca9;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 10;
`;

export const TitleRight2ecran = styled("div")`
  grid-column: 1 / span 2;
  grid-row: 1;
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.main};
  clip-path: polygon(50% 0%, 100% 0%, 100% 100%, 50% 100%);
  z-index: 10;
`;
