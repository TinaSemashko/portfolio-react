import React from "react";
import { Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import * as S from "./langButton.styled";

const languages: string[] = ["en", "fr", "uk"];
const langAlias: string[] = ["Eng", "Fr", "Ukr"];

type Props = {
  colorPrime: boolean;
};

export const LangButton: React.FC<Props> = ({ colorPrime }) => {
  const { i18n } = useTranslation();
  const changeCurrentLanguage = (language: string): void => {
    i18n.changeLanguage(language).catch((error) => {
      if (error instanceof Error) {
        /* eslint-disable no-console */
        console.log(error.message);
        /* eslint-enable no-console */
      }
    });
  };
  return (
    <Button
      variant="text"
      sx={{
        width: "fit-content",
        paddingLeft: "0px",
        paddingRight: "0px",
      }}
    >
      <Typography variant="h6" color={colorPrime ? "secondary" : "primary"}>
        <S.List colorPrime={colorPrime}>
          {languages.map((item, index) => (
            <li key={index}>
              <S.LanguageButton
                selected={i18n.language === item}
                onClick={() => changeCurrentLanguage(item)}
              >
                {langAlias[index]}
              </S.LanguageButton>
            </li>
          ))}
        </S.List>
      </Typography>
    </Button>
  );
};

export default LangButton;
