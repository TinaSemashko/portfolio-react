import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  position: relative;
  height: 100vh;
  /* background-color: ${({ theme }) => theme.palette.colorBlack.main}; */
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  /* margin-bottom: 19vh; */
  @media (max-width: 750px) {
  }
`;

export const BackgroundContainer = styled("div")`
  z-index: -2;
  background-color: ${({ theme }) => theme.palette.colorBlack.main};
  grid-column: 1;
  grid-row: 1;
`;

export const VideoAccueil = styled("video")`
  grid-column: 1;
  grid-row: 1;

  width: 100vw;
  text-align: center;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;

  @media (max-width: 750px) {
    padding-top: 40vh;
  }
`;

export const GridContainer = styled("div")`
  grid-column: 1;
  grid-row: 1;
  padding-top: 10vh;
  width: 100%;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: 33% 33% 33%;
  place-items: center;
`;

export const StyledImg = styled("img")`
  width: 60%;
  text-align: center;
  grid-row: 1;
  grid-column: 1;
  z-index: 10;

  @media (max-width: 960px) {
    width: 85%;
  }

  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const StyleText = styled("div")`
  width: 50%;
  text-align: center;
  grid-row: 1;
  grid-column: 1;
  color: red;
  cursor: pointer;
  z-index: 10;
  place-self: center;
`;

export const ImgContainer = styled("div")`
  text-align: center;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  place-items: center;

  @keyframes floatAnimation {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 40px);
    }
  }
  @keyframes floatAnimation1 {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(40px, 0);
    }
  }
`;

export const ImgContainer1 = styled(ImgContainer)`
  animation: floatAnimation1 4s infinite;
  place-self: center;
  grid-column: 4;
  grid-row: 1;
`;

export const ImgContainer2 = styled(ImgContainer)`
  animation: floatAnimation 4.5s infinite;
  place-self: center;
  grid-column: 5;
  grid-row: 2;
`;

export const ImgContainer3 = styled(ImgContainer)`
  animation: floatAnimation 5.5s infinite;
  place-self: center;
  grid-column: 3;
  grid-row: 3;
`;
