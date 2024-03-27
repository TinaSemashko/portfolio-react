import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Routes } from "../../app/routes";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Typography, useMediaQuery } from "@mui/material";
import { theme } from "../../app/app";
import { Carousel3d, CarouselImg } from "../../types/projects";

import * as S from "./carousel.styled";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const GlobalStyles = createGlobalStyle`
  .slick-arrow.slick-next:before,
  .slick-arrow.slick-prev:before {
    content: "";
  }
  .slick-dots {
            display: flex !important;
            justify-content: space-evenly;
            bottom: 5vh !important;
            margin-left:-1.5vw;
            @media (max-width: 1400px) {
                 bottom: 7vh !important;
              }
            @media (max-width: 1200px) {
                 bottom: 10vh !important;
            }
            @media (max-width: 960px) {
                 bottom: 15vh !important;
                 margin-left:-2vw;
            }
        }
`;

type Props = {
  carouselImagesProps?: CarouselImg[];
  project: Carousel3d | null;
};

const fontSizeH6 = {
  xxs: "0.5rem",
  xs: "0.5rem",
  sm: "0.8rem",
  md: "0.9rem",
  lg: "0.95rem",
  xl: "1rem",
  xxl: "1rem",
};

const Carousel: React.FC<Props> = ({ carouselImagesProps, project }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [imageMapFront, setImageMapFront] = useState<CarouselImg[]>();
  const [imageMapBack, setImageMapBack] = useState<CarouselImg[]>();
  const [carouselFront, setCarouselFront] = useState(true);
  const [openFront, setOpenFront] = useState(false);
  const [carouselImages, setCarouselImages] = useState<CarouselImg[]>([]);
  const [linkProject, setlinkProject] = useState<string | null>("");
  const [linkGit, setlinkGit] = useState<string | null>("");
  const mediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const SampleNextArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <S.ArrowWrapper
        className={className}
        showDescription={true}
        style={{
          ...style,
          right: "4vw",
        }}
        onClick={onClick}
      >
        <S.ArrowRightIcon />
      </S.ArrowWrapper>
    );
  };

  const SamplePrevArrow = (props: ArrowProps) => {
    const { className, style, onClick } = props;
    return (
      <S.ArrowWrapper
        className={className}
        showDescription={true}
        style={{
          ...style,
          left: "4vw",
        }}
        onClick={onClick}
      >
        <S.ArrowLeftIcon />
      </S.ArrowWrapper>
    );
  };

  useEffect(() => {
    if (carouselImagesProps) {
      setCarouselImages(carouselImagesProps);
      setlinkProject(project && project.linkProject);
      setlinkGit(project && project?.linkGit);
    }
  }, [carouselImagesProps, project]);

  useEffect(() => {
    if (carouselImages) {
      const [updatedImageMapBack, updatedImageMapFront] = carouselImages.reduce(
        (acc: [CarouselImg[], CarouselImg[]], item: CarouselImg) => {
          const newItem: CarouselImg = {
            src: item.src,
            alt: `Image ${item.alt}`,
            description: item.description,
            general: item.general,
          };

          if (item.general) {
            acc[1].push(newItem);
          } else {
            acc[0].push(newItem);
          }

          return acc;
        },
        [[], []]
      );

      setImageMapBack(updatedImageMapBack);
      setImageMapFront(updatedImageMapFront);
    }
  }, [carouselImages]);

  const changeCarousel = (status: boolean) => {
    setCarouselFront(status);
    setOpenFront(carouselFront !== status ? !openFront : openFront);
  };

  const settings = {
    customPaging: function (i: number) {
      const imageMap = carouselFront ? imageMapFront : imageMapBack;
      const selectedImage = imageMap && (imageMap[i] || imageMap[0]);
      const src = `${require(`../../images/MyProjects/${selectedImage?.src}`)}`;
      const alt = selectedImage?.alt;
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a>
          <img
            src={src}
            alt={alt}
            width="50vw"
            height="50vh"
            style={{ border: "solid #ffffff" }}
          />
        </a>
      );
    },

    dots: mediumScreen ? false : true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const changerFrontCode = () => {
    changeCarousel(openFront);
  };

  const openLink = (link: string) => {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const openVideo = () => {
    if (project && project?.projectName === "TeamChallenge")
      openLink(project.linkVideo);
    else
      navigate(Routes.videopage, {
        state: { projectcard: { project } },
      });
  };

  return (
    <S.CarouselContainer showDescription={true}>
      <GlobalStyles />
      <S.FlexBox>
        <S.SliderBox>
          <Slider {...settings} className="Slider">
            {(carouselFront ? imageMapFront : imageMapBack)?.map(
              (item, index) => (
                <S.ImgCarouselContainer
                  className="ImgCarouselContainer"
                  key={index}
                  slidesMoreOne={
                    carouselFront
                      ? imageMapFront
                        ? imageMapFront?.length > 1
                        : false
                      : imageMapBack
                      ? imageMapBack?.length > 1
                      : false
                  }
                >
                  <img
                    src={`${
                      item.src !== ""
                        ? require(`../../images/MyProjects/${item.src}`)
                        : project?.src
                    }`}
                    alt={item.alt}
                    width="100%"
                  />
                </S.ImgCarouselContainer>
              )
            )}
          </Slider>
        </S.SliderBox>
        <S.Description>
          <S.DiscriptionCarouselCont openABS={openFront}>
            <Typography
              variant="h4"
              textAlign="center"
              sx={{ width: "80%", color: "#a1a1a1", fontSize: fontSizeH6 }}
            >
              {project?.descriptions}
            </Typography>
            <Button
              variant="text"
              onClick={() => openLink(linkProject ?? "")}
              disabled={!(project && project?.openProject)}
              color="secondary"
              sx={{ cursor: "pointer" }}
            >
              <Typography variant="h4">
                {t("carousel2d.button_project")}
              </Typography>
            </Button>
            <Button
              variant="text"
              onClick={() => openLink(linkGit ?? "")}
              disabled={!(project && project?.openGit)}
              color="secondary"
              sx={{ cursor: "pointer" }}
            >
              <Typography variant="h4">{t("carousel2d.button_git")}</Typography>
            </Button>
            <Button
              variant="text"
              onClick={() => openVideo()}
              disabled={!(project && project?.openVideo)}
              color="secondary"
              sx={{ cursor: "pointer" }}
            >
              <Typography variant="h4" sx={{ cursor: "pointer" }}>
                {t("carousel2d.button_video")}
              </Typography>
            </Button>
          </S.DiscriptionCarouselCont>
          <S.ButtonSwitchABS
            onClick={changerFrontCode}
            disabled={carouselImagesProps?.length === 1}
          >
            <Typography variant="h5">
              {carouselImagesProps?.length === 1
                ? ""
                : openFront
                ? t("carousel2d.button_front")
                : t("carousel2d.button_code")}
            </Typography>
          </S.ButtonSwitchABS>
        </S.Description>
      </S.FlexBox>
    </S.CarouselContainer>
  );
};

export default Carousel;
