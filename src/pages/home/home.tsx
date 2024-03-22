import { Typography } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import WalkingCat from "../components/walkingCat";
import img1 from "../../images/crown.png";
import img2 from "../../images/puzzl.png";

import * as S from "./home.styled";

const arrayTechnologies = [
  "React.js",
  "Node.js",
  "SQL",
  "Firebase",
  "Postgres",
  "MaterialUI",
  "Typescript",
  "GitHub",
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

  const pxValue = {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 10,
    xl: 14,
  };

  const fontSizeTitle = {
    xs: "1.6rem",
    sm: "2rem",
    md: "2.5rem",
    lg: "3.4rem",
    xl: "4rem",
  };

  const fontSizeSubTitle = {
    xs: "1.2rem",
    sm: "1.3rem",
    md: "1.4rem",
    lg: "1.8rem",
    xl: "2.2rem",
  };

  return (
    <S.MainContainer>
      <S.GridContainer>
        <S.LeftSide1ecran></S.LeftSide1ecran>
        <S.RightSide1ecran></S.RightSide1ecran>
        <S.TitleLeft1ecran>
          <S.TitreColor>
            <Typography
              variant="h1"
              sx={{
                px: pxValue,
                fontSize: fontSizeTitle,
                WebkitTextStroke: {
                  xs: "1px rgba(0, 0, 0, .5)",
                  md: "0",
                },
              }}
            >
              {t("main.title")}
            </Typography>
          </S.TitreColor>
          <br />
          <Typography
            variant="h3"
            sx={{
              px: pxValue,
              fontSize: fontSizeSubTitle,
              // color: "colorBlack.main",
            }}
          >
            {t("main.text")}
          </Typography>
        </S.TitleLeft1ecran>
        <S.TitleRight1ecran>
          <S.TitreColor>
            <Typography
              variant="h1"
              sx={{
                px: pxValue,
                fontSize: fontSizeTitle,
              }}
            >
              {t("main.title")}
            </Typography>
          </S.TitreColor>
          <br />
          <Typography
            variant="h3"
            sx={{
              px: pxValue,
              fontSize: fontSizeSubTitle,
              // color: "colorBlack.main",
            }}
          >
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
                onTouchStart={() => showCardText(index + 1)}
                onMouseOut={() => setOpen(false)}
                onTouchEnd={() => setOpen(true)}
              />
              <S.ElImgHide
                src={require(`../../images/${item}.png`)}
                id={`hide${index + 1}`}
                className="hide"
                onMouseOver={() => showCardText(index + 1)}
                onTouchStart={() => showCardText(index + 1)}
                onMouseOut={() => setOpen(true)}
                onTouchEnd={() => setOpen(true)}
              />
              <S.ElText index={index + 1}>
                <Typography
                  variant="h5"
                  id={`text${index + 1}`}
                  color="colorBlack.main"
                  onMouseOver={() => showCardText(index + 1)}
                  onMouseOut={() => setOpen(false)}
                  sx={{
                    fontSize: {
                      xs: "0.7rem",
                      sm: "0.8rem",
                      md: "1.1rem",
                      lg: "1.2rem",
                      xl: "1.4rem",
                    },
                  }}
                >
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
        <S.Text2ecran>
          <S.TitleLeft2ecran>
            <Typography
              variant="h2"
              sx={{
                px: pxValue,
              }}
            >
              {t("main.title2ecran")}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                px: pxValue,
              }}
            >
              {t("main.subtitle2ecran")}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                px: pxValue,
              }}
            >
              {t("main.subtitle12ecran")}
              <Typography
                variant="h2"
                sx={{
                  px: pxValue,
                }}
              ></Typography>
              {t("main.author2ecran")}
            </Typography>
          </S.TitleLeft2ecran>
          <S.TitleRight2ecran>
            <Typography
              variant="h2"
              sx={{
                px: pxValue,
              }}
            >
              {t("main.title2ecran")}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                px: pxValue,
              }}
            >
              {t("main.subtitle2ecran")}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                px: pxValue,
              }}
            >
              {t("main.subtitle12ecran")}
              <Typography
                variant="h2"
                sx={{
                  px: pxValue,
                }}
              ></Typography>
              {t("main.author2ecran")}
            </Typography>
          </S.TitleRight2ecran>
        </S.Text2ecran>
      </S.GridContainer2ecran>
    </S.MainContainer>
  );
};

export default Home;
