import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LangButton from "../../shared/langButton";
import img1 from "../../images/crown.png";
import img2 from "../../images/puzzl1.png";
import WalkingCat from "../components/walkingCat";

import * as S from "./home.styled";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.MainContainer>
      <S.GridContainer>
        <S.LeftSide1ecran></S.LeftSide1ecran>
        <S.RightSide1ecran></S.RightSide1ecran>
        <S.TitleLeft1ecran>
          <S.TitreColor>
            <Typography variant="h2">{t("main.title")}</Typography>
          </S.TitreColor>
          <Typography variant="h4" sx={{ px: 20 }}>
            {t("main.text")}
          </Typography>
        </S.TitleLeft1ecran>
        <S.TitleRight1ecran>
          <S.TitreColor>
            <Typography variant="h2">{t("main.title")}</Typography>
          </S.TitreColor>
          <Typography variant="h4" sx={{ px: 20 }}>
            {t("main.text")}
          </Typography>
        </S.TitleRight1ecran>
        <S.Langbt>
          <S.Element1>
            <S.ElImg src={img2} alt="" />
          </S.Element1>
          <S.Element2>
            <S.ElImg src={img2} alt="" />
          </S.Element2>
          <S.Element3>
            <S.ElImg src={img2} alt="" />
          </S.Element3>
          <S.Element4>
            <S.ElImg src={img2} alt="" />
          </S.Element4>
          <S.Element5>
            <S.ElImg src={img2} alt="" />
          </S.Element5>
          <S.Element6>
            <S.ElImg src={img2} alt="" />
          </S.Element6>
          <S.Element7>
            <S.ElImg src={img2} alt="" />
          </S.Element7>

          {/* <img src={img2} alt="" width="120%" /> */}
        </S.Langbt>
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
