import { useEffect, useState } from "react";
import { CircularProgress, Modal, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Carousel3d } from "../../types/projects";
import { imagesCarousel } from "./dataCarousel";
import { useNavigate } from "react-router";
import { Routes } from "../../app/routes";
import ModalBar from "../modal/modalBar";

import * as S from "./carousel3d.styled";

interface CarouselParams {
  sidesQuantity: number;
  degKey: number;
  radius: number;
  cellsize: number;
}

const radius = 28;
const Carousel: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [animationPause, setAnimationPause] = useState(false);
  const [indexState, setIndexState] = useState("");
  const [carouselParams, setCarouselParams] = useState<CarouselParams>();
  const [imageMap, setImageMap] = useState<Carousel3d[]>([]);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const makeCarousel = (carouselParams: CarouselParams) => {
    imagesCarousel.map((el, index) => {
      el.src = require(`../../images/${el.imageName}`);
      el.alt = `Image ${index + 1}`;
      el.degY = index * carouselParams.degKey;
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
  }, []);

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

  const openInNewTab = (url: string): void => {
    if (
      url === "VideoAssofactory" ||
      url === "VideoConnectify" ||
      url === "VideoABS" ||
      url === "VideoSeaLife"
    )
      navigate(Routes.videopage, {
        state: { videoUrl: { url } },
      });
    else if (url === "private") setOpen(true);
    else {
      const newWindow = window.open(url, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    }
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
                >
                  {item.descriptions}
                </Typography>
              </S.TextContainer>
              <div>
                <ModalBar
                  open={open}
                  handleClose={handleClose}
                  modalMessage={t("projects.message_private")}
                />
              </div>
              <S.ButtonMore>
                <Typography
                  component="div"
                  variant="body1"
                  textAlign="left"
                  onClick={() => openInNewTab(item.linkProject)}
                >
                  {t("carousel3d.button_project")}
                </Typography>
              </S.ButtonMore>
              <br />
              <S.ButtonMore>
                <Typography
                  component="div"
                  variant="body1"
                  textAlign="left"
                  onClick={() => openInNewTab(item.linkGit)}
                >
                  {t("carousel3d.button_git")}
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
