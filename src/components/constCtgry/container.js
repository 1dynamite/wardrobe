function ConstCtgryContainer(props) {
  const rootStyles = (theme) => ({
    display: "flex",
    gap: theme.spacing(3),
  });

  return <div css={rootStyles}>{props.children}</div>;
}

export default ConstCtgryContainer;
