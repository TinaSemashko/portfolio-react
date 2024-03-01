import { useTranslation } from "react-i18next";
import * as S from "../home/home.styled";

const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return <S.MainContainer>{/* <S.PhotoBox></S.PhotoBox> */}</S.MainContainer>;
};

export default NotFound;
