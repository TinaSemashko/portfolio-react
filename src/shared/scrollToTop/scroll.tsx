import { IconButton, Typography } from '@mui/material';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useEffect, useState } from 'react';

import * as S from './scroll.styled';
import { useTranslation } from 'react-i18next';

type Props = {
  showBelow: number;
};

const Scroll: React.FC<Props> = ({ showBelow }) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(showBelow ? false : true);

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    if (window.scrollY > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <S.MainContainer>
      {show && (
        <IconButton
          onClick={handleClick}
          sx={{
            // width: '10%',
            height: '20vh',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'column',
            position: 'fixed',
            bottom: '10vh',
          }}>
          <NavigationIcon color="secondary" />
          <Typography variant="body2" color="secondary" sx={{ transform: 'rotate(90deg)', width: '15vh' }}>
            {t('main.backToTop')}
          </Typography>
        </IconButton>
      )}
    </S.MainContainer>
  );
};

export default Scroll;
