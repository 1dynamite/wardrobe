import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

function CtgryItem({ theme, ...props }) {
  const ctgryItemStyles = css({
    display: "flex",
    width: "100%",
  });

  const imgStyles = css({
    objectFit: "cover",
    objectPosition: "center",
    width: "300px",
    height: "200px",
    borderRadius: theme.shape.borderRadius,
    border: `2px solid ${theme.palette.primary.main}`,
  });

  const detailsContainerStyles = css({
    display: "flex",
    flexDirection: "column",
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    gap: theme.spacing(2),
    backgroundColor: "rgba(0,0,0,0)",
    flexGrow: 1,
  });

  return (
    <Paper variant="outlined" css={ctgryItemStyles} {...props.root}>
      <img css={imgStyles} {...props.imgProps} />
      <div css={detailsContainerStyles}>
        <div>
          <Typography variant="h6" {...props.titleProps} />
          <Typography>
            opisanie bla bla bla bla bla bla i esho bla blablablablabla bla bla
            bla
          </Typography>
        </div>
        <div>
          <Link
            to={`/gallery/${props.pathId}`}
            css={{ textDecoration: "none" }}
          >
            <Button variant="outlined">Learn more</Button>
          </Link>
        </div>
      </div>
    </Paper>
  );
}

export default CtgryItem;
