import { styled } from "@mui/material/styles";
import img1 from "../../images/itworld1.jpg";
import img2 from "../../images/web-dev.jpg";
import img3 from "../../images/yoga.jpg";
import img4 from "../../images/travel.jpg";
import img5 from "../../images/reading.jpg";
import img6 from "../../images/busi.jpg";
import img7 from "../../images/paris1.jpg";

export const MainContainer = styled("div")`
  width: 100%;
  position: relative;
  margin-bottom: 40vh;
  @media (max-width: 750px) {
  }
`;

export const VideoParallax = styled("video")`
  margin: 0 auto;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  background-size: cover;
  transition: 1s opacity;
`;

export const ImgMain = styled("div")`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const TextContainerAbsolute = styled("div")`
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  text-align: center;
`;

export const TextContainerBetween = styled("div")`
  position: relative;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 80px;
`;

export const ImgMainContainer = styled(ImgMain)`
  background-image: url(${img1});
  min-height: 100vh;
`;

export const TextContainerShort0 = styled(TextContainerAbsolute)`
  color: #000;
  margin-top: -12vh;
`;

export const TextContainer1 = styled(TextContainerBetween)`
  color: #0ca5e7;
  background-color: #282e34;
`;

export const ImgContainer1 = styled(ImgMain)`
  background-image: url(${img2});
  min-height: 80vh;
`;

export const TextContainerShort1 = styled(TextContainerAbsolute)`
  background-color: transparent;
  font-size: 25px;
  color: red;
`;

export const TextContainer2 = styled(TextContainerBetween)`
  color: #703b3b;
  background-color: #282e34;
`;

export const ImgContainer2 = styled(ImgMain)`
  background-image: url(${img3});
  min-height: 70vh;
`;

export const TextContainerShort2 = styled(TextContainerAbsolute)`
  color: orange;
`;

export const TextContainer3 = styled(TextContainerBetween)`
  color: #666897;
  background-color: #282e34;
`;

export const ImgContainer3 = styled(ImgMain)`
  background-image: url(${img4});
  min-height: 70vh;
`;

export const TextContainerShort3 = styled(TextContainerAbsolute)`
  color: yellow;
`;

export const TextContainer4 = styled(TextContainerBetween)`
  color: bisque;
  background-color: #282e34;
`;

export const ImgContainer4 = styled(ImgMain)`
  background-image: url(${img5});
  min-height: 70vh;
`;

export const TextContainerShort4 = styled(TextContainerAbsolute)`
  color: green;
`;

export const TextContainer5 = styled(TextContainerBetween)`
  color: orange;
  background-color: #282e34;
`;

export const ImgContainer5 = styled(ImgMain)`
  background-image: url(${img6});
  min-height: 70vh;
`;

export const TextContainerShort5 = styled(TextContainerAbsolute)`
  color: blue;
`;

export const TextContainer6 = styled(TextContainerBetween)`
  color: #ddd;
  background-color: #282e34;
`;

export const TextContainer7 = styled(TextContainerBetween)`
  color: #ddd;
  background-color: #282e34;
`;

export const ImgContainer6 = styled(ImgMain)`
  background-image: url(${img7});
  min-height: 100vh;
`;

export const TextContainerShort6 = styled(TextContainerAbsolute)`
  color: violet;
`;

export const TextRainbow = styled("div")`
  width: 100%;
  height: 100%;
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
