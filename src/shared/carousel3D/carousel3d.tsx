import { useEffect, useState } from "react";
import { CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Routes } from "../../app/routes";
import { Carousel3d } from "../../types/projects";

import * as S from "./carousel3d.styled";

type ImageMapType = {
  degY: number;
  src: any;
  alt: string;
  description: string;
};

interface CarouselParams {
  sidesQuantity: number;
  degKey: number;
  radius: number;
  cellsize: number;
}

let imagePathes: Carousel3d[] = [
  {
    imagesCarousel: "img1.png",
    descriptions:
      "React|Styled-components|Typecript|Mui-material|PostgreSQL|GitHub|Work in the team",
  },
  {
    imagesCarousel: "img2.png",
    descriptions: "HTML|CSS|Javascript|Local storage for Basket|GitHub",
  },
  {
    imagesCarousel: "img3.png",
    descriptions: "HTML|CSS|React|Bootstrap|API|GitHub",
  },
  {
    imagesCarousel: "img4.png",
    descriptions:
      "HTML|CSS|Javascript|Bootstrap|JSON|Local storage for Basket|GitHub",
  },
  {
    imagesCarousel: "img5.png",
    descriptions: "HTML|CSS|Javascript|Bootstrap|GitHub",
  },
  {
    imagesCarousel: "img6.png",
    descriptions:
      "React|Styled-components|Typecript|Mui-material|PostgreSQL|GitHub",
  },
  {
    imagesCarousel: "img7.png",
    descriptions: "HTML|CSS|Javascript|Bootstrap|API|GitHub",
  },
  {
    imagesCarousel: "img8.png",
    descriptions: "HTML|CSS|React|Bootstrap|API|GitHub",
  },
  {
    imagesCarousel: "img9.png",
    descriptions:
      "React|Styled-components|Typecript|Mui-material|PostgreSQL|GitHub",
  },
  {
    imagesCarousel: "img10.png",
    descriptions:
      "React|Styled-components|Typecript|Mui-material|PostgreSQL|GitHub",
  },
  {
    imagesCarousel: "img11.png",
    descriptions:
      "React|Styled-components|Javascript|Mui-material|PostgreSQL|GitHub|Work in the team",
  },
];

const radius = 28;
const Carousel: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [animationPause, setAnimationPause] = useState(false);
  const [indexState, setIndexState] = useState("");
  const [carouselParams, setCarouselParams] = useState<CarouselParams>();
  const [imagesCarousel, setImagesCarousel] = useState<Carousel3d[]>([]);
  const [imageMap, setImageMap] = useState<ImageMapType[]>([]);

  const makeCarousel = (carouselParams: CarouselParams) => {
    const images: string[] = [];
    imagesCarousel.map((el) =>
      images.push(require(`../../images/${el.imagesCarousel}`))
    );

    console.log(images);
    const imageMapTemp: ImageMapType[] = [];
    imagesCarousel.forEach((item, index) =>
      imageMapTemp.push({
        degY: index * (carouselParams?.degKey ?? 0),
        src: images[index],
        alt: `Image ${index + 1}`,
        description: item.descriptions,
      })
    );

    if (imageMapTemp) setImageMap(imageMapTemp);
  };

  useEffect(() => {
    setImagesCarousel(imagePathes);
  }, [imagePathes]);

  useEffect(() => {
    console.log(imagesCarousel);
    if (imagesCarousel) {
      const sidesQuantity = imagePathes.length;
      const paramTemp = {
        sidesQuantity: sidesQuantity,
        degKey: 360 / sidesQuantity,
        radius: radius,
        cellsize: Math.round(2 * radius * Math.tan(Math.PI / sidesQuantity)),
      };
      setCarouselParams(paramTemp);
      console.log(paramTemp);
      if (paramTemp) makeCarousel(paramTemp);
    }
  }, [imagesCarousel]);

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
              <S.ButtonMore>
                <Typography component="div" variant="h6" textAlign="left">
                  {t("carousel3d.button")}
                </Typography>
              </S.ButtonMore>
              <S.BorderRight
                carouselWith={carouselParams?.cellsize ?? 0}
                id={index.toString()}
                onClick={handleClick}
              />
              <S.BorderLeft id={index.toString()} onClick={handleClick} />
              <S.TextContainer>
                <Typography variant="h6" textAlign="left">
                  {item.description}
                </Typography>
              </S.TextContainer>
            </S.Slide>
          ))
        )}
      </S.CarouselContainer>
    </S.MainContainer>
  );
};

export default Carousel;
