import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  position: relative;
  height: 100vh;
  /* margin-bottom: 40vh; */
  @media (max-width: 750px) {
  }
`;

export const VideoAccueil = styled("video")`
  width: 100vw;
  text-align: center;
  position: fixed;
  z-index: -1;
`;

export const GridContainer = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 33% 33% 33%;

  @media (max-width: 750px) {
  }
`;

export const StyledImg = styled("img")`
  width: 15vw;
  text-align: center;
  grid-row: 1;
  grid-column: 1;
`;
export const StyleText = styled("div")`
  width: 15vw;
  text-align: center;
  grid-row: 1;
  grid-column: 1;
  color: red;
`;

export const StyleText1 = styled(StyleText)`
  padding-top: 10vh;
`;

export const ImgContainer = styled("div")`
  width: 25vw;
  text-align: center;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;

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
  padding-top: 10vh;
  animation: floatAnimation1 4s infinite;
`;

export const ImgContainer2 = styled(ImgContainer)`
  animation: floatAnimation 4.5s infinite;
`;

export const ImgContainer3 = styled(ImgContainer)`
  padding-left: 20vw;
  margin-top: -10vh;
  animation: floatAnimation 5.5s infinite;
`;
