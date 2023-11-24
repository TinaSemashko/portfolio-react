import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10vh;
  background-color: #b00101;
`;

export const Title = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vh;
  background-color: #b00101;
  width: 100%;
  color: white;
`;

export const Description = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10vh;
  margin-top: 15vh;
  background-color: black;
  width: 80%;
  color: white;
`;

/////Carousel///////////

export const CarouselContainer = styled("div")`
  margin: 0;
  padding: 0;
  width: 98vw;

  @media (max-width: 750px) {
  }
`;

export const ImgCarouselContainer = styled("div")`
  width: 100vw;
  height: 90vh;
  box-shadow: 14px 14px 14px black;
`;
