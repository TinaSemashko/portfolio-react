// import ImgContact from '../../images/logofooter.mp4';
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Button, IconButton, Link, Typography } from "@mui/material";
import LangButton from "../langButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useLocation, useNavigate } from "react-router";

import * as S from "./footer.styled";
import { Routes } from "../../app/routes";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentPathArray = pathname.split("/");
  const isParallax =
    currentPathArray[currentPathArray.length - 1] === "about" ||
    currentPathArray[currentPathArray.length - 1] === "projects";

  return (
    <S.MainContainer>
      <S.FixedFooter isParallax={isParallax}>
        <S.WorkInquiryBox>
          <div>
            <Typography variant="h4" textAlign="center">
              {t("footer.work")}
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ color: "#008388" }}
            >
              {t("footer.work_sub")}
            </Typography>
          </div>
          <S.ButtonWork onClick={() => navigate(Routes.contact)}>
            <Typography variant="h6" textAlign="center">
              {t("footer.contact")}
            </Typography>
          </S.ButtonWork>
        </S.WorkInquiryBox>

        <S.SocialLinks>
          <IconButton href="https://github.com/TinaSemashko" target="_blank">
            <GitHubIcon color="primary" />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/tina-semashko/"
            target="_blank"
          >
            <LinkedInIcon color="primary" />
          </IconButton>
          <IconButton href="https://www.facebook.com/akateria/" target="_blank">
            <FacebookIcon color="primary" />
          </IconButton>
        </S.SocialLinks>
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
      </S.FixedFooter>
    </S.MainContainer>
  );
};

export default Home;
