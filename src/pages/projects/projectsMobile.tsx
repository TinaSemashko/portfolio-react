import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { Routes } from '../../app/routes';
import { imagesCarousel } from '../../shared/carousel3D/dataCarousel';
import { Carousel3d } from '../../types/projects';

import * as S from './projects.styled';

const fontSizeBody1 = {
  xxs: '1rem',
  xs: '1.5rem',
  sm: '1.5rem',
  md: '1.5rem',
  lg: '1.5rem',
  xl: '1.5rem',
  xxl: '1.5rem',
};

imagesCarousel.map((el, index) => {
  el.src = require(`../../images/${el.imageName}`);
  el.alt = `Image ${index + 1}`;

  return el;
});

const ProjectsMobile: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const openDescription = (project: Carousel3d): void => {
    navigate(Routes.cartproject, {
      state: { cartproject: { project } },
    });
  };

  return (
    <S.MobileContainer>
      {imagesCarousel.map(item => (
        <S.PictureContainer key={item.projectName}>
          <S.Picture src={item.src} alt={item.alt} />
          <S.ButtonMore>
            <Typography
              component="div"
              variant="body1"
              textAlign="left"
              sx={{ fontSize: fontSizeBody1 }}
              onClick={() => openDescription(item)}>
              {t('carousel3d.button_project')}
            </Typography>
          </S.ButtonMore>
          *
        </S.PictureContainer>
      ))}
    </S.MobileContainer>
  );
};

export default ProjectsMobile;
