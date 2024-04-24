import { Button, Typography, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';
import { theme } from '../../app/app';
import ContactForm from './contactForm';
import email from '../../images/email.png';
import linkedin from '../../images/linkedin.png';
import telegram from '../../images/telegram.png';

import * as S from './contact.styled';

const fontSizeContact = {
  xs: '0.5rem',
  sm: '0.8rem',
  md: '0.9rem',
  lg: '1rem',
  xl: '1.2rem',
};

const Contact: React.FC = () => {
  const mediumScreen = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <S.MainContainer>
      <Helmet>
        <title>Contacts full stack développeur</title>
        <meta name="description" content="Contacts Full-stack développeur web portfolio Il-de-France" />
        <meta
          name="keywords"
          content="Contacts, Full-stack, développeur web, portfolio, développeur react, développeur node.js"
        />
      </Helmet>
      <S.LeftContainer>
        <ContactForm />
      </S.LeftContainer>
      <S.RightContainer>
        <S.RightBackgroundContainer />
        <S.LefttBackgroundContainer />
        <S.CardBox>
          <S.Card1>
            <img src={email} alt="" width="50rem" />
            <Button href="mailto:tina.semashko@gmail.com">
              <Typography
                variant="body2"
                sx={{
                  color: 'colorBlue.main',
                  textTransform: 'none',
                  fontSize: fontSizeContact,
                }}>
                tina.semashko@ {mediumScreen && <br />}gmail.com
              </Typography>
            </Button>
          </S.Card1>
          <S.Card2 />
          <S.Card3>
            <img src={linkedin} alt="" width="50rem" />
            <Button href="https://www.linkedin.com/in/tina-semashko/">
              <Typography
                variant="body2"
                sx={{
                  color: 'colorBlue.main',
                  textTransform: 'none',
                  fontSize: fontSizeContact,
                }}>
                @tina-semashko
              </Typography>
            </Button>
          </S.Card3>
          <S.Card4 />
          <S.Card5>
            <img src={telegram} alt="" width="50rem" />
            <Button href="https://t.me/SemashkoTina">
              <Typography
                variant="body2"
                sx={{
                  color: 'colorBlue.main',
                  textTransform: 'none',
                  fontSize: {
                    xs: '0.5rem',
                    sm: '0.8rem',
                    md: '0.9rem',
                    lg: '1rem',
                    xl: '1.2rem',
                  },
                }}>
                @Semashko{mediumScreen && <br />}Tina
              </Typography>
            </Button>
          </S.Card5>
          <S.Card6 />
        </S.CardBox>
      </S.RightContainer>
    </S.MainContainer>
  );
};

export default Contact;
