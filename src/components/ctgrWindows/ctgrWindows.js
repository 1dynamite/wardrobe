import { css } from "@emotion/react";
import { useState } from "react";
import CtgryItem from "../ctgryItem/ctgryItem";
import window1 from "../../../assets/window1.jpg";

const VP_IMAGE_HEIGHT = 480;

function CtgrWindows({ theme, ...props }) {
  const [currentVpImg, setCurrentVpImg] = useState(window1);
  const [vpImgPosition, setVpImgPosition] = useState(0);
  const [vpImageDisplay, setVpImageDisplay] = useState("none");
  const [vpImgPositionRight, setVpImgPositionRight] = useState(undefined);

  const windowsRoot = (theme) =>
    css({
      width: "70%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      boxShadow: theme.shadows[3],
    });

  const windowsStyles = (theme) =>
    css({
      display: "flex",
      padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
      width: "100%",
      gap: theme.spacing(2),
      backgroundColor: "rgba(0,0,0,0.1)",
      borderTop: `5px solid ${theme.palette.text.secondary}`,
      overflow: "auto",
    });

  const imgStyles = (theme) =>
    css({
      borderRadius: theme.shape.borderRadius,
      border: `2px solid ${theme.palette.primary.main}`,

      width: 80,
      height: 100,
      objectFit: "cover",
    });

  const vpImageRoot = (theme) =>
    css({
      position: "absolute",
      left: vpImgPosition,
      right: vpImgPositionRight,
      display: vpImageDisplay,
    });

  const vpImageStyles = (theme) => css({});

  const onMouseOver = (src) => {
    return (e) => {
      setCurrentVpImg(src);
      const vpOffset = e.target.getBoundingClientRect();
      const docWidth = document.documentElement.clientWidth;

      if (vpOffset.right > docWidth / 2) {
        setVpImgPosition(undefined);
        setVpImgPositionRight(docWidth - vpOffset.left + 10);
      } else {
        setVpImgPositionRight(undefined);
        setVpImgPosition(vpOffset.right + 10);
      }

      setVpImageDisplay("block");
    };
  };

  const onMouseOut = (e) => {
    setVpImageDisplay("none");
  };

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div css={windowsRoot}>
        <CtgryItem theme={theme} {...props.ctgrItem} />
        <div css={windowsStyles}>
          {props.windows.map((value, index) => (
            <img
              onMouseOver={onMouseOver(value)}
              onMouseOut={onMouseOut}
              key={index}
              src={value}
              css={imgStyles}
            />
          ))}
        </div>
        <div css={vpImageRoot}>
          <img
            css={vpImageStyles}
            src={currentVpImg}
            height={VP_IMAGE_HEIGHT}
          />
        </div>
      </div>
    </div>
  );
}

export default CtgrWindows;
