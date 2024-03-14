import { Button, Typography, useMediaQuery } from "@mui/material";
import ContactForm from "./contactForm";
import img1 from "../../images/email.png";
import img2 from "../../images/linkedin.png";
import img3 from "../../images/telegram.png";

import * as S from "./contact.styled";
import { theme } from "../../app/app";

const Contact: React.FC = () => {
  const mediumScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <S.MainContainer>
      <S.LeftContainer>
        <ContactForm />
      </S.LeftContainer>
      <S.RightContainer>
        <S.RightBackgroundContainer />
        <S.LefttBackgroundContainer />
        <S.CardBox>
          <S.Card1>
            <img src={img1} alt="" width="50rem" />
            <Button href="mailto:tina.semashko@gmail.com">
              <Typography variant="h6" sx={{ color: "colorBlue.main" }}>
                tina.semashko@ {mediumScreen && <br />}gmail.com
              </Typography>
            </Button>
          </S.Card1>
          <S.Card2 />
          <S.Card3>
            <img src={img2} alt="" width="50rem" />
            <Button href="https://www.linkedin.com/in/tina-semashko/">
              <Typography variant="h6" sx={{ color: "colorBlue.main" }}>
                @tina-semashko
              </Typography>
            </Button>
          </S.Card3>
          <S.Card4 />
          <S.Card5>
            <img src={img3} alt="" width="50rem" />
            <Button href="https://t.me/SemashkoTina">
              <Typography variant="h6" sx={{ color: "colorBlue.main" }}>
                @Semashko_Tina
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
