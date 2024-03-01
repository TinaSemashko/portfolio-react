import { useTranslation } from "react-i18next";
import Avatar from "../../images/avatar.jpg";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Social from "../../shared/socialLinks";
import parse from "html-react-parser";

import * as S from "./resume.styled";

interface Experience {
  dateEx: string;
  post: string;
  nameOrg: string;
  exp: string;
}

interface Education {
  dataEd: string;
  nameEd: string;
  nameOrg: string;
}

const Resume: React.FC = () => {
  const { t } = useTranslation();

  const arrayExperiences: Experience[] = [
    {
      dateEx: `${t("experience.dataEx1")}`,
      post: `${t("experience.post1")}`,
      nameOrg: `${t("experience.nameOrg1")}`,
      exp: `${t("experience.exp1")}`,
    },
    {
      dateEx: `${t("experience.dataEx2")}`,
      post: `${t("experience.post2")}`,
      nameOrg: `${t("experience.nameOrg2")}`,
      exp: `${t("experience.exp2")}`,
    },
    {
      dateEx: `${t("experience.dataEx3")}`,
      post: `${t("experience.post3")}`,
      nameOrg: `${t("experience.nameOrg3")}`,
      exp: `${t("experience.exp3")}`,
    },
    {
      dateEx: `${t("experience.dataEx4")}`,
      post: `${t("experience.post4")}`,
      nameOrg: `${t("experience.nameOrg4")}`,
      exp: `${t("experience.exp4")}`,
    },
  ];

  const arrayEducations: Education[] = [
    {
      dataEd: `${t("education.dataEd1")}`,
      nameEd: `${t("education.nameEd1")}`,
      nameOrg: `${t("education.nameOrg1")}`,
    },
    {
      dataEd: `${t("education.dataEd2")}`,
      nameEd: `${t("education.nameEd2")}`,
      nameOrg: `${t("education.nameOrg2")}`,
    },
    {
      dataEd: `${t("education.dataEd3")}`,
      nameEd: `${t("education.nameEd3")}`,
      nameOrg: `${t("education.nameOrg3")}`,
    },
  ];

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("SamplePDF.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "SamplePDF.pdf";
        alink.click();
      });
    });
  };

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
            {/* <PictureAsPdfIcon sx={{ zIndex: "100", position: "relative" }} /> */}
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
            <Typography variant="h6">
              <li>{t("resume.resume1")}</li>
              <li>{t("resume.resume2")}</li>
              <li>{t("resume.resume3")}</li>
              <li>{t("resume.resume4")}</li>
              <li>{t("resume.resume5")}</li>
              <li>{t("resume.resume6")}</li>
              <li>{t("resume.resume7")}</li>
            </Typography>
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
            <Typography variant="h5" lineHeight="1.7">
              <li>{t("competences.competence1")}</li>
              <li>{t("competences.competence2")}</li>
              <li>{t("competences.competence3")}</li>
              <li>{t("competences.competence4")}</li>
              <li>{t("competences.competence5")}</li>
              <li>{t("competences.competence6")}</li>
              <li>{t("competences.competence7")}</li>
              <li>{t("competences.competence8")}</li>
              <li>{t("competences.competence9")}</li>
              <li>{t("competences.competence10")}</li>
              <li>{t("competences.competence11")}</li>
              <li>{t("competences.competence12")}</li>
              <li>{t("competences.competence13")}</li>
            </Typography>
          </S.SectionCompetances>
          {arrayExperiences.map((item) => (
            <S.ExpMain>
              <S.SectionDates>
                <Typography variant="h5" fontWeight="900">
                  {item.dateEx}
                </Typography>
                <br />
                <Typography variant="h4">{item.post}</Typography>
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
                <Typography variant="h4">{item.nameOrg}</Typography>
                <br />
                <Typography variant="h6">{parse(item.exp)}</Typography>
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
                  {item.dataEd}
                </Typography>
                <br />
                <Typography variant="h4">{item.nameOrg}</Typography>
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
                <Typography variant="h4">{item.nameEd}</Typography>
              </S.SectionOrganisation>
            </S.EducMain>
          ))}
          <S.CoursesTitle>
            <Typography variant="h3">{t("education.courses")}</Typography>
          </S.CoursesTitle>
          <S.Courses>
            <Typography variant="h4">
              <li>{t("education.cours1")}</li>
              <li>{t("education.cours2")}</li>
              <li>{t("education.cours3")}</li>
              <li>{t("education.cours4")}</li>
              <li>{t("education.cours5")}</li>
              <li>{t("education.cours6")}</li>
            </Typography>
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
