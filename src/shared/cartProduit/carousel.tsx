import Slider from "react-slick";
import { createGlobalStyle } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import * as S from "./cartProduit.styled";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

type ImageMap = {
  src: any;
  alt: string;
  discription: string;
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
];
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
];

const SLIDES_QUANTITY = imagePathes.length;
const images: string[] = [];
let imageMap: ImageMap[] = [];
imagePathes.map((el) => images.push(require(`../../images/${el}`)));
console.log(images);
imageMap = [];
for (let i = 0; i < SLIDES_QUANTITY; i++) {
  imageMap.push({
    src: images[i],
    alt: `Image ${i + 1}`,
    discription: descriptions[i],
  });
}

const SampleNextArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "red", right: "55px" }}
      onClick={onClick}
    >
      <ArrowForwardIosIcon sx={{ fontSize: 80 }} />
    </div>
  );
};

const SamplePrevArrow = (props: ArrowProps) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        color: "red",
        left: "55px",
        zIndex: "10",
      }}
      onClick={onClick}
    >
      <ArrowBackIosIcon sx={{ fontSize: 80 }} />
    </div>
  );
};

const GlobalStyles = createGlobalStyle`
  .slick-arrow.slick-next:before,
  .slick-arrow.slick-prev:before {
    content: "";
  }
`;

const Carousel: React.FC = () => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img src={images[i]} width="25vw" height="25vh" />
        </a>
      );
    },

    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <S.CarouselContainer>
      <GlobalStyles />
      <Slider {...settings}>
        {imageMap.map((item, index) => (
          <S.ImgCarouselContainer>
            <img src={item.src} alt={item.alt} width="100%" />
          </S.ImgCarouselContainer>
        ))}
      </Slider>
    </S.CarouselContainer>
  );
};

export default Carousel;
