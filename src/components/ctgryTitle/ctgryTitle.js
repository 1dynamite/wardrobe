import { Typography } from "@mui/material";

function CtgryTitle(props) {
  const rootStyles = (theme) => ({
    display: "flex",
    justifyContent: "flex-start",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(8),
  });

  const typographyStyles = (theme) => ({
    borderLeft: `5px solid ${theme.palette.primary.main}`,
    paddingLeft: theme.spacing(3),
    position: "relative",
    left: 100,
  });

  return (
    <div css={rootStyles}>
      <Typography css={typographyStyles} variant="h3">
        {props.children}
      </Typography>
    </div>
  );
}

export default CtgryTitle;
