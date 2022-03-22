import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import LinkC from "../linkc/linkc.js";
import Paddingmain from "../paddingmain/paddingmain.js";

const PaddingPaper = ({ setHeight, ...props }) => {
  const innerRef = useRef(null);

  useEffect(() => {
    setHeight(innerRef.current.clientHeight);
  }, [setHeight, innerRef]);

  return <Paper innerRef={innerRef} {...props} component={Paddingmain} />;
};

const VariantS = styled(PaddingPaper)((props) => ({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor:
    props.variantc === "light"
      ? "white"
      : props.variantc === "default"
      ? "rgba(0,0,0,0.1)"
      : props.theme.bgTransparent,
  paddingTop: props.theme.spacing(2),
  paddingBottom: props.theme.spacing(2),
  position: "fixed",
  zIndex: "1",
  top: "0",
  width: "100%",
  transition: props.theme.transitions.create(["background-color", "color"]),
}));

const rightBar = (theme) => ({ display: "flex", gap: theme.spacing(1) });

function Variant({ variant, setHeight, ...props }) {
  return (
    <VariantS
      setHeight={setHeight}
      elevation={0}
      variant={variant === "light" ? "outlined" : "elevation"}
      variantc={variant}
      square
      {...props}
    >
      <div
        css={(theme) => ({
          padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
        })}
      >
        <Typography
          css={(theme) => ({
            color: "rgba(0,0,0,0.6)",
            display: "inline",
            fontSize: "1.3rem",
            fontWeight: "500",
          })}
        >
          SM
        </Typography>
        <Typography
          css={(theme) => ({
            color: theme.palette.primary.main,
            display: "inline",
            fontSize: "1.3rem",
            fontWeight: "500",
          })}
        >
          A
        </Typography>
        <Typography
          css={(theme) => ({
            color: "rgba(0,0,0,0.6)",
            display: "inline",
            fontSize: "1.3rem",
            fontWeight: "500",
          })}
        >
          RT
        </Typography>

        <Typography
          css={(theme) => ({
            color: "rgba(0,0,0,0.6)",
            display: "inline",
            fontSize: "1.3rem",
            fontWeight: "500",
          })}
        >
          HOUSE
        </Typography>
      </div>

      <div css={rightBar}>
        <LinkC variantc={variant} href="#">
          Link
        </LinkC>
        <LinkC variantc={variant} href="#">
          Link
        </LinkC>
        <LinkC variantc={variant} href="#">
          Link
        </LinkC>
      </div>
    </VariantS>
  );
}

export default Variant;
