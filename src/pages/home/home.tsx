import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LangButton from "../../shared/langButton";
import img1 from "../../images/crown.png";
import WalkingCat from "../components/walkingCat";

import * as S from "./home.styled";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.MainContainer>
      <S.GridContainer>
        <S.LeftSide1ecran></S.LeftSide1ecran>
        <S.RightSide1ecran></S.RightSide1ecran>
        <S.Langbt>
          <LangButton colorPrime={false} iconWithoutSlash={false} />
        </S.Langbt>
        <S.TitleLeft1ecran>
          <Typography variant="h2">{t("main.title")}</Typography>
          <Typography variant="h4" sx={{ px: 20 }}>
            {t("main.text")}
          </Typography>
        </S.TitleLeft1ecran>
        <S.TitleRight1ecran>
          <Typography variant="h2">{t("main.title")}</Typography>
          <Typography variant="h4" sx={{ px: 20 }}>
            {t("main.text")}
          </Typography>
        </S.TitleRight1ecran>
        <S.CatContainer>
          <WalkingCat />
        </S.CatContainer>
      </S.GridContainer>
      <S.GridContainer2ecran>
        <S.LeftSide2ecran>
          <S.ImgLeft2ecran src={img1} alt="" />
        </S.LeftSide2ecran>
        <S.RightSide2ecran></S.RightSide2ecran>
        <S.TitleLeft2ecran>
          <Typography variant="h3" sx={{ px: 20 }}>
            {t("main.title2ecran")}
          </Typography>
          <Typography variant="h3" sx={{ px: 20 }}>
            {t("main.subtitle2ecran")}
          </Typography>
          <Typography variant="h3" sx={{ px: 20 }}>
            {t("main.subtitle12ecran")}
            <Typography variant="h3" sx={{ px: 20 }}></Typography>
            {t("main.author2ecran")}
          </Typography>
        </S.TitleLeft2ecran>
        <S.TitleRight2ecran>
          <Typography variant="h3" sx={{ px: 20 }}>
            {t("main.title2ecran")}
          </Typography>
          <Typography variant="h3" sx={{ px: 20 }}>
            {t("main.subtitle2ecran")}
          </Typography>
          <Typography variant="h3" sx={{ px: 20 }}>
            {t("main.subtitle12ecran")}
            <Typography variant="h3" sx={{ px: 20 }}></Typography>
            {t("main.author2ecran")}
          </Typography>
        </S.TitleRight2ecran>
      </S.GridContainer2ecran>
    </S.MainContainer>
  );
};

export default Home;
