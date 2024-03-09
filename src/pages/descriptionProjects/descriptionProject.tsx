import { useState } from "react";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useLocation } from "react-router";
import Carousel from "../../shared/carousel2D";
import { CarouselImg } from "../../types/projects";
import { Routes } from "../../app/routes";

import * as S from "./descriptionProject.styled";

const DescriptionProduit: React.FC = () => {
  const { state } = useLocation();

  const [imagesCarousel, setImagesCarousel] = useState<CarouselImg[]>();

  const Project = "Project";
  return (
    <S.MainContainer>
      <S.BreadcrumbsContainer>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<DoubleArrowIcon fontSize="small" color="primary" />}
        >
          <Link underline="hover" color="inherit" href="/">
            <Typography variant="body2" color="primary.main">
              Home
            </Typography>
          </Link>
          <Link underline="hover" color="inherit" href={Routes.projects}>
            <Typography variant="body2" color="primary.main">
              Projects
            </Typography>
          </Link>
          <Typography variant="body2">{Project}</Typography>
        </Breadcrumbs>
      </S.BreadcrumbsContainer>
      <S.FlexBoxMain>
        <S.GridBox1Titre>
          <S.GridBox1Titre1 />
          <S.GridBox1Titre2>
            <Typography variant="h3" textAlign="left">
              {Project}
            </Typography>
          </S.GridBox1Titre2>
        </S.GridBox1Titre>
        <S.GridBox2Main>
          <S.GridBox2Main1 />
          <S.CarouselBox>
            <Carousel carouselImages={imagesCarousel} showDescription={true} />
          </S.CarouselBox>
          <S.GridBox2Main2 />
        </S.GridBox2Main>
      </S.FlexBoxMain>
    </S.MainContainer>
  );
};
export default DescriptionProduit;
