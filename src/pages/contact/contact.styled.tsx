import { styled } from "@mui/material/styles";
import img1 from "../../images/web-dev.png";
import img2 from "../../images/robot.png";
import img3 from "../../images/robot2.png";
import { Button } from "@mui/material";

export const MainContainer = styled("div")`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CardContainer = styled("div")`
  min-height: 30vh;
  width: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20vh;
  border-radius: 4px;
  border-color: rgb(4, 45, 94);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Card1 = styled(CardContainer)`
  top: 20vh;
  left: 50vw;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border: 4px solid;
`;

export const Card2 = styled(CardContainer)`
  left: 65vw;
  background-image: url(${img1});
  background-repeat: no-repeat;
  background-size: contain;
  border-top: 4px solid;
`;

export const Card3 = styled(CardContainer)`
  left: 80vw;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border: 4px solid;
`;

export const Card4 = styled(CardContainer)`
  top: 50vh;
  left: 50vw;
  background-image: url(${img3});
  background-repeat: no-repeat;
  background-size: contain;
  background-color: rgb(89, 134, 188);
  border-left: 4px solid;
  border-bottom: 4px solid;
`;

export const Card5 = styled(CardContainer)`
  top: 50vh;
  left: 65vw;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border: 4px solid;
`;

export const Card6 = styled(CardContainer)`
  top: 50vh;
  left: 80vw;
  background-image: url(${img2});
  background-repeat: no-repeat;
  background-size: contain;
  border-right: 4px solid;
  border-bottom: 4px solid;
`;

export const LeftContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 55%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const RightContainer = styled("div")`
  background-color: rgb(89, 134, 188);
  width: 45%;
  min-height: 100vh;
`;

export const StyledBox = styled("form")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2vh;
  width: 100%;
`;

export const InputContainer = styled("input")`
  margin-bottom: 2vh;
  width: 50%;
  height: 4vh;
  border: 4px solid;
  border-radius: 4px;
  border-color: rgb(4, 45, 94);
`;

export const BtnSubmit = styled(Button)`
  padding: 20px 30px;
  margin: 20px;
  text-decoration: none;
  background-color: rgb(89, 134, 188);
  border: 4px solid;
  border-radius: 4px;
  border-color: rgb(4, 45, 94);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
  color: white;

  &:hover {
    background: linear-gradient(315deg, rgb(4, 45, 94), rgb(89, 134, 188));
    color: ${({ theme }) => theme.palette.colorRed.main};
  }
`;
