import styled from "@emotion/styled";

const Container = styled.div((props) => {
  const extraPadding = parseInt(props.theme.spacing(2), 10);

  return {
    paddingLeft: extraPadding + "px",
    paddingRight: extraPadding + "px",
  };
});

function Paddingmain({ innerRef, ...props }) {
  return <Container ref={innerRef} {...props} />;
}

export default Paddingmain;
