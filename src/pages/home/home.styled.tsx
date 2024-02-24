import { styled } from "@mui/material/styles";
import img1 from "../../images/2ecran.png";

export const MainContainer = styled("div")`
  width: 100%;

  @media (max-width: 750px) {
  }
`;

export const GridContainer = styled("div")`
  display: grid;
  grid-template-columns: 50% 50%;
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
  grid-row: 1 / span 2;
  grid-column: 1;
  left: 0;
  text-align: center;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: #dedcdca9;
`;

export const RightSide1ecran = styled(Side)`
  grid-row: 1 / span 2;
  grid-column: 2;
  right: 0;
  text-align: center;
  background-color: #dedcdca9;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Langbt = styled("div")`
  text-align: center;
  grid-column: 1 / span 2;
  grid-row: 1;
  height: 10%;
`;

export const TitleLeft1ecran = styled("div")`
  /* height: 90%; */
  margin-top: -14vh;
  grid-column: 1 / span 2;
  grid-row: 2;
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
  /* height: 90%; */
  margin-top: -14vh;
  grid-column: 1 / span 2;
  grid-row: 2;
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
