import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { Button, Typography } from "@mui/material";
import ContactForm from "./contactForm";
import img1 from "../../images/email.png";
import img2 from "../../images/linkedin.png";
import img3 from "../../images/telegram.png";

import * as S from "./contact.styled";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const [state, handleSubmit] = useForm("mvoljqpq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <S.MainContainer>
      <S.Card1>
        <img src={img1} alt="" width="50rem" />
        <Button href="mailto:tina.semashko@gmail.com">
          <Typography variant="h6" sx={{ color: "rgb(4, 45, 94) " }}>
            tina.semashko@gmail.com
          </Typography>
        </Button>
      </S.Card1>
      <S.Card2 />
      <S.Card3>
        <img src={img2} alt="" width="50rem" />
        <Button href="https://www.linkedin.com/in/tina-semashko/">
          <Typography variant="h6" sx={{ color: "rgb(4, 45, 94) " }}>
            @tina-semashko
          </Typography>
        </Button>
      </S.Card3>
      <S.Card4 />
      <S.Card5>
        <img src={img3} alt="" width="50rem" />
        <Button href="https://t.me/SemashkoTina">
          <Typography variant="h6" sx={{ color: "rgb(4, 45, 94) " }}>
            @SemashkoTina
          </Typography>
        </Button>
      </S.Card5>
      <S.Card6 />
      <S.LeftContainer>
        <ContactForm />
      </S.LeftContainer>
      <S.RightContainer></S.RightContainer>
    </S.MainContainer>
  );
};

export default Contact;
