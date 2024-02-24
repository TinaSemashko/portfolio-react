import * as S from "./pageVideo.styled";

interface VideoComponentProps {
  videoSrc: string;
}

const VideoProjects: React.FC<VideoComponentProps> = ({ videoSrc }) => {
  return (
    <S.MainContainer>
      <S.VideoProjects src={videoSrc} autoPlay loop muted />
    </S.MainContainer>
  );
};

export default VideoProjects;
