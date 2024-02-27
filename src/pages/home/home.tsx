import { Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { theme } from "../../app/app";
import WalkingCat from "../components/walkingCat";
import img1 from "../../images/crown.png";
import img2 from "../../images/puzzl1.png";

import * as S from "./home.styled";

// const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));

const arrayTechnologies = [
  "react",
  "node",
  "git",
  "firebase",
  "postgres",
  "mui",
  "typescript",
];

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const showCardText = (ind: number): void => {
    const card = document.querySelector(`#card${ind}`);
    const hideNode = document.querySelector(`#hide${ind}`);
    const text = document.querySelector(`#text${ind}`);

    if (!open) {
      card?.setAttribute("style", "display:none;");
      text?.setAttribute("style", "display:none;");
      hideNode?.setAttribute("style", "display:block;");
    } else {
      card?.setAttribute("style", "display:block;");
      text?.setAttribute("style", "display:block;");
      hideNode?.setAttribute("style", "display:none;");
    }
  };

  return (
    <S.MainContainer>
      <S.GridContainer>
        <S.LeftSide1ecran></S.LeftSide1ecran>
        <S.RightSide1ecran></S.RightSide1ecran>
        <S.TitleLeft1ecran>
          <S.TitreColor>
            <Typography variant="h2">{t("main.title")}</Typography>
          </S.TitreColor>
          <Typography variant="h4" sx={{ px: 20 }}>
            {t("main.text")}
          </Typography>
        </S.TitleLeft1ecran>
        <S.TitleRight1ecran>
          <S.TitreColor>
            <Typography variant="h2">{t("main.title")}</Typography>
          </S.TitreColor>
          <Typography variant="h4" sx={{ px: 20 }}>
            {t("main.text")}
          </Typography>
        </S.TitleRight1ecran>
        <S.Puzzle>
          {arrayTechnologies.map((item, index) => (
            <S.Element index={index + 1}>
              <S.ElImg
                src={img2}
                id={`card${index + 1}`}
                className="card"
                onMouseOver={() => showCardText(index + 1)}
                onMouseOut={() => setOpen(false)}
              />
              <S.ElImgHide
                src={require(`../../images/${item}.png`)}
                id={`hide${index + 1}`}
                className="hide"
                onMouseOver={() => showCardText(index + 1)}
                onMouseOut={() => setOpen(true)}
              />
              <S.ElText index={index + 1}>
                <Typography variant="h5" id={`text${index + 1}`}>
                  {item}
                </Typography>
              </S.ElText>
            </S.Element>
          ))}
        </S.Puzzle>
        <S.CatContainer>
          <WalkingCat />
        </S.CatContainer>
      </S.GridContainer>
      <S.GridContainer2ecran>
        <S.LeftSide2ecran>
          <S.ImgLeft2ecran src={img1} alt="" />
        </S.LeftSide2ecran>
        <S.RightSide2ecran></S.RightSide2ecran>
        <S.TitleLeft2ecran>
          <Typography variant="h3" sx={{ px: 20 }}>
            {t("main.title2ecran")}
          </Typography>
          <Typography variant="h3" sx={{ px: 20 }}>
            {t("main.subtitle2ecran")}
          </Typography>
          <Typography variant="h3" sx={{ px: 20 }}>
            {t("main.subtitle12ecran")}
            <Typography variant="h3" sx={{ px: 20 }}></Typography>
            {t("main.author2ecran")}
          </Typography>
        </S.TitleLeft2ecran>
        <S.TitleRight2ecran>
          <Typography variant="h3" sx={{ px: 20 }}>
            {t("main.title2ecran")}
          </Typography>
          <Typography variant="h3" sx={{ px: 20 }}>
            {t("main.subtitle2ecran")}
          </Typography>
          <Typography variant="h3" sx={{ px: 20 }}>
            {t("main.subtitle12ecran")}
            <Typography variant="h3" sx={{ px: 20 }}></Typography>
            {t("main.author2ecran")}
          </Typography>
        </S.TitleRight2ecran>
      </S.GridContainer2ecran>
    </S.MainContainer>
  );
};

export default Home;
