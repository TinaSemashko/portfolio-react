import { useTranslation } from "react-i18next";
import Parallax from "./parallax";

import * as S from "./about.styled";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <S.MainContainer>
      <Parallax />
    </S.MainContainer>
  );
};

export default About;
