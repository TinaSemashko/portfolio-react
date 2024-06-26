import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import * as S from './social.styled';

const Social: React.FC = () => {
  return (
    <S.SocialLinks>
      <IconButton href="https://github.com/TinaSemashko" target="_blank" rel="noopener">
        <GitHubIcon color="primary" />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/tina-semashko/" target="_blank" rel="noopener">
        <LinkedInIcon color="primary" />
      </IconButton>
      <IconButton href="https://www.facebook.com/akateria/" target="_blank" rel="noopener">
        <FacebookIcon color="primary" />
      </IconButton>
    </S.SocialLinks>
  );
};

export default Social;
