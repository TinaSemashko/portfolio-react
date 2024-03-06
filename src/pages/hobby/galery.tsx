import { useMediaQuery } from "@mui/material";
import { theme } from "../../app/app";

import * as S from "./galery.styled";

const photodata: string[] = [
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
  "img15.jpg",
  "img16.jpg",
  "img17.jpg",
  "img18.jpg",
  "img19.jpg",
  "img20.jpg",
  "img21.jpg",
  "img22.jpg",
  "img1.jpg",
  "img2.jpg",
];

const Galery: React.FC = () => {
  const matchDownSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <S.MainContainer>
      <S.StyledImageList
        variant="masonry"
        cols={matchDownSm ? 1 : matchDownMd ? 2 : 3}
        gap={8}
      >
        {photodata.map((item, index) => (
          <S.StyleImageListItem key={index}>
            <img
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${require(`../../images/Hobby/Leather/${item}`)}?w=164&h=164&fit=crop&auto=format`}
              loading="lazy"
            />
            <S.TopLeftCorner className="top-left" />
            <S.TopRightCorner className="top-right" />
            <S.BottomLeftCorner className="bottom-left" />
            <S.BottomRightCorner className="bottom-right" />
          </S.StyleImageListItem>
        ))}
      </S.StyledImageList>
    </S.MainContainer>
  );
};

export default Galery;
