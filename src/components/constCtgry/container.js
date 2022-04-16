function ConstCtgryContainer(props) {
  const rootStyles = (theme) => ({
    display: "flex",
    gap: theme.spacing(3),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  });

  return <div css={rootStyles}>{props.children}</div>;
}

export default ConstCtgryContainer;
