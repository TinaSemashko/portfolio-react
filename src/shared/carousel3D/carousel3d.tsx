import { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Carousel3d } from "../../types/projects";

import * as S from "./carousel3d.styled";

interface CarouselParams {
  sidesQuantity: number;
  degKey: number;
  radius: number;
  cellsize: number;
}

let imagesCarousel: Carousel3d[] = [
  {
    imageName: "img1.png",
    descriptions:
      "React|Styled-components|Typecript|Mui-material|PostgreSQL|GitHub|Work in the team",
    linkGit: "",
    linkProject: "https://teamchallenge.io/",
    src: "require(`../../images/${imageName}`)",
    degY: 0,
    alt: "",
  },
  {
    imageName: "img2.png",
    descriptions: "HTML|CSS|Javascript|Local storage for Basket|GitHub",
    linkGit: "https://github.com/TinaSemashko/ProjetJavascriptAssofac",
    linkProject: "https://loquacious-empanada-12b1c9.netlify.app/",
    src: "",
    degY: 0,
    alt: "",
  },
  {
    imageName: "img3.png",
    descriptions: "HTML|CSS|React|Bootstrap|API|GitHub",
    linkGit: "https://github.com/TinaSemashko/dictionary_react",
    linkProject: "https://effortless-sunburst-a3a68f.netlify.app/",
    src: "",
    degY: 0,
    alt: "",
  },
  {
    imageName: "img4.png",
    descriptions:
      "HTML|CSS|Javascript|Bootstrap|JSON|Local storage for Basket|GitHub",
    linkGit: "https://github.com/Kaiju971/PROJET-NIVEAU-II",
    linkProject: "https://magical-cocada-6863e7.netlify.app/",
    src: "",
    degY: 0,
    alt: "",
  },
  {
    imageName: "img5.png",
    descriptions: "HTML|CSS|Javascript|Bootstrap|GitHub",
    linkGit: "https://github.com/TinaSemashko/AssofacCasinoGame",
    linkProject: "https://aquamarine-gnome-52ee5d.netlify.app/",
    src: "",
    degY: 0,
    alt: "",
  },
  {
    imageName: "img6.png",
    descriptions:
      "React|Styled-components|Typecript|Mui-material|PostgreSQL|GitHub",
    linkGit: "",
    linkProject: "",
    src: "",
    degY: 0,
    alt: "",
  },
  {
    imageName: "img7.png",
    descriptions: "HTML|CSS|Javascript|Bootstrap|API|GitHub",
    linkGit: "https://github.com/TinaSemashko/Weather",
    linkProject: "https://incandescent-cuchufli-36fc65.netlify.app/",
    src: "",
    degY: 0,
    alt: "",
  },
  {
    imageName: "img8.png",
    descriptions: "HTML|CSS|React|Bootstrap|API|GitHub",
    linkGit: "https://github.com/TinaSemashko/weather_react",
    linkProject: "https://stately-sopapillas-d6d214.netlify.app/",
    src: "",
    degY: 0,
    alt: "",
  },
  {
    imageName: "img9.png",
    descriptions:
      "React|Styled-components|Typecript|Mui-material|PostgreSQL|GitHub",
    linkGit: "",
    linkProject: "",
    src: "",
    degY: 0,
    alt: "",
  },
  {
    imageName: "img10.png",
    descriptions:
      "React|Styled-components|Typecript|Mui-material|PostgreSQL|GitHub",
    linkGit: "",
    linkProject: "",
    src: "",
    degY: 0,
    alt: "",
  },
  {
    imageName: "img11.png",
    descriptions:
      "React|Styled-components|Javascript|Mui-material|PostgreSQL|GitHub|Work in the team",
    linkGit: "",
    linkProject: "",
    src: "",
    degY: 0,
    alt: "",
  },
];

const radius = 28;
const Carousel: React.FC = () => {
  const { t } = useTranslation();
  const [animationPause, setAnimationPause] = useState(false);
  const [indexState, setIndexState] = useState("");
  const [carouselParams, setCarouselParams] = useState<CarouselParams>();
  const [imageMap, setImageMap] = useState<Carousel3d[]>([]);

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
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
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
              {/* <S.GridContainer> */}
              <S.Picture
                carouselWith={carouselParams?.cellsize ?? 0}
                src={item.src}
                alt={item.alt}
                id={index.toString()}
                onClick={handleClick}
              />
              {/* <Box sx={{ gridColumn: "1 / span 4", gridRow: "1 / span 7" }}>
                  test1
                </Box>
                <Box sx={{ gridColumn: "1 / span 4", gridRow: "1 / span 4" }}>
                  test2
                </Box>
                <Box sx={{ gridColumn: "3", gridRow: "2 / span 4" }}>test3</Box>
                <Box sx={{ gridColumn: "1 / span 3", gridRow: "3" }}>test4</Box>
                <Box sx={{ gridColumn: "2 / span 4", gridRow: "4 " }}>
                  test5
                </Box>
                <Box sx={{ gridColumn: "2 / span 4", gridRow: "5" }}>test6</Box> */}
              <S.BorderLeft id={index.toString()} onClick={handleClick} />
              <S.BorderRight
                carouselWith={carouselParams?.cellsize ?? 0}
                id={index.toString()}
                onClick={handleClick}
              />
              <S.TextContainer>
                <Typography
                  variant="body2"
                  textAlign="left"
                  id={index.toString()}
                  onClick={handleClick}
                >
                  {item.descriptions}
                </Typography>
              </S.TextContainer>
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
              {/* </S.GridContainer> */}
            </S.Slide>
          ))
        )}
      </S.CarouselContainer>
    </S.MainContainer>
  );
};

export default Carousel;
