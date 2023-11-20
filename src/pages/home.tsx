import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import Video from "../images/videohome.mp4";
import logo from "../images/logo.png";
import flag from "../images/Nuvola_France_Ukraine_flags.svg.png";
import { Routes } from "../app/routes";
import imgProjects from "../images/web-development.png";

import * as S from "./home.styled";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  // function draw() {
  //   var canvas = document.getElementById("canvas");
  //   if (canvas?.getContext) {
  //     var ctx = canvas.getContext("2d");

  //     ctx.fillRect(25, 25, 100, 100);
  //     ctx.clearRect(45, 45, 60, 60);
  //     ctx.strokeRect(50, 50, 50, 50);
  //   }
  // }

  return (
    <S.MainContainer>
      <S.VideoAccueil src={Video} autoPlay loop muted />
      <S.TextContainer>
        <S.Title>
          <Typography
            variant="h2"
            sx={{ textAlign: "center", color: "primary.main" }}
          >
            {t("main.title")}
          </Typography>
        </S.Title>
        {/* <S.TextDrawer width="1500" height="150">
          <text
            x="300"
            y="80"
            fill="none"
            stroke="black"
            stroke-width="1"
            font-size="50"
          >
            {t("main.subtitle1")}
          </text>
        </S.TextDrawer> */}
        <S.TextRainbow>
          <Typography variant="h1">{t("main.subtitle1")}</Typography>
        </S.TextRainbow>
        <S.LogoContainer>
          <img src={flag} width="80vw" />
        </S.LogoContainer>
      </S.TextContainer>
      <S.GridContainer>
        <img src={imgProjects} width="500vw" />
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "primary.main", width: "30vw" }}
        >
          {t("main.projects")}
        </Typography>
      </S.GridContainer>
      {/* <canvas id="canvas" width="150" height="150"></canvas> */}

      <S.LogoContainer></S.LogoContainer>
      <br />
      <br />
    </S.MainContainer>
  );
};

export default Home;
