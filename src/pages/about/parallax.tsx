import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LangButton from "../../shared/langButton";
import img1 from "../../images/crown.png";
import Video from "../../images/online-video-cutter.com.mp4";

import * as S from "./parallax.styled";

const Parallax: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.MainContainer>
      <S.ImgMainContainer>
        {/* <S.VideoParallax src={Video} autoPlay loop muted /> */}
        <S.TextContainer1>
          <S.TextRainbow>
            <Typography variant="h1">{t("about.title")}</Typography>
            <Typography variant="h1">{t("about.subtitle1")}</Typography>
          </S.TextRainbow>
        </S.TextContainer1>
      </S.ImgMainContainer>
      <S.TextContainer2>
        <Typography variant="h5">
          IT it's my life. I fell in love with IT at the age of 16. Since then,
          I had worked as a system administrator, analyst, 1C developer, and now
          I has become a web-developer.
        </Typography>
      </S.TextContainer2>
      <S.ImgContainer1>
        <S.TextContainer3>
          <Typography variant="h2">I develop</Typography>
        </S.TextContainer3>
      </S.ImgContainer1>
      <S.TextContainer4>
        <Typography variant="h4">
          All-Ukrainian public organization "Ukrainian Yoga Federation"
          (Federation, UFI) is a union of independent yoga centers, instructors,
          practitioners, and students of yoga.
        </Typography>
      </S.TextContainer4>
      <S.ImgContainer2>
        <S.TextContainer5>
          <Typography variant="h2">I do yoga</Typography>
        </S.TextContainer5>
      </S.ImgContainer2>
      <S.TextContainer6>
        <Typography variant="h4">
          Путешествия - это возможность выйти за границы обыденного, узнать, в
          чем мы разные, и в чем такие же, вдохновиться непохожим стилем
          мышления и видения мира, разрушить железобетонные принципы...
        </Typography>
      </S.TextContainer6>
      <S.ImgContainer3>
        <S.TextContainer5>
          <Typography variant="h2">I travel</Typography>
        </S.TextContainer5>
      </S.ImgContainer3>
      <S.TextContainer7>
        <Typography variant="h4">
          Я люблю погружаться в мир книг, это совсем не то, что кино, где все
          уже за тебя разжевано и показан взгляд даже не автора, но режиссера.
          Мне нравится представлять события самостоятельно, пропускать их через
          призму своего опыта, своих ассоциаций и своего видения.
        </Typography>
      </S.TextContainer7>
      <S.ImgContainer4>
        <S.TextContainer5>
          <Typography variant="h2">I read </Typography>
        </S.TextContainer5>
      </S.ImgContainer4>
      <S.TextContainer8>
        <Typography variant="h4">
          Мне всегда нравилось создавать красоту, с детства я рисовала,
          вышивала, создавала картины из пластилина, потом обшивала кожей, плела
          из бисера... Особое удовольствие мне доставило открытие прозрачных
          витражных красок с сочными чистыми цветами.
        </Typography>
      </S.TextContainer8>
      <S.ImgContainer5>
        <S.TextContainer5>
          <Typography variant="h2">I make hand-made </Typography>
        </S.TextContainer5>
      </S.ImgContainer5>
      <S.ImgMainContainer></S.ImgMainContainer>
    </S.MainContainer>
  );
};

export default Parallax;
