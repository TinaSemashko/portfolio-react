import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Video from "../../images/videohome.mp4";
import logo from "../../images/logo.png";
import flag from "../../images/Nuvola_France_Ukraine_flags.svg.png";

import * as S from "./hobby.styled";

const Hobby: React.FC = () => {
  const { t } = useTranslation();

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
        <S.TextRainbow>
          <Typography variant="h1">
            <img src={flag} width="40vw" /> {t("main.subtitle1")}
          </Typography>
        </S.TextRainbow>
      </S.TextContainer>
      <S.LogoContainer>
        <img src={logo} width="80vw" />
      </S.LogoContainer>
      <br />
      <br />
    </S.MainContainer>
  );
};

export default Hobby;
