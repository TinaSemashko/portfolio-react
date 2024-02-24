import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import Video from "../../images/production_id 4076130 (1080p).mp4";
import flag from "../../images/Nuvola_France_Ukraine_flags.svg.png";
import Book from "./book";
import WalkingCat from "../walkingCat";
import LangButton from "../../../shared/langButton";
import useWindowSize from "../../../shared/useWindowSize/useWindowSize";

import * as S from "./fireplace.styled";

const About: React.FC = () => {
  const { t } = useTranslation();
  const { width, height } = useWindowSize(true);
  const [widthVideo, setVidthVideo] = useState(width);
  const [heightVideo, setHeightVideo] = useState(height);

  useEffect(() => {
    const videoElement = document.getElementById("videoAccueil");
    setHeightVideo(videoElement?.offsetHeight ?? 0);
    setVidthVideo(videoElement?.offsetWidth ?? 0);
  }, [window]);

  // console.log(height);
  // console.log(heightVideo);

  return (
    <S.MainContainer>
      <S.VideoAccueil id="videoAccueil" src={Video} autoPlay loop muted />
      {/* <S.Line
        windowWidth={width}
        windowHeight={height}
        videoWidth={widthVideo}
        videoHeight={heightVideo}
      /> */}
      <S.Langbt windowWidth={width} windowHeight={height}>
        <LangButton colorPrime={true} iconWithoutSlash={false} />
      </S.Langbt>
      <S.Title windowWidth={width} windowHeight={height}>
        <S.TextRainbow>
          <Typography variant="h2">
            <img src={flag} width="40vw" /> {t("about.subtitle1")}
          </Typography>
        </S.TextRainbow>
      </S.Title>
      <S.CatContainer windowHeight={heightVideo}>
        <WalkingCat />
      </S.CatContainer>
      <S.HistoryContainer windowWidth={width} windowHeight={height}>
        <Typography variant="h3"> {parse(t("about.subtitle3"))}</Typography>
        <Book />
      </S.HistoryContainer>
    </S.MainContainer>
  );
};

export default About;
