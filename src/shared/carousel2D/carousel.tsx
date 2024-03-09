import { useEffect, useState } from "react";
import Slider from "react-slick";
import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useLocation } from "react-router";
import { Routes } from "../../app/routes";
import { CarouselImg } from "../../types/projects";

import * as S from "./carousel.styled";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

type ImageMap = {
  src: any;
  alt: string;
  prod_description: string;
  prod_description_general: string;
  general: boolean;
  produit_titre: string;
};

const GlobalStyles = createGlobalStyle`
  .slick-arrow.slick-next:before,
  .slick-arrow.slick-prev:before {
    content: "";
  }
  .slick-dots {
            display: flex !important;
            justify-content: space-evenly;
            bottom: 10vh;
            margin-left:-1.5vw;
        }
`;

type Props = {
  carouselImages?: CarouselImg[];
  showDescription: boolean;
};

const Carousel: React.FC<Props> = ({
  carouselImages,
  showDescription = false,
}) => {
  const { state } = useLocation();
  const [imgIndex, setImageIndex] = useState(0);
  const [imageMapGeneral, setImageMapGeneral] = useState<ImageMap[]>();
  const [imageMap, setImageMap] = useState<ImageMap[]>();
  const [carouselGeneral, setCarouselGeneral] = useState(true);
  const [openABS, setOpenABS] = useState(false);

  const SampleNextArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <S.ArrowWrapper
        className={className}
        showDescription={showDescription}
        style={{
          ...style,
          right: "4vw",
        }}
        onClick={onClick}
      >
        <S.ArrowRightIcon showDescription={showDescription} />
      </S.ArrowWrapper>
    );
  };

  const SamplePrevArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <S.ArrowWrapper
        className={className}
        showDescription={showDescription}
        style={{
          ...style,
          left: "4vw",
        }}
        onClick={onClick}
      >
        <S.ArrowLeftIcon showDescription={showDescription} />
      </S.ArrowWrapper>
    );
  };

  useEffect(() => {
    const updatedImageMap = carouselImages
      ?.filter((item) => item.general)
      .map((item) => ({
        src: item.src,
        alt: `Image ${item}`,
        prod_description: item.prod_description,
        prod_description_general: item.prod_description_general,
        general: item.general,
        produit_titre: item.src,
      }));

    setImageMapGeneral(updatedImageMap);
  }, [carouselImages]);

  useEffect(() => {
    if (state && state.hasOwnProperty("images")) {
      showDescription = false;
      setCarouselGeneral(false);
      carouselImages = [...state.images];
    }

    const updatedImageMap = carouselImages
      ?.filter((item) => !item.general)
      .map((item) => ({
        src: item.src,
        alt: `Image ${item}`,
        prod_description: item.prod_description,
        prod_description_general: item.prod_description_general,
        general: item.general,
        produit_titre: item.src,
      }));

    setImageMap(updatedImageMap);
  }, [carouselImages, state]);

  const changeCarousel = (status: boolean) => {
    setCarouselGeneral(status);
    setOpenABS(carouselGeneral !== status ? !openABS : openABS);
  };

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img
            src={
              carouselGeneral
                ? imageMapGeneral && imageMapGeneral[i]?.src
                : imageMap && imageMap[i]?.src
            }
            width="60vw"
            height="50vh"
            style={{ border: "solid #a90b0b" }}
          />
        </a>
      );
    },

    dots: showDescription ? true : false,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:
      state && state.hasOwnProperty("produitIndex") ? state.produitIndex : 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current: number, next: number) => {
      setImageIndex(next);
    },
  };

  const changerABSGeneral = () => {
    changeCarousel(openABS);
  };

  return (
    <S.CarouselContainer showDescription={showDescription}>
      <GlobalStyles />
      <S.FlexBox showDescription={showDescription}>
        <S.SliderBox showDescription={showDescription}>
          <Slider {...settings} className="Slider">
            {(carouselGeneral ? imageMapGeneral : imageMap)?.map(
              (item, index) => (
                <S.ImgCarouselContainer
                  className="ImgCarouselContainer"
                  key={index}
                  showDescription={showDescription}
                >
                  {showDescription ? null : (
                    <Breadcrumbs
                      aria-label="breadcrumb"
                      separator={
                        <DoubleArrowIcon fontSize="small" color="primary" />
                      }
                      sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "start",
                        pl: 10,
                        pt: 16,
                        zIndex: 20000,
                      }}
                    >
                      <Link underline="hover" color="inherit" href="/">
                        <Typography variant="body2" color="primary.main">
                          Accueil
                        </Typography>
                      </Link>
                      <Link
                        underline="hover"
                        color="inherit"
                        // href={Routes.façonnage}
                      >
                        <Typography variant="body2" color="primary.main">
                          Façonnage
                        </Typography>
                      </Link>
                      <Typography variant="body2" color="colorGris.main">
                        {item.produit_titre}
                      </Typography>
                    </Breadcrumbs>
                  )}
                  <img
                    src={item.src}
                    alt={item.alt}
                    width={showDescription ? "100%" : ""}
                    height={showDescription ? "100%" : ""}
                  />
                  {!showDescription && (
                    <Typography variant="h4" color="secondary">
                      {item.produit_titre}
                    </Typography>
                  )}
                </S.ImgCarouselContainer>
              )
            )}
          </Slider>
        </S.SliderBox>
        {showDescription && (
          <S.Description>
            <S.DiscriptionCarouselCont openABS={openABS}>
              <Typography variant="h4">
                {openABS ? "Description ABS" : "Description générale"}
              </Typography>
              <Typography variant="h4">
                {carouselGeneral
                  ? imageMapGeneral && imageMapGeneral[imgIndex]?.produit_titre
                  : imageMap && imageMap[imgIndex]?.produit_titre}
              </Typography>
              <Typography variant="body1">
                {carouselGeneral
                  ? imageMapGeneral &&
                    imageMapGeneral[imgIndex]?.prod_description_general
                  : imageMap && imageMap[imgIndex]?.prod_description}
              </Typography>
            </S.DiscriptionCarouselCont>
            <S.ButtonSwitchABS onClick={changerABSGeneral}>
              <Typography variant="h5">
                {openABS
                  ? "Regarder une description générale"
                  : "Regarder nos realisations"}
              </Typography>
            </S.ButtonSwitchABS>
          </S.Description>
        )}
      </S.FlexBox>
    </S.CarouselContainer>
  );
};

export default Carousel;
