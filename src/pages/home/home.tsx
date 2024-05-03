import { Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import WalkingCat from '../components/walkingCat';
import img1 from '../../images/crown.webp';

import * as S from './home.styled';

const arrayTechnologies = [
  'React.js',
  'Node.js',
  'SQL',
  'PostgreSQL',
  'Firebase',
  'MaterialUI',
  'Typescript',
  'GitHub',
];

const Home: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const showCardText = (ind: number): void => {
    const card = document.querySelector(`#card${ind}`);
    const hideNode = document.querySelector(`#hide${ind}`);
    const text = document.querySelector(`#text${ind}`);

    if (open) {
      card?.setAttribute('style', 'display:block;');
      text?.setAttribute('style', 'display:block;');
      hideNode?.setAttribute('style', 'display:none;');
    } else {
      card?.setAttribute('style', 'display:none;');
      text?.setAttribute('style', 'display:none;');
      hideNode?.setAttribute('style', 'display:block;');
    }
  };

  const pxValue = {
    xs: 2,
    sm: 4,
    md: 6,
    lg: 10,
    xl: 14,
  };

  const fontSizeTitle = {
    xs: '1.6rem',
    sm: '2rem',
    md: '2.5rem',
    lg: '3.4rem',
    xl: '4rem',
  };

  const fontSizeSubTitle = {
    xs: '1.2rem',
    sm: '1.3rem',
    md: '1.4rem',
    lg: '1.8rem',
    xl: '2rem',
  };

  return (
    <S.MainContainer>
      <Helmet>
        <title>Portfolio full stack développeur</title>
        <meta name="description" content="Full-stack développeur web portfolio Il-de-France" />
        <meta
          name="keywords"
          content="Full-stack, développeur web, portfolio, développeur react, développeur node.js"
        />
        <meta name="twitter:title" content="Portfolio full stack développeur" />
        <meta name="twitter:description" content="Full-stack développeur web portfolio Il-de-France" />
        <meta property="og:title" content="Portfolio full stack développeu" />
        <meta property="og:description" content="Full-stack développeur web portfolio Il-de-France" />
        <meta property="og:url" content="https://tina-dev-portfolio.netlify.app/" />
        <meta property="og:site_name" content="tina-dev-portfolio" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="article" />
      </Helmet>
      <S.GridContainer>
        <S.LeftSide1ecran></S.LeftSide1ecran>
        <S.RightSide1ecran></S.RightSide1ecran>
        <S.TitleLeft1ecran>
          <S.TitreColor>
            <Typography
              variant="h1"
              sx={{
                px: pxValue,
                fontSize: fontSizeTitle,
                WebkitTextStroke: {
                  xs: '1px rgba(0, 0, 0, .5)',
                  md: '0',
                },
              }}>
              {t('main.title')}
            </Typography>
          </S.TitreColor>
          <br />
          <Typography
            variant="h3"
            sx={{
              px: pxValue,
              fontSize: fontSizeSubTitle,
            }}>
            {t('main.text')}
          </Typography>
        </S.TitleLeft1ecran>
        <S.TitleRight1ecran>
          <S.TitreColor>
            <Typography
              variant="h1"
              sx={{
                px: pxValue,
                fontSize: fontSizeTitle,
              }}>
              {t('main.title')}
            </Typography>
          </S.TitreColor>
          <br />
          <Typography
            variant="h3"
            sx={{
              px: pxValue,
              fontSize: fontSizeSubTitle,
            }}>
            {t('main.text')}
          </Typography>
        </S.TitleRight1ecran>
        <S.Puzzle>
          {arrayTechnologies.map((item, index) => (
            <S.Element
              index={index + 1}
              key={item}
              onMouseOver={() => showCardText(index + 1)}
              onTouchStart={() => showCardText(index + 1)}>
              <S.ElImg
                src={require(`../../images/${item}.webp`)}
                height="auto"
                width="100%"
                alt={item}
                id={`card${index + 1}`}
                className="card"
                onMouseOut={() => setOpen(false)}
                onTouchEnd={() => setOpen(false)}
              />
              <S.ElImgHide
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                src={require(`../../images/${item}1.webp`)}
                height="auto"
                width="100%"
                alt={`logo${item}`}
                id={`hide${index + 1}`}
                className="hide"
                onMouseOut={() => setOpen(true)}
                onTouchEnd={() => setOpen(true)}
              />
            </S.Element>
          ))}
        </S.Puzzle>
        <S.CatContainer>
          <WalkingCat />
        </S.CatContainer>
      </S.GridContainer>
      <S.GridContainer2ecran>
        <S.ImgCloudContainer />
        <S.LeftSide2ecran>
          <S.ImgLeft2ecran src={img1} alt="" height="auto" width="100%" />
        </S.LeftSide2ecran>
        <S.RightSide2ecran></S.RightSide2ecran>
        <S.Text2ecran>
          <S.TitleLeft2ecran>
            <Typography
              variant="h2"
              sx={{
                px: pxValue,
              }}>
              {t('main.title2ecran')}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                px: pxValue,
              }}>
              {t('main.subtitle2ecran')}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                px: pxValue,
              }}>
              {t('main.subtitle12ecran')}
              <Typography
                variant="h2"
                sx={{
                  px: pxValue,
                }}></Typography>
              {t('main.author2ecran')}
            </Typography>
          </S.TitleLeft2ecran>
          <S.TitleRight2ecran>
            <Typography
              variant="h2"
              sx={{
                px: pxValue,
              }}>
              {t('main.title2ecran')}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                px: pxValue,
              }}>
              {t('main.subtitle2ecran')}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                px: pxValue,
              }}>
              {t('main.subtitle12ecran')}
              <Typography
                variant="h2"
                sx={{
                  px: pxValue,
                }}></Typography>
              {t('main.author2ecran')}
            </Typography>
          </S.TitleRight2ecran>
        </S.Text2ecran>
      </S.GridContainer2ecran>
    </S.MainContainer>
  );
};

export default Home;
