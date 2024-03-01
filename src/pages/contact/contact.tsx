import { useTranslation } from "react-i18next";
import * as S from "./contact.styled";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return <S.MainContainer>{/* <S.PhotoBox></S.PhotoBox> */}</S.MainContainer>;
};

export default Contact;
