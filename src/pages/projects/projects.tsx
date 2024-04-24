import { Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import Carousel from '../../shared/carousel3D/carousel3d';
import { theme } from '../../app/app';
import ProjectsMobile from './projectsMobile';

import * as S from './projects.styled';

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const largeScreen = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <S.MainContainer>
      <Helmet>
        <title>Projets full stack développeur</title>
        <meta name="description" content="Mes projects Full-stack développeur web portfolio Il-de-France" />
        <meta
          name="keywords"
          content="Mes projects, Full-stack, développeur web, portfolio, développeur react, développeur node.js"
        />
      </Helmet>
      <Typography
        variant="h1"
        sx={{
          color: smallScreen ? 'primary.main' : 'colorBlack.main',
          textShadow:
            '0px 3px 0px rgba(84, 83, 83, 0.545),0px 7px 10px rgba(0,0,0,0.15), 0px 10px 2px rgba(0,0,0,0.15), 0px 14px 30px rgba(0,0,0,0.2)',
        }}>
        {t('projects.title')}
      </Typography>
      <br /> <br /> <br />
      {smallScreen && <ProjectsMobile />}
      {largeScreen && (
        <S.CarouselContainer>
          <Carousel />
        </S.CarouselContainer>
      )}
    </S.MainContainer>
  );
};

export default Projects;
