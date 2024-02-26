import { styled } from "@mui/material/styles";
import img1 from "../../images/2ecran.png";

export const MainContainer = styled("div")`
  width: 100%;

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
  height: 98vh;
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
  background-color: #dedcdca9;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Langbt = styled("div")`
  /* text-align: center; */
  grid-column: 1 / span 2;
  grid-row: 2;
  padding-top: 6vh;
  opacity: 0.5;
  display: grid;
  grid-template-columns: 14.286% 3.5715% 10.7145% 3.5715% 10.7145% 3.5715% 10.7145% 3.5715% 10.7145% 3.5715% 10.7145% 3.5715% 14.286%;
  /* justify-items: center; */
  align-items: center;
  width: 55vw;
  height: 18vh;
`;

export const ElImg = styled("img")`
  width: 10vw;
`;

export const Element1 = styled("div")`
  grid-row: 1;
  grid-column: 1 / span 2;
`;

export const Element2 = styled("div")`
  grid-row: 1;
  grid-column: 2 / span 4;
`;

export const Element3 = styled("div")`
  grid-row: 1;
  grid-column: 4 / span 6;
`;

export const Element4 = styled("div")`
  grid-row: 1;
  grid-column: 6 / span 8;
`;

export const Element5 = styled("div")`
  grid-row: 1;
  grid-column: 8 / span 10;
`;

export const Element6 = styled("div")`
  grid-row: 1;
  grid-column: 10 / span 12;
`;

export const Element7 = styled("div")`
  grid-row: 1;
  grid-column: 12 / span 14;
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
  bottom: 0;
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
  opacity: 0.7;
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
