import { styled } from "@mui/material/styles";
import img from "../../images/fon_footer.jpg";
import { Button } from "@mui/material";

export const MainContainer = styled("div")<{ isParallax: boolean }>`
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
