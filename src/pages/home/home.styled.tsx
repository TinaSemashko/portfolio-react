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

export const HistoryContainer = styled("div")`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: center;

  @media (max-width: 750px) {
  }
`;

export const LogoContainer = styled("div")`
  text-align: center;
  padding-top: 20vh;
`;

export const LampContainer = styled("div")`
  text-align: center;
  padding-top: 5vh;
  grid-column: 1;
  grid-row: 1;
`;

export const Langbt = styled("div")`
  color: ${({ theme }) => theme.palette.colorBlack.main};
  text-align: center;
  grid-column: 1;
  grid-row: 1;
`;

export const BookContainer = styled("div")`
  /* text-align: center;
  padding-top: 5vh; */
`;
