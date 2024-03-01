import { IconButton, Typography } from "@mui/material";
import LangButton from "../langButton";
import { Routes } from "../../app/routes";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import Social from "../socialLinks";

import * as S from "./footer.styled";

const Home: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentPathArray = pathname.split("/");
  const isParallax =
    currentPathArray[currentPathArray.length - 1] === "about" ||
    currentPathArray[currentPathArray.length - 1] === "projects";

  return (
    <S.MainContainer isParallax={isParallax}>
      <S.WorkInquiryBox>
        <div>
          <Typography variant="h4" textAlign="center">
            {t("footer.work")}
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ color: "#008388" }}>
            {t("footer.work_sub")}
          </Typography>
        </div>
        <S.ButtonWork onClick={() => navigate(Routes.contact)}>
          <Typography variant="h6" textAlign="center">
            {t("footer.contact")}
          </Typography>
        </S.ButtonWork>
      </S.WorkInquiryBox>
      <Social />
      <S.FlexBox>
        <LangButton
          colorPrime={false}
          iconWithoutSlash={true}
          selectMode={false}
        />
        <Typography variant="h6" textAlign="center" sx={{ zIndex: "100" }}>
          {t("footer.rights")}
        </Typography>
        <div></div>
      </S.FlexBox>
    </S.MainContainer>
  );
};

export default Home;
