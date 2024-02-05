import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
import Video from "../../images/production_id 4076130 (1080p).mp4";
import flag from "../../images/Nuvola_France_Ukraine_flags.svg.png";
import Book from "./book";
import WalkingCat from "../components/walkingCat";
import LangButton from "../../shared/langButton";

import * as S from "./home.styled";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.MainContainer>
      <S.VideoAccueil src={Video} autoPlay loop muted />
      <S.Langbt>
        <LangButton colorPrime={true} iconWithoutSlash={false} />
      </S.Langbt>
      <S.TextContainer>
        <S.Title>
          <S.TextRainbow>
            <Typography variant="h2">
              <img src={flag} width="40vw" /> {t("main.subtitle1")}
            </Typography>
          </S.TextRainbow>
        </S.Title>
      </S.TextContainer>
      <WalkingCat />
      <S.HistoryContainer>
        <Typography variant="h3"> {parse(t("main.subtitle3"))}</Typography>
        <Book />
      </S.HistoryContainer>
    </S.MainContainer>
  );
};

export default Home;
