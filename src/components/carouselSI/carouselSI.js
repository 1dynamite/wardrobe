import { useEffect, useState } from "react";
import { css, jsx } from "@emotion/react";
import headBg from "../../../assets/carousel-item1.jpg";
import headBg2 from "../../../assets/carousel-item2.jpg";
import headBg3 from "../../../assets/carousel-item3.jpg";
import { Typography } from "@mui/material";

const bgImages = [headBg, headBg2, headBg3];

const bgTexts = [
  "Lorem ipsum dolor sit 1",
  "Lorem ipsum dolor sit 2",
  "Lorem ipsum dolor sit 3",
];

let myTimeout;

const containerStyles = css({
  height: "100vh",
  backgroundColor: "black",
});

const imgContainerStylesBase = css({
  height: "100%",
  width: "100%",
  position: "absolute",
  transition: "opacity 0.7s",
  display: "flex",
  alignItems: "center",
  zIndex: "0",
});

const imgStylesBase = css({
  height: "100%",
  width: "100%",
  objectFit: "cover",
  objectPosition: "center",
  position: "absolute",
  opacity: "0.8",
  zIndex: "-1",
});

const opacityUpperBound = "1";

const imgContainerStylesDefault1 = css(
  {
    opacity: "0",
  },
  imgContainerStylesBase
);

const imgContainerStylesDefault2 = css(
  {
    opacity: opacityUpperBound,
  },
  imgContainerStylesBase
);

const headerTypography = css({
  color: "white",
  position: "relative",
  bottom: 100,
  left: 75,
});

const CarouselSI = (props) => {
  const [didMount, setDidMount] = useState(false);

  const [index, setIndex] = useState(0);

  const [imgCOpacity1, setImgCOpacity1] = useState("0");

  const [imgContainerStyles1, setImgContainerStyles1] = useState(
    imgContainerStylesDefault1
  );
  const [imgContainerStyles2, setImgContainerStyles2] = useState(
    imgContainerStylesDefault2
  );

  const [imgSrc1, setImgSrc1] = useState(bgImages[0]);
  const [imgSrc2, setImgSrc2] = useState(bgImages[0]);

  const [imgText1, setImgText1] = useState(bgTexts[0]);
  const [imgText2, setImgText2] = useState(bgTexts[0]);

  useEffect(() => {
    setDidMount(true);
  }, []);

  useEffect(() => {
    const timeoutFunc = () => {
      if (index != bgImages.length - 1) setIndex(index + 1);
      else setIndex(0);
    };

    myTimeout = setTimeout(timeoutFunc, 8000);

    return () => {
      clearTimeout(myTimeout);
    };
  }, [index]);

  useEffect(() => {
    const newImgCOpacity1 =
      imgCOpacity1 === opacityUpperBound ? "0" : opacityUpperBound;

    setImgCOpacity1(newImgCOpacity1);
  }, [index]);

  const switchImgTag = () => {
    const next =
      bgImages.length !== index + 1 ? bgImages[index + 1] : bgImages[0];

    if (imgCOpacity1 === "0") setImgSrc1(next);
    else setImgSrc2(next);

    const nextText =
      bgTexts.length !== index + 1 ? bgTexts[index + 1] : bgTexts[0];

    if (imgCOpacity1 === "0") setImgText1(nextText);
    else setImgText2(nextText);
  };

  useEffect(() => {
    setImgContainerStyles1(
      css(
        {
          opacity: imgCOpacity1,
        },
        imgContainerStylesBase
      )
    );

    setImgContainerStyles2(
      css(
        {
          opacity: imgCOpacity1 === opacityUpperBound ? "0" : opacityUpperBound,
        },
        imgContainerStylesBase
      )
    );
  }, [imgCOpacity1]);

  return (
    <div css={containerStyles}>
      {didMount ? (
        <>
          <div css={imgContainerStyles1} onTransitionEnd={switchImgTag}>
            <img css={imgStylesBase} src={imgSrc1} />
            <Typography css={headerTypography} variant="h2">
              {imgText1}
            </Typography>
          </div>
          <div css={imgContainerStyles2} onTransitionEnd={switchImgTag}>
            <img css={imgStylesBase} src={imgSrc2} />
            <Typography css={headerTypography} variant="h2">
              {imgText2}
            </Typography>
          </div>
          {props.children}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default CarouselSI;
