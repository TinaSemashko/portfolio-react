import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Carousel from "../../shared/carousel3D/carousel3d";

import * as S from "./projects.styled";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  return (
    <S.MainContainer>
      <Typography
        variant="h1"
        sx={{
          color: "colorBlack.main",
          textShadow:
            "0px 3px 0px rgba(84, 83, 83, 0.545),0px 7px 10px rgba(0,0,0,0.15), 0px 10px 2px rgba(0,0,0,0.15), 0px 14px 30px rgba(0,0,0,0.2)",
        }}
      >
        {t("projects.title")}
      </Typography>
      <br /> <br /> <br />
      <S.CarouselContainer>
        <Carousel />
      </S.CarouselContainer>
    </S.MainContainer>
  );
};

export default Projects;
