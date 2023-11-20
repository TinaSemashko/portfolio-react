import img1 from "../../images/glass-ball.png";

import * as S from "./carousel.styled";

const Carousel: React.FC = () => {
  return (
    <S.MainContainer>
      <S.CarouselContainer>
        <S.Slide degY={0}>
          <S.Picture src={img1} alt="img1" />
        </S.Slide>
        <S.Slide degY={40}>
          <S.Picture src={img1} alt="img1" />
        </S.Slide>
        <S.Slide degY={80}>
          <S.Picture src={img1} alt="img1" />
        </S.Slide>
        <S.Slide degY={120}>
          <S.Picture src={img1} alt="img1" />
        </S.Slide>
        <S.Slide degY={160}>
          <S.Picture src={img1} alt="img1" />
        </S.Slide>
        <S.Slide degY={200}>
          <S.Picture src={img1} alt="img1" />
        </S.Slide>
        <S.Slide degY={240}>
          <S.Picture src={img1} alt="img1" />
        </S.Slide>
        <S.Slide degY={280}>
          <S.Picture src={img1} alt="img1" />
        </S.Slide>
        <S.Slide degY={320}>
          <S.Picture src={img1} alt="img1" />
        </S.Slide>
      </S.CarouselContainer>
    </S.MainContainer>
  );
};

export default Carousel;
