import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import flag from "../../images/Nuvola_France_Ukraine_flags.svg.png";

import * as S from "./parallax.styled";

const fontSizeBetween = {
  xs: "0.9rem",
  sm: "1.2rem",
  md: "1.4rem",
  lg: "1.5rem",
  xl: "1.6rem",
};

const Parallax: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.MainContainer>
      <S.ImgMainContainer>
        <S.TextContainerShort0>
          <S.TextRainbow>
            <img src={flag} alt="" width="3%" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Typography variant="h1" component="span">
              {t("about.title")}
            </Typography>
            <Typography variant="h1">{t("about.subtitle1")}</Typography>
            <Typography variant="h1">{t("about.subtitle12")}</Typography>
          </S.TextRainbow>
        </S.TextContainerShort0>
      </S.ImgMainContainer>
      <S.TextContainer1>
        <Typography
          variant="h4"
          sx={{
            fontSize: fontSizeBetween,
          }}
        >
          {t("about.development")}
        </Typography>
      </S.TextContainer1>
      <S.ImgContainer1>
        <S.TextContainerShort1>
          <Typography variant="h1">{t("about.dev_short")}</Typography>
        </S.TextContainerShort1>
      </S.ImgContainer1>
      <S.TextContainer2>
        <Typography
          variant="h4"
          sx={{
            fontSize: fontSizeBetween,
          }}
        >
          {t("about.yoga")}
        </Typography>
      </S.TextContainer2>
      <S.ImgContainer2>
        <S.TextContainerShort2>
          <Typography variant="h1">{t("about.yoga_short")}</Typography>
        </S.TextContainerShort2>
      </S.ImgContainer2>
      <S.TextContainer3>
        <Typography
          variant="h4"
          sx={{
            fontSize: fontSizeBetween,
          }}
        >
          {t("about.traveling")}
        </Typography>
      </S.TextContainer3>
      <S.ImgContainer3>
        <S.TextContainerShort3>
          <Typography variant="h1">{t("about.traveling_short")}</Typography>
        </S.TextContainerShort3>
      </S.ImgContainer3>
      <S.TextContainer4>
        <Typography
          variant="h4"
          sx={{
            fontSize: fontSizeBetween,
          }}
        >
          {t("about.reading")}
        </Typography>
      </S.TextContainer4>
      <S.ImgContainer4>
        <S.TextContainerShort4>
          <Typography variant="h1">{t("about.reading_short")}</Typography>
        </S.TextContainerShort4>
      </S.ImgContainer4>
      <S.TextContainer5>
        <Typography
          variant="h4"
          sx={{
            fontSize: fontSizeBetween,
          }}
        >
          {t("about.handmade")}
        </Typography>
      </S.TextContainer5>
      <S.ImgContainer5>
        <S.TextContainerShort5>
          <Typography variant="h1">{t("about.handmade_short")} </Typography>
        </S.TextContainerShort5>
      </S.ImgContainer5>
      <S.TextContainer7>
        <Typography
          variant="h4"
          sx={{
            fontSize: fontSizeBetween,
          }}
        >
          {t("about.war")}
        </Typography>
      </S.TextContainer7>
      <S.ImgContainer6>
        <S.TextContainerShort6>
          <Typography variant="h1">{t("about.beauty")} </Typography>
        </S.TextContainerShort6>
      </S.ImgContainer6>
    </S.MainContainer>
  );
};

export default Parallax;
