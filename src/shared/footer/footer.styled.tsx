import { styled } from "@mui/material/styles";
import img from "../../images/fon_footer.jpg";
import fon_projects from "../../images/fon_projects_footer.jpg";
import { Button } from "@mui/material";

export const MainContainer = styled("div")`
  /* width: 100%;
  min-height: 15vh;
  overflow-x: hidden;
  text-align: center;
  background: url(${img}) no-repeat;
  background-size: cover;
  position: relative; */

  /* background-color: transparent; */

  /* background-color: black; */
  /* color: ${({ theme }) => theme.palette.primary.main}; */
  /* height: 200vh; */
  /* position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  /* background-attachment: fixed; 

  height: 200px;
  background: hsla(0, 0%, 100%, 0.5);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 70 500 60' preserveAspectRatio='none'%3E%3Crect x='0' y='0' width='500' height='500' style='stroke: none; fill: %237FDBFF;' /%3E%3Cpath d='M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z' style='stroke: none; fill: %230074D9;'%3E%3C/path%3E%3C/svg%3E");
  background-size: 100% 100%; */
`;

export const DesignedFuter = styled("div")`
  background-image: url(${fon_projects});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Devider = styled("div")`
  /* position: absolute;
  bottom: 0;
  left: 0; */
  width: 100%;
  overflow: hidden;
  line-height: 0;
`;

export const Svg = styled("svg")`
  position: relative;
  display: block;
  width: calc(167% + 1.3px);
  height: 236px;
`;

export const Path = styled("path")`
  fill: #dedcdc;
`;

// export const VideoFooter = styled("video")
//   width: 20vw;

//   @media (max-width: 750px) {
//     width: 10vw;
//   }
// `;

export const ContactContainer = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: transparent;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const FixedFooter = styled("div")<{ isParallax: boolean }>`
  position: ${({ isParallax }) => (isParallax ? "fixed" : "inherit")};
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.palette.colorBlack.main};
  color: #00f7ff;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const WorkInquiryBox = styled("div")`
  margin-top: 2vh;
  width: 60%;
  background: #ffe4c42a;
  padding: 3vh;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
`;

export const SocialLinks = styled("div")`
  display: flex;
`;

export const ButtonWork = styled(Button)`
  border: 4px solid;
  border-image: linear-gradient(45deg, black, rgb(224, 220, 220)) 1;
`;

export const FlexBox = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-left: 4vw;
  padding-right: 8vw;
  width: 100%;
  height: 4vh;
`;
