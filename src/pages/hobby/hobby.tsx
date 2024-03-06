import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { Routes } from "../../app/routes";
import Video from "../../images/videohome.mp4";
import logo from "../../images/logo.png";
import img from "../../images/perle.png";

import * as S from "./hobby.styled";

const Hobby: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <S.MainContainer>
      <S.VideoAccueil src={Video} autoPlay loop muted />
      <S.GridContainer>
        <S.ImgContainer></S.ImgContainer>
        <S.ImgContainer></S.ImgContainer>
        <S.ImgContainer1>
          <S.StyledImg src={img} alt="" />
          <S.StyleText1>
            <Typography
              variant="h2"
              onClick={() => {
                navigate(Routes.galery);
              }}
            >
              Кожа
            </Typography>
          </S.StyleText1>
        </S.ImgContainer1>
        <S.ImgContainer></S.ImgContainer>
        <S.ImgContainer></S.ImgContainer>
        <S.ImgContainer></S.ImgContainer>
        <S.ImgContainer></S.ImgContainer>
        <S.ImgContainer2>
          <S.StyledImg src={img} alt="" />
          <S.StyleText1>
            <Typography variant="h2">Бисер</Typography>
          </S.StyleText1>
        </S.ImgContainer2>
        <S.ImgContainer></S.ImgContainer>
        <S.ImgContainer3>
          <S.StyledImg src={img} alt="" />
          <S.StyleText1>
            <Typography variant="h2">Стекло</Typography>
          </S.StyleText1>
        </S.ImgContainer3>
      </S.GridContainer>
    </S.MainContainer>
  );
};

export default Hobby;
