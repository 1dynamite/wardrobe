function ContextImage(props) {
  const imgStyles = (theme) => ({
    width: "100%",
  });
  return <img css={imgStyles} src={props.src} />;
}

export default ContextImage;
