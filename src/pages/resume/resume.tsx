import { useTranslation } from "react-i18next";
import Avatar from "../../images/avatar.jpg";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Social from "../../shared/socialLinks";
import parse from "html-react-parser";
import {
  arrayExperiences,
  arrayEducations,
  arrayCompetences,
  arrayResume,
  arrayCourses,
} from "./dataCV";

import * as S from "./resume.styled";

const Resume: React.FC = () => {
  const { t } = useTranslation();

  // const onButtonClick = () => {
  //   // using Java Script method to get PDF file
  //   fetch("SamplePDF.pdf").then((response) => {
  //     response.blob().then((blob) => {
  //       // Creating new object of PDF file
  //       const fileURL = window.URL.createObjectURL(blob);

  //       // Setting various property values
  //       let alink = document.createElement("a");
  //       alink.href = fileURL;
  //       alink.download = "SamplePDF.pdf";
  //       alink.click();
  //     });
  //   });
  // };

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
            <a href="../../images/resume.pdf" target="_blank" download>
              <Typography
                variant="h6"
                textAlign="center"
                sx={{ zIndex: "100", position: "relative", color: "#daa06d " }}
              >
                {t("resume.download")}
              </Typography>
            </a>
          </S.ButtonCV>
          <S.TextBox>
            {arrayResume.map((item) => (
              <Typography variant="h6">
                <li>{t(`resume.${item}`)}</li>
              </Typography>
            ))}
          </S.TextBox>
        </S.ResumeContainer>
      </S.MainGridContainer>
      <Divider />
      <S.GridInformationContainer>
        <S.Line>
          <Social />
        </S.Line>
        <S.Experience>
          <S.ExpTitle>
            <Typography variant="h3">{t("resume.experience")}</Typography>
          </S.ExpTitle>
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
          {arrayExperiences.map((item) => (
            <S.ExpMain>
              <S.SectionDates>
                <Typography variant="h5" fontWeight="900">
                  {t(item.dateEx)}
                </Typography>
                <br />
                <Typography variant="h4">{t(item.post)}</Typography>
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
                <Typography variant="h4">{t(item.nameOrg)}</Typography>
                <br />
                <Typography variant="h6">{parse(t(item.exp))}</Typography>
              </S.SectionOrganisation>
            </S.ExpMain>
          ))}
        </S.Experience>
      </S.GridInformationContainer>
      <S.Empty />
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
      <S.GridInformationContainer>
        <S.Experience>
          <S.ExpTitle>
            <Typography variant="h3">{t("resume.education")}</Typography>
          </S.ExpTitle>
          {arrayEducations.map((item) => (
            <S.EducMain>
              <S.SectionDates>
                <Typography variant="h5" fontWeight="900">
                  {t(item.dataEd)}
                </Typography>
                <br />
                <Typography variant="h4">{t(item.nameOrg)}</Typography>
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
                <Typography variant="h4">{t(item.nameEd)}</Typography>
              </S.SectionOrganisation>
            </S.EducMain>
          ))}
          <S.CoursesTitle>
            <Typography variant="h3">{t("education.courses")}</Typography>
          </S.CoursesTitle>
          <S.Courses>
            {arrayCourses.map((item) => (
              <Typography variant="h4">
                <li>{t(`education.${item}`)}</li>
              </Typography>
            ))}
          </S.Courses>
        </S.Experience>
      </S.GridInformationContainer>
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
