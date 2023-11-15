import { styled } from '@mui/material/styles';

export const MainContainer = styled('div')`
  text-align: center;
`;

export const VideoFooter = styled('video')`
  width: 20vw;

  @media (max-width: 750px) {
    width: 10vw;
  }
`;

export const ContactContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
