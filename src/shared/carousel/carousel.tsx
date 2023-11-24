import { useState } from "react";
import * as S from "./carousel.styled";
import { Typography } from "@mui/material";

type ImageMap = {
  degY: number;
  src: any;
  alt: string;
};

let imagePathes: string[] = [
  "Ardoises.jpg",
  "Bardage.jpg",
  "Charpente.jpg",
  "Cuivre.jpg",
  "Inox.jpg",
  "Plomb.jpg",
  "Tuiles.jpg",
  "Isolation.jpg",
  "Zinc.jpg",
  // "img1.png",
  // "diamond.png",
  // "img3.png",
  // "ekea.png",
  // "img5.png",
  // "teamChallnge.png",
  // "img7.png",
  // "img8.png",
  // "img9.png",
];

const SLIDES_QUANTITY = imagePathes.length;
const degKey = 360 / SLIDES_QUANTITY;
const radius = 28;
const CELLSIZE = Math.round(2 * radius * Math.tan(Math.PI / SLIDES_QUANTITY));

let descriptions = [
  "Ardoises",
  "Bardage",
  "Charpente",
  "Cuivre",
  "Inox",
  "Plomb",
  "Tuiles",
  "Isolation",
  "Zinc",
  // "test",
  // "test",
  // "test",
  // "test",
  // "test",
  // "test",
  // "test",
  // "test",
  // "test",
  // "test",
];

let imageMap: ImageMap[] = [];

const sortCarousel = (numberFirstEl: string) => {
  let indexEOnChange =
    parseInt(numberFirstEl) >= SLIDES_QUANTITY
      ? parseInt(numberFirstEl) - SLIDES_QUANTITY
      : parseInt(numberFirstEl);

  let tempStart = imagePathes.slice(0, indexEOnChange);
  let tempEnd = imagePathes.slice(indexEOnChange);
  imagePathes = tempEnd.concat(tempStart);
  tempStart = descriptions.slice(0, indexEOnChange);
  tempEnd = descriptions.slice(indexEOnChange);
  descriptions = tempEnd.concat(tempStart);

  const images: string[] = [];

  imagePathes.map((el) => images.push(require(`../../images/${el}`)));

  imageMap = [];
  for (let i = 0; i < SLIDES_QUANTITY; i++) {
    imageMap.push({
      degY: i * degKey,
      src: images[i],
      alt: `Image ${i + 1}`,
    });
  }
};

sortCarousel("0");

const Carousel: React.FC = () => {
  const [animationPause, setAnimationPause] = useState(false);
  const [indexState, setIndexState] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnimationPause((prev) => !prev);
    let indexElForChange = indexState;

    if (!animationPause) {
      indexElForChange = (event.target as HTMLTextAreaElement).id;
      setIndexState(indexElForChange);
      sortCarousel(indexElForChange);
    }
  };

  return (
    <S.MainContainer carouselWith={CELLSIZE}>
      <S.CarouselContainer isAnimationPaused={animationPause}>
        {imageMap.map((item, index) => (
          <S.Slide
            key={index}
            degY={item.degY}
            radius={radius}
            carouselWith={CELLSIZE}
          >
            <S.Picture
              carouselWith={CELLSIZE}
              src={item.src}
              alt={item.alt}
              id={index.toString()}
              onClick={handleClick}
            />
            <S.ButtonMore>
              <Typography variant="h6" textAlign="left">
                Consulter
              </Typography>
            </S.ButtonMore>
            <S.BorderRight
              carouselWith={CELLSIZE}
              id={index.toString()}
              onClick={handleClick}
            />
            <S.BorderLeft id={index.toString()} onClick={handleClick} />
            <S.TextContainer>
              <Typography variant="h3" textAlign="left">
                {descriptions[index]}
              </Typography>
            </S.TextContainer>
          </S.Slide>
        ))}
      </S.CarouselContainer>
    </S.MainContainer>
  );
};

export default Carousel;
