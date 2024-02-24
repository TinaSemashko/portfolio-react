// import ImgContact from '../../images/logofooter.mp4';
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Typography } from "@mui/material";
import LangButton from "../langButton";

import * as S from "./footer.styled";

const Home: React.FC = () => {
  return (
    <S.MainContainer>
      {/* <S.ContactContainer>
        {/* <S.VideoFooter src={ImgContact} autoPlay loop muted /> 
      </S.ContactContainer> */}

      {/* <LangButton colorPrime={false} iconWithoutSlash={true} /> */}

      <Typography variant="h4" textAlign="center">
        © 2023 Akateria Web Studio. Tous Droits Réservés.
      </Typography>
    </S.MainContainer>
  );
};

export default Home;
