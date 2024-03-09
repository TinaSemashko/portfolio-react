import { useLocation, useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import DescriptionIcon from "@mui/icons-material/Description";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import ReplayCircleFilledIcon from "@mui/icons-material/ReplayCircleFilled";
import VideoAssofactory from "../../images/assofactory.mp4";
import VideoConnectify from "../../images/connevtify.mp4";
import VideoABS from "../../images/abs.mp4";
import VideoSeaLife from "../../images/SEALIFE api.mp4";

import * as S from "./pageVideo.styled";
import { Routes } from "../../app/routes";

const VideoProjects: React.FC = () => {
  const { state } = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [videoSrc, setVideoSrc] = useState();
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (state && state.hasOwnProperty("videoUrl")) {
      if (state.videoUrl.url === "VideoAssofactory")
        setVideoSrc(VideoAssofactory);
      else if (state.videoUrl.url === "VideoConnectify")
        setVideoSrc(VideoConnectify);
      else if (state.videoUrl.url === "VideoSeaLife") setVideoSrc(VideoSeaLife);
      if (state.videoUrl.url === "VideoABS") setVideoSrc(VideoABS);
    }
  }, [state]);

  const handleRestartVideo = (): void => {
    if (videoRef?.current) {
      setVideoEnded(false);
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleVideoEnd = (): void => {
    setVideoEnded(true);
  };

  const openCard = () => {
    navigate(Routes.cartproject, {
      state: { project: state.videoUrl.url },
    });
  };

  return (
    <S.MainContainer>
      <S.VideoProjects
        ref={videoRef}
        src={videoSrc}
        onEnded={handleVideoEnd}
        autoPlay
        muted
      />
      {videoEnded && (
        <S.ButtonsContainer>
          <S.FlexBox>
            <ReplayCircleFilledIcon />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Typography variant="h3" onClick={handleRestartVideo}>
              {t("projects.repeat")}
            </Typography>
          </S.FlexBox>
          <S.FlexBox>
            <DescriptionIcon />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Typography
              variant="h3"
              onClick={() => {
                navigate(Routes.cartproject);
              }}
            >
              {t("projects.description")}
            </Typography>
          </S.FlexBox>
          <S.FlexBox>
            <AssignmentReturnIcon />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Typography
              variant="h3"
              onClick={() => {
                openCard();
              }}
            >
              {t("projects.return")}
            </Typography>
          </S.FlexBox>
        </S.ButtonsContainer>
      )}
    </S.MainContainer>
  );
};

export default VideoProjects;
