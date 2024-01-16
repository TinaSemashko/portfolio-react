import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  position: relative;
  @media (max-width: 750px) {
  }
`;

export const VideoAccueil = styled("video")`
  width: 100vw;
  text-align: center;
  position: fixed;
  z-index: -1;
`;

export const TextContainer = styled("div")`
  padding-top: 7vw;

  @media (max-width: 750px) {
  }
`;

export const Title = styled("div")`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.main};
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

export const TextRainbow = styled("div")`
  text-align: center;
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    cyan,
    blue,
    violet
  );
  background-size: 400% 400%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: rainbow 20s ease infinite;
  animation: rainbow 20s ease infinite;
  font-family: var(--font-satisfy);

  @-webkit-keyframes rainbow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes rainbow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const TextDrawer = styled("svg")`
  text-align: center;

  font-family: sans-serif;

  stroke-dasharray: 100%;
  stroke-dashoffset: 100%;

  -webkit-animation: draw 8s forwards;
  -moz-animation: draw 8s forwards;
  -o-animation: draw 8s forwards;
  -ms-animation: draw 8s forwards;
  animation: draw 8s forwards;

  @-webkit-keyframes draw {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @-moz-keyframes draw {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @-o-keyframes draw {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @-ms-keyframes draw {
    100% {
      stroke-dashoffset: 0;
    }
  }
  @keyframes draw {
    100% {
      stroke-dashoffset: 0;
    }
  }
`;

export const HistoryContainer = styled("div")`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;

  @media (max-width: 750px) {
  }
`;

export const GridContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
`;

export const Langbt = styled("div")`
  color: white;
  text-align: center;
`;

export const CarouselContainer = styled("div")`
  margin-top: 20vh;
  margin-bottom: 40vh;
`;

export const LogoContainer = styled("div")`
  text-align: center;
  padding-top: 20vh;
`;
