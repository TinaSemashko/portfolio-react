import CanvasSpriteAnimator from "../../../shared/canvasSpriteAnimator/canvasSpriteAnimator";
import img from "../../../images/spritesheet.png";

import * as S from "./walkingCat.styled";

const WalkingCat: React.FC = () => {
  return (
    <S.MainContainer>
      <CanvasSpriteAnimator
        spriteSheet={img} // Путь к вашему листу спрайтов
        frameCount={8} // Количество кадров в анимации 8
        frameWidth={175} // Ширина одного кадра 175
        frameHeight={150} // Высота одного кадра
        fps={4} // Частота кадров в секунду
        speed={6} // Скорость движения кота
      />
    </S.MainContainer>
  );
};

export default WalkingCat;
