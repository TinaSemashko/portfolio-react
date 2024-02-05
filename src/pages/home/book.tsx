import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import img from "../../images/bible-christliche.png";

import * as S from "../home/book.styled";
import { useEffect, useState } from "react";

const Book: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    setOpen(!open);
    const itemCard = document.querySelector(`#card`);
    const itemImg = document.querySelector(`.imgBox`);
    if (open) {
      (itemImg as HTMLTextAreaElement)?.animate(
        [{ transform: "rotateY(0deg) " }],
        {
          duration: 2000,
          easing: "ease",
          fill: "forwards",
        }
      );

      (itemCard as HTMLTextAreaElement)?.animate(
        [
          {
            transform: " rotateX(50deg) skewX(20deg) translate(-50px, -400px)",
          },
        ],
        {
          duration: 4000,
          easing: "ease",
          fill: "forwards",
        }
      );
      setTimeout(() => {
        (itemImg as HTMLTextAreaElement)?.setAttribute(
          "style",
          "box-shadow:  rgba(221, 150, 70, 0.5) -5px 5px, rgba(221, 150, 70, 0.4) -10px 10px, rgba(221, 150, 70, 0.4) -15px 15px,   rgba(221, 150, 70, 0.3) -20px 20px, rgba(221, 150, 70, 0.3) -25px 25px,    rgba(221, 150, 70, 0.2) -30px 30px, rgba(221, 150, 70, 0.2) -35px 35px,    rgba(221, 150, 70, 0.1) -40px 40px, rgba(221, 150, 70, 0.1) -45px 45px, rgba(221, 150, 70, 0.05) -50px 50px, rgba(221, 150, 70, 0.05) -55px 55px"
        );
      }, 1500);
    } else {
      (itemImg as HTMLTextAreaElement)?.setAttribute(
        "style",
        "box-shadow:none"
      );
      (itemCard as HTMLTextAreaElement)?.animate(
        [
          {
            transform: " translate(-50px, -300px) rotateX(50deg) skewX(20deg)",
          },
          {
            transform:
              "perspective(10000px) rotateX(0) scale(2) translate(30px, -150px)",
          },
        ],
        {
          duration: 8000,
          easing: "ease",
          fill: "forwards",
          delay: 2000,
        }
      );

      (itemImg as HTMLTextAreaElement)?.animate(
        [{ transform: "rotateY(-180deg) " }],
        {
          duration: 1500,
          easing: "ease",
          fill: "forwards",
        }
      );
    }
  };

  return (
    <S.MainContainer>
      <S.CardContainer id="card" className="card" onClick={handleClick}>
        <S.ImgContainer className="imgBox">
          <S.ImgVert src={img} alt="" />
        </S.ImgContainer>
        <S.TextContainer>
          <Typography variant="body2" lineHeight="1.1">
            {t("main.bible")}
          </Typography>
        </S.TextContainer>
      </S.CardContainer>
    </S.MainContainer>
  );
};

export default Book;
