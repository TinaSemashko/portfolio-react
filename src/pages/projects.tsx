import Carousel from "../shared/carousel/carousel";
import * as S from "./home.styled";

const Projects: React.FC = () => {
  return (
    <S.MainContainer>
      <h1>Take a look at what I've been working on!</h1>
      <Carousel />
    </S.MainContainer>
  );
};

export default Projects;
