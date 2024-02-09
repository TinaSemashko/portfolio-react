import { Typography } from "@mui/material";
import Carousel from "../../shared/carousel3D/carousel3d";
import * as S from "./projects.styled";

const Projects: React.FC = () => {
  return (
    <S.MainContainer>
      <Typography
        variant="subtitle1"
        sx={{
          color: "colorBlack.main",
          textShadow:
            "0px 3px 0px rgba(84, 83, 83, 0.545),0px 7px 10px rgba(0,0,0,0.15), 0px 10px 2px rgba(0,0,0,0.15), 0px 14px 30px rgba(0,0,0,0.2)",
        }}
      >
        Take a look at what I've been working on!
      </Typography>
      <br /> <br /> <br />
      <S.CarouselContainer>
        <Carousel />
      </S.CarouselContainer>
    </S.MainContainer>
  );
};

export default Projects;
