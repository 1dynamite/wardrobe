import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import { Paper } from "@mui/material";

function CtgryItem({ theme, ...props }) {
  const ctgryItemStyles = css({
    display: "flex",
  });

  const imgStyles = css({
    objectFit: "cover",
    objectPosition: "center",
    width: "300px",
    height: "200px",
    borderRadius: theme.shape.borderRadius,
  });

  const detailsContainerStyles = css({
    display: "flex",
    flexDirection: "column",
    padding: `0 ${theme.spacing(4)}`,
    gap: theme.spacing(2),
    backgroundColor: "rgba(0,0,0,0)",
    flexGrow: 1,
  });

  return (
    <Paper elevation={1} css={ctgryItemStyles} {...props.root}>
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
          <Button variant="outlined">Learn more</Button>
        </div>
      </div>
    </Paper>
  );
}

export default CtgryItem;
