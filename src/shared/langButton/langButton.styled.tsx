import { styled } from "@mui/material/styles";

export const List = styled("span")<{ colorPrime: boolean }>`
  li:not(:first-of-type) ::before {
    content: "/";
    padding: 5px;
    padding-bottom: 4px;

    color: ${({ theme, colorPrime }) =>
      colorPrime ? theme.palette.primary.main : theme.palette.secondary.main};
  }
  text-align: left;
  padding: 0;
  margin: 0;
  margin-bottom: 20%;
  li {
    list-style-type: none;
    display: inline-block;
    text-transform: "uppercase";
    &:not(:first-of-type) {
      padding-left: 5px;
    }
    &:first-of-type ::after {
      padding-left: 5px;
    }
  }
`;

export const LanguageButton = styled("span")<{ selected: boolean }>`
  color: ${({ selected, theme }) =>
    selected ? theme.palette.colorRed.main : "inherit"};
  &:hover {
    color: ${({ theme }) => theme.palette.colorRed.main};
  }
`;
