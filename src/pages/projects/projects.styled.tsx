import { styled } from "@mui/material/styles";
import img from "../../images/fon_projects1.jpg";

export const MainContainer = styled("div")`
  text-align: center;
  padding-top: 10vh;
  min-height: 100vh;
  background: url(${img}) no-repeat;
  background-size: cover;
  margin-bottom: 40vh;

  @media (max-width: 1200px) {
    margin-bottom: 30vh;
  }

  @media (max-width: 960px) {
    margin-bottom: 20vh;
  }
`;

export const CarouselContainer = styled("div")`
  padding-top: 10vh;
`;
