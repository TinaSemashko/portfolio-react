import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import img from "../../images/fonCV.jpg";

export const MainContainer = styled("div")`
  padding-top: 10vh;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;

  @media (max-width: 1200px) {
    padding-top: 6vh;
  }
`;

export const BackgroundMain = styled("div")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: solid;
  box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b,
    inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;
`;

export const MainGridContainer = styled(BackgroundMain)`
  width: 50%;
  padding-top: 4vh;
  padding-bottom: 4vh;
  padding-left: 4vw;
  padding-right: 4vw;

  @media (max-width: 1200px) {
    width: 95%;
  }
`;

export const ResumeContainer = styled("div")`
  width: 100%;
  display: grid;
  grid-template-columns: 25% 60% 15%;
  grid-gap: 1%;
  align-items: center;
  justify-items: center;

  @media (max-width: 1200px) {
  }
`;

export const PhotoBox = styled("div")`
  grid-column: 1;
  grid-row: 1 / span 2;
  text-align: center;
`;

export const Photo = styled("img")`
  width: 15vw;
  padding: 0.5rem;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

  @media (max-width: 1200px) {
    width: 20vw;
  }
`;

export const Title = styled("div")`
  grid-column: 2;
  grid-row: 1;
  padding-left: 6vh;

  @media (max-width: 1200px) {
    padding-left: 0;
    grid-column: 2 / span 2;
  }
`;

export const ButtonCV = styled(Button)`
  grid-column: 3;
  grid-row: 1;

  &:hover::before {
    transform: scaleX(1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: linear-gradient(82.3deg, #05174b 10.8%, #0ca5e7 94.3%);
    transition: all 0.475s;
  }

  outline: none;
  color: #daa06d;
  padding: 1em;
  padding-left: 3em;
  padding-right: 3em;
  border: 2px dashed #daa06d;
  border-radius: 15px;
  background-color: #eaddca;
  box-shadow: 0 0 0 4px #eaddca, 2px 2px 4px 2px rgba(0, 0, 0, 0.5);
  transition: 0.1s ease-in-out, 0.4s color;

  &:active {
    transform: translateX(0.1em) translateY(0.1em);
    box-shadow: 0 0 0 4px #eaddca, 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0.5);
  }

  &.MuiButton-root {
    width: 7vw;
    height: 8vh;
    border-radius: 10px;

    @media (max-width: 1200px) {
      width: 2vw;
      height: 3vh;
    }
  }

  @media (max-width: 1200px) {
    grid-column: 2;
    grid-row: 2;
  }
`;

export const TextBox = styled("div")`
  grid-column: 2 / span 2;
  grid-row: 2;
  padding-left: 10vh;

  @media (max-width: 1200px) {
    grid-column: 1 / span 3;
    padding-left: 2vh;
    grid-row: 3;
  }
`;

export const FlexInformationContainer = styled(BackgroundMain)`
  grid-column: 2 / span 2;
  grid-row: 3;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    width: 95%;
  }
`;

export const Line = styled(BackgroundMain)`
  width: 62.5%;
  height: 10vh;
  background-color: #05174b;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Empty = styled("div")`
  width: 100%;
  height: 5vh;
`;

export const ExperienceCommon = styled("div")`
  padding-top: 5vh;
  padding-bottom: 10vh;
  padding-right: 4vw;
  text-align: center;
  width: 100%;

  @media (max-width: 1200px) {
    padding-right: 2vw;
    padding-left: 2vw;
    padding-bottom: 2vh;
  }
`;

export const Experience = styled(ExperienceCommon)`
  grid-column: 2;
  grid-row: 1;

  @media (max-width: 1200px) {
    grid-column: 1;
  }
`;

export const Education = styled(ExperienceCommon)`
  grid-column: 1;
  grid-row: 1;
`;

export const GridExpCompetences = styled("div")`
  display: grid;
  grid-template-columns: 30% 70%;
  grid-template-rows: 100%;
  justify-items: center;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 100%;
  }
`;

export const GridEducLangueges = styled("div")`
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: 100%;
  }
`;

export const SectionAdditional = styled(BackgroundMain)`
  text-align: left;
  padding-left: 2vw;
  padding-right: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  white-space: normal;
