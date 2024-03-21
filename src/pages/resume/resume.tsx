import { useTranslation } from "react-i18next";
import Avatar from "../../images/avatar.jpg";
import Divider from "@mui/material/Divider";
import { Typography, useMediaQuery } from "@mui/material";
import Social from "../../shared/socialLinks";
import parse from "html-react-parser";
import {
  arrayExperiences,
  arrayEducations,
  arrayCompetences,
  arrayResume,
  arrayCourses,
} from "./dataCV";
import CV_PDF from "../../images/resume.pdf";
import { theme } from "../../app/app";

import * as S from "./resume.styled";

const fontSizeH4 = {
  xs: "0.8rem",
  sm: "1.0rem",
  md: "1.2rem",
  lg: "1.4rem",
  xl: "1.6rem",
};

const fontSizeH6 = {
  xs: "0.5rem",
  sm: "0.8rem",
  md: "0.9rem",
  lg: "0.95rem",
  xl: "1rem",
};

const Resume: React.FC = () => {
  const { t } = useTranslation();
  const mediumScreen = useMediaQuery(theme.breakpoints.down("xl"));
  const largeScreen = useMediaQuery(theme.breakpoints.up("xl"));

  return (
    <S.MainContainer>
      <S.MainGridContainer>
        <S.ResumeContainer>
          <S.PhotoBox>
            <S.Photo src={Avatar} alt="" />
          </S.PhotoBox>
          <S.Title>
            <Typography
              variant="h3"
              textAlign="center"
              sx={{ color: "#0ca5e7" }}
            >
              {t("resume.name")}
            </Typography>
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight="900"
              sx={{
                color: "#0ca5e7",
                textShadow:
                  "  1px 1px 0 #05174b,1px -1px 0 #05174b,-1px 1px 0 #05174b,-1px -1px 0 #05174b",
              }}
            >
              {t("resume.title")}
            </Typography>
          </S.Title>
          <S.ButtonCV variant="contained">
            <a href={CV_PDF} target="_blank" rel="noreferrer">
              <Typography
                variant="h6"
                textAlign="center"
                sx={{
                  zIndex: "100",
                  position: "relative",
                  color: "#daa06d ",
                  textTransform: "capitalize",
                  fontSize: fontSizeH6,
                }}
              >
                {t("resume.download")}
              </Typography>
            </a>
          </S.ButtonCV>
          <S.TextBox>
            {arrayResume.map((item) => (
              <Typography sx={{ fontSize: fontSizeH6 }}>
                <li>{t(`resume.${item}`)}</li>
              </Typography>
            ))}
          </S.TextBox>
        </S.ResumeContainer>
      </S.MainGridContainer>
      <Divider />
      <S.FlexInformationContainer>
        <S.Line>
          <Social />
        </S.Line>
        <S.GridExpCompetences>
          <S.Experience>
            <S.ExpTitle>
              <Typography variant="h3">{t("resume.experience")}</Typography>
            </S.ExpTitle>
            {arrayExperiences.map((item) => (
              <S.ExpMain>
                <S.SectionDates>
                  <Typography
                    variant="h4"
                    fontWeight="900"
                    sx={{ fontSize: fontSizeH4 }}
                  >
                    {t(item.dateEx)}
                  </Typography>
                  <br />
                  <Typography variant="h4" sx={{ fontSize: fontSizeH4 }}>
                    {t(item.post)}
                  </Typography>
                </S.SectionDates>
                <S.SectionPoint>
                  <Typography variant="h1">.</Typography>
                  <Divider
                    orientation="vertical"
                    sx={{
                      borderColor: "black",
                      mt: -3,
                    }}
                  />
                </S.SectionPoint>
                <S.SectionOrganisation>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: fontSizeH4, fontWeight: "700" }}
                  >
                    {t(item.nameOrg)}
                  </Typography>
                  {largeScreen && <br />}
                  <Typography variant="h6" sx={{ fontSize: fontSizeH6 }}>
                    {parse(t(item.exp))}
                  </Typography>
                </S.SectionOrganisation>
              </S.ExpMain>
            ))}
          </S.Experience>
          {largeScreen && (
            <S.SectionCompetances>
              <S.ExpTitle>
                <Typography variant="h3">{t("resume.competence")}</Typography>
              </S.ExpTitle>
              {arrayCompetences.map((item) => (
                <Typography variant="h5" lineHeight="1.7">
                  <li>{t(`competences.${item}`)}</li>
                </Typography>
              ))}
            </S.SectionCompetances>
          )}
        </S.GridExpCompetences>
      </S.FlexInformationContainer>
      {mediumScreen && (
        <S.SectionCompetances>
          <S.ExpTitle>
            <Typography variant="h3">{t("resume.competence")}</Typography>
          </S.ExpTitle>
          {arrayCompetences.map((item) => (
            <Typography
              variant="h5"
              lineHeight="1.7"
              sx={{ fontSize: fontSizeH4 }}
            >
              <li>{t(`competences.${item}`)}</li>
            </Typography>
          ))}
        </S.SectionCompetances>
      )}
      {largeScreen && <S.Empty />}
      <S.FlexInformationContainer>
        <S.GridEducLangueges>
          <S.Education>
            <S.ExpTitle>
              <Typography variant="h3">{t("resume.education")}</Typography>
            </S.ExpTitle>
            {arrayEducations.map((item) => (
              <S.EducMain>
                <S.SectionDates>
                  <Typography
                    variant="h4"
                    fontWeight="900"
                    sx={{ fontSize: fontSizeH4 }}
                  >
                    {t(item.dataEd)}
                  </Typography>
                  <br />
                  <Typography variant="h4" sx={{ fontSize: fontSizeH4 }}>
                    {t(item.nameOrg)}
                  </Typography>
                </S.SectionDates>
                <S.SectionPoint>
                  <Typography variant="h1">.</Typography>
                  <Divider
                    orientation="vertical"
                    sx={{
                      borderColor: "black",
                      mt: -3,
                    }}
                  />
                </S.SectionPoint>
                <S.SectionOrganisation>
                  <Typography
                    variant="h4"
                    sx={{ fontSize: fontSizeH4, fontWeight: "700" }}
                  >
                    {t(item.nameEd)}
                  </Typography>
                </S.SectionOrganisation>
              </S.EducMain>
            ))}
            <S.CoursesTitle>
              <Typography variant="h3">{t("education.courses")}</Typography>
            </S.CoursesTitle>
            <S.Courses>
              {arrayCourses.map((item) => (
                <Typography variant="h4" sx={{ fontSize: fontSizeH4 }}>
                  <li>{t(`education.${item}`)}</li>
                </Typography>
              ))}
            </S.Courses>
          </S.Education>
          {largeScreen && (
            <S.SectionLangueges>
              <S.ExpTitle>
                <Typography variant="h3">{t("resume.language")}</Typography>
              </S.ExpTitle>
              <Typography variant="h5" lineHeight="1.7">
                <li>{t("languages.en")}</li>
                <li>{t("languages.fr")}</li>
                <li>{t("languages.ukr")}</li>
                <li>{t("languages.ru")}</li>
              </Typography>
            </S.SectionLangueges>
          )}
        </S.GridEducLangueges>
      </S.FlexInformationContainer>
      {mediumScreen && (
        <S.SectionLangueges>
          <S.ExpTitle>
            <Typography variant="h3">{t("resume.language")}</Typography>
          </S.ExpTitle>
          <Typography
            variant="h5"
            lineHeight="1.7"
            sx={{ fontSize: fontSizeH4 }}
          >
            <li>{t("languages.en")}</li>
            <li>{t("languages.fr")}</li>
            <li>{t("languages.ukr")}</li>
            <li>{t("languages.ru")}</li>
          </Typography>
        </S.SectionLangueges>
      )}
      <S.Empty />
      <S.Hobby>
        <S.TitleHobby>
          <Typography variant="h3">{t("resume.hobby")}</Typography>
        </S.TitleHobby>
        <S.SectionHobby1>
          <Typography variant="h4">{t("hobby.voyages")}</Typography>
        </S.SectionHobby1>
        <S.SectionHobby2>
          <Typography variant="h4">{t("hobby.yoga")}</Typography>
        </S.SectionHobby2>
        <S.SectionHobby3>
          <Typography variant="h4">{t("hobby.bricolage")}</Typography>
        </S.SectionHobby3>
        <S.SectionHobby4>
          <Typography variant="h4">{t("hobby.lecture")}</Typography>
        </S.SectionHobby4>
        <S.SectionHobby5>
          <Typography variant="h4">{t("hobby.guitare")}</Typography>
        </S.SectionHobby5>
      </S.Hobby>
    </S.MainContainer>
  );
};

export default Resume;
