// import { useTranslation } from "react-i18next";
import * as S from "../home/home.styled";
import Fireplace from "../components/fireplace";

const NotFound: React.FC = () => {
  // const { t } = useTranslation();

  return (
    <S.MainContainer>
      <Fireplace />
    </S.MainContainer>
  );
};

export default NotFound;
