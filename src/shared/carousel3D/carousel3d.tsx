import { useEffect, useState } from "react";
import { CircularProgress, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Carousel3d } from "../../types/projects";
import { imagesCarousel } from "./dataCarousel";
import { useNavigate } from "react-router";
import { Routes } from "../../app/routes";
import { theme } from "../../app/app";

import * as S from "./carousel3d.styled";

interface CarouselParams {
  sidesQuantity: number;
  degKey: number;
  radius: number;
  cellsize: number;
}

const fontSizeBody1 = {
  xxs: "0.5rem",
  xs: "0.5rem",
  sm: "0.5rem",
  md: "0.6rem",
  lg: "0.7rem",
  xl: "1rem",
  xxl: "1.2rem",
};

const fontSizeBody2 = {
  xxs: "0.3rem",
  xs: "0.4rem",
  sm: "0.5rem",
  md: "0.6rem",
  lg: "0.7rem",
  xl: "0.9rem",
  xxl: "1.1rem",
};

const Carousel: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [animationPause, setAnimationPause] = useState(false);
  const [indexState, setIndexState] = useState("");
  const [carouselParams, setCarouselParams] = useState<CarouselParams>();
  const [imageMap, setImageMap] = useState<Carousel3d[]>([]);
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const koeff = mediumScreen ? (smallScreen ? 1.3 : 1.2) : 1;
  const radius = 28 * koeff;

  const makeCarousel = (carouselParams: CarouselParams) => {
    imagesCarousel.map((el, index) => {
      el.src = require(`../../images/${el.imageName}`);
      el.alt = `Image ${index + 1}`;
      el.degY = index * carouselParams.degKey;
      return el;
    });
    setImageMap(imagesCarousel);
  };

  useEffect(() => {
    const sidesQuantity = imagesCarousel.length;
    const paramTemp = {
      sidesQuantity: sidesQuantity,
      degKey: 360 / sidesQuantity,
      radius: radius,
      cellsize: Math.round(2 * radius * Math.tan(Math.PI / sidesQuantity)),
    };
    setCarouselParams(paramTemp);

    if (paramTemp) makeCarousel(paramTemp);
  }, [radius]);

  const sortCarousel = (numberFirstEl: string) => {
    if (numberFirstEl !== "0") {
      let indexEOnChange =
        Number(numberFirstEl) >= (carouselParams?.sidesQuantity ?? 0)
          ? Number(numberFirstEl) - (carouselParams?.sidesQuantity ?? 0)
          : Number(numberFirstEl);

      const tempStart = imagesCarousel.slice(0, indexEOnChange);
      const tempEnd = imagesCarousel.slice(indexEOnChange);
      tempEnd.push(...tempStart);
      imagesCarousel.splice(0, imagesCarousel.length, ...tempEnd);
    }
    setImageMap(imagesCarousel);
    if (carouselParams) makeCarousel(carouselParams);
  };

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnimationPause((prev) => !prev);
    let indexElForChange = indexState;

    if (!animationPause) {
      indexElForChange = (event.target as HTMLTextAreaElement).id;
      setIndexState(indexElForChange);
      if (carouselParams) sortCarousel(indexElForChange);
    }
  };

  const openDescription = (project: Carousel3d): void => {
    navigate(Routes.cartproject, {
      state: { cartproject: { project } },
    });
  };

  return (
    <S.MainContainer carouselWith={carouselParams?.cellsize ?? 0}>
      <S.CarouselContainer isAnimationPaused={animationPause}>
        {!imageMap ? (
          <CircularProgress color="secondary" />
        ) : (
          imageMap.map((item, index) => (
            <S.Slide
              key={index}
              degY={item.degY}
              radius={carouselParams?.radius ?? 0}
              carouselWith={carouselParams?.cellsize ?? 0}
            >
              <S.Picture
                carouselWith={carouselParams?.cellsize ?? 0}
                src={item.src}
                alt={item.alt}
                id={index.toString()}
                onClick={handleClick}
              />

              <S.BorderLeft id={index.toString()} onClick={handleClick} />
              <S.BorderRight
                carouselWith={carouselParams?.cellsize ?? 0}
                id={index.toString()}
                onClick={handleClick}
              />
              <S.TextContainer>
                <Typography
                  textAlign="left"
                  id={index.toString()}
                  onClick={handleClick}
                  sx={{ marginTop: "-2rem", fontSize: fontSizeBody2 }}
                >
                  {item.descriptions}
                </Typography>
              </S.TextContainer>
              <S.ButtonMore>
                <Typography
                  component="div"
                  variant="body1"
                  textAlign="left"
                  sx={{ fontSize: fontSizeBody1 }}
                  onClick={() => openDescription(item)}
                >
                  {t("carousel3d.button_project")}
                </Typography>
              </S.ButtonMore>
            </S.Slide>
          ))
        )}
      </S.CarouselContainer>
    </S.MainContainer>
  );
};

export default Carousel;
