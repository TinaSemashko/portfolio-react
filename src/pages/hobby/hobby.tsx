import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import Video from "../../images/videohome.mp4";
import logo from "../../images/logo.png";
import flag from "../../images/Nuvola_France_Ukraine_flags.svg.png";
import LangButton from "../../shared/langButton";
import TopbarPerspective from "../../shared/topbar/topbarPerspective";

import * as S from "./hobby.styled";

const Hobby: React.FC = () => {
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
      <TopbarPerspective />

      <S.TextContainer>
        <S.Title>
          <Typography
            variant="h2"
            sx={{ textAlign: "center", color: "primary.main" }}
          >
            {t("main.title")}
          </Typography>
        </S.Title>
        <S.TextRainbow>
          <Typography variant="h1">
            <img src={flag} width="40vw" /> {t("main.subtitle1")}
          </Typography>
        </S.TextRainbow>
      </S.TextContainer>
      <S.Langbt>
        <LangButton colorPrime={true} />
      </S.Langbt>
      <S.HistoryContainer>
        <Typography variant="h3"> {parse(t("main.subtitle3"))}</Typography>
        <br />
        <div>-------------------------</div>
        <br />
        <Typography variant="h3" sx={{ color: "colorRed.main" }}>
          {t("main.subtitle2")}
        </Typography>
        <br />
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            px: "10vw",
          }}
        >
          {t("main.bible")}
        </Typography>
      </S.HistoryContainer>

      {/* <S.GridContainer>
        <img src={imgProjects} width="500vw" />
        <Typography
          variant="body1"
          sx={{ textAlign: "center", color: "primary.main", width: "30vw" }}
        >
          {t("main.projects")}
        </Typography>
      </S.GridContainer> */}
      {/* <canvas id="canvas" width="150" height="150"></canvas> */}

      <S.LogoContainer>
        <img src={logo} width="80vw" />
      </S.LogoContainer>
      <br />
      <br />
    </S.MainContainer>
  );
};

export default Hobby;
