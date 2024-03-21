import { styled } from "@mui/material/styles";
import img from "../../images/fon_footer.jpg";

export const MainContainer = styled("div")`
  text-align: center;
  padding-top: 6vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.colorBlack.main};
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const VideoContainer = styled("div")`
  height: 80vh;
  overflow: hidden;
  border: solid red 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const VideoProjects = styled("video")`
  text-align: center;
  object-fit: contain;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const ButtonsContainer = styled("div")`
  padding: 2rem;
  color: ${({ theme }) => theme.palette.colorRed.main};
  display: flex;
  justify-content: space-evenly;
  align-items: start;
  border-radius: 10px;

  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FlexBox = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 760px) {
    margin-top: 1rem;
  }
`;
