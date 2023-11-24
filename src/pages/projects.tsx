import { Typography } from "@mui/material";
import Carousel from "../shared/carousel3D/carousel3d";
import * as S from "./projects.styled";

const Projects: React.FC = () => {
  return (
    <S.MainContainer>
      <Typography variant="h1" sx={{ color: "colorBlack.main" }}>
        Take a look at what I've been working on!
      </Typography>
      <br /> <br /> <br />
      <Carousel />
    </S.MainContainer>
  );
};

export default Projects;
