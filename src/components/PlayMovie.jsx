import React, { useEffect } from 'react';

const VideoPlayer = () => {
  useEffect(() => {
    // Check if Fluid Player is available
    if (window.fluidPlayer) {
      window.fluidPlayer('video-id', {
        layoutControls: {
          controlBar: {
            autoHideTimeout: 3,
            animated: true,
            autoHide: true,
          },
          htmlOnPauseBlock: {
            html: null,
            height: null,
            width: null,
          },
          autoPlay: true,
          mute: true,
          allowTheatre: true,
          playPauseAnimation: false,
          playbackRateEnabled: false,
          allowDownload: false,
          playButtonShowing: false,
          fillToContainer: false,
          posterImage: "",
        },
        vastOptions: {
          adList: [
            {
              roll: "preRoll",
              vastTag: "https://servedby.revive-adserver.net/fc.php?script=apVideo:vast2&zoneid=20402",
              adText: "",
              
            },
            {
              roll: "midRoll",
              vastTag: "https://servedby.revive-adserver.net/fc.php?script=apVideo:vast2&zoneid=21294",
              adText: "",
              offset: "00:01:00"
            },
            {
              roll: "postRoll",
              vastTag: "",
              adText: ""
            },
            {
              roll: "onPauseRoll",
              vastTag: "",
              adText: ""
            }
          ],
          adCTAText: false,
          adCTATextPosition: "",
        },
      });
    }
  }, []);

  return (
    <div>
      <video id="video-id">
        <source src='https://res.cloudinary.com/donhrlmxp/video/upload/v1723887134/aesk9cz6h3bp50m2meu0.mp4' type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