`;

export const SectionCompetances = styled(SectionAdditional)`
  margin-top: 6vh;
  margin-left: -6vh;
  padding-top: 2vw;
  padding-bottom: 2vw;
  grid-column: 1;
  grid-row: 1;
  height: 74vh;

  @media (max-width: 1200px) {
    width: 95%;
    margin-left: 0;
    margin-top: 0;
    padding-left: 10vw;
    height: 50vh;
    padding-top: 2vh;
    padding-bottom: 2vw;
  }

  @media (max-width: 760px) {
    height: 36vh;
  }
`;

export const SectionLangueges = styled(SectionAdditional)`
  height: 27vh;
  min-width: 20vw;
  padding-bottom: 2vh;
  padding-top: 2vh;
  margin-top: 40vh;

  grid-column: 2;
  grid-row: 1;

  @media (max-width: 1200px) {
    grid-column: 1;
    margin-top: 0;
    width: 95%;
    height: 20vh;
    padding-left: 10vw;
  }
`;

export const ExpTitle = styled("div")`
  padding-bottom: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #0ca5e7;
  text-shadow: 1px 1px 0 #05174b, 1px -1px 0 #05174b, -1px 1px 0 #05174b,
    -1px -1px 0 #05174b;

  grid-column: 1 / span 3;
  grid-row: 1;

  @media (max-width: 1200px) {
    margin-left: -8vw;
  }
`;

export const ExpMain = styled("div")`
  display: grid;
  grid-template-columns: 45% 10% 45%;
  align-items: center;
  width: 100%;

  grid-column: 1 / span 2;
`;

export const EducMain = styled(ExpMain)`
  grid-column: 1 / span 3;
`;

export const SectionDates = styled("div")`
  grid-column: 1;
  text-align: right;

  @media (max-width: 1200px) {
    margin-left: 2vw;
  }
`;

export const SectionPoint = styled("div")`
  grid-column: 2;
  height: 30vh;
  margin-top: -2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    height: 12vh;
    margin-top: 0;
  }
`;

export const SectionOrganisation = styled("div")`
  grid-column: 3;
  text-align: left;
  white-space: pre-line;
`;

export const CoursesTitle = styled("div")`
  margin-top: 8vh;
  grid-column: 1 / span 3;
  text-align: center;
  color: #0ca5e7;
`;

export const Courses = styled("ul")`
  grid-column: 1 / span 3;
  text-align: left;
  padding-left: 10vw;
`;

export const Hobby = styled("div")`
  min-height: 30vh;
  width: 80%;
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  align-items: center;
  justify-items: center;
  text-align: center;
  grid-gap: 5%;
  padding-bottom: 10vh;
  padding-right: 8vw;
`;

export const SectionHobby = styled("div")`
  background-color: #05174baf;
  width: 40vh;
  padding-top: 1vh;
  padding-bottom: 1vh;
  color: #ff9a01;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: -1px -5px 15px #41465b, 5px 5px 15px #41465b,
    inset 5px 5px 10px #212121, inset -5px -5px 10px #212121;

  @keyframes floatAnimation {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

export const TitleHobby = styled(SectionHobby)`
  grid-row: 1;
  grid-column: 1 / span 4;

  animation: floatAnimation 5s infinite;
`;

export const SectionHobby1 = styled(SectionHobby)`
  grid-row: 2;
  grid-column: 1;
  animation: floatAnimation 2s infinite;
`;
export const SectionHobby2 = styled(SectionHobby)`
  grid-row: 3;
  grid-column: 2;
  animation: floatAnimation 4.2s infinite;
`;
export const SectionHobby3 = styled(SectionHobby)`
  grid-row: 4;
  grid-column: 3;
  animation: floatAnimation 4s infinite;
`;
export const SectionHobby4 = styled(SectionHobby)`
  grid-row: 5;
  grid-column: 4;
  animation: floatAnimation 3.5s infinite;
`;

export const SectionHobby5 = styled(SectionHobby)`
  grid-row: 6;
  grid-column: 2;
  animation: floatAnimation 4.7s infinite;
`;
