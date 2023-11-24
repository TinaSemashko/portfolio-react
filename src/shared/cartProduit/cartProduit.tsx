import { Typography } from "@mui/material";
import Carousel from "./carousel";
import * as S from "./cartProduit.styled";

const cartProduit: React.FC = () => (
  <S.MainContainer>
    <S.Title>
      <Typography variant="h1" textAlign="left">
        Titre
      </Typography>
    </S.Title>
    <Carousel />
    <S.Description>
      <Typography variant="h2">TOITURE EN ARDOISE</Typography>
      <br />
      <Typography variant="h4">
        Les tuiles d'ardoise sont des revêtements de toiture fabriqués à partir
        de roche métamorphique appelée ardoise. Ces tuiles sont réputées pour
        leur élégance, leur durabilité et leur résistance aux intempéries.
        L'ardoise est extraite de carrières et coupée en fines lamelles pour
        créer des tuiles de formes variées, telles que rectangulaires ou
        losangiques. Ces tuiles offrent une esthétique naturelle et peuvent
        varier en couleur, allant du gris au noir, en passant par des teintes de
        vert et de pourpre. Les tuiles d'ardoise sont appréciées pour leur
        longévité, leur imperméabilité et leur capacité à résister aux UV, en
        faisant un choix populaire pour les toitures haut de gamme.
      </Typography>
    </S.Description>
  </S.MainContainer>
);

export default cartProduit;
