import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  text-align: center;
  padding-top: 6.5vh;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  align-items: center;
  justify-items: center;
`;

export const VideoProjects = styled("video")`
  width: 100vw;
  text-align: center;
  grid-column: 1;
  grid-row: 1;
`;

export const ButtonsContainer = styled("div")`
  grid-column: 1;
  grid-row: 1;
  padding: 2rem;
  color: ${({ theme }) => theme.palette.colorRed.main};
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: start;
`;

export const FlexBox = styled("div")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
