import styled from '@emotion/styled';

const Container = styled.div(
  props => {
    const slideBarWidth = parseInt(props.defaultWidth, 10);
    const extraPadding = parseInt(props.theme.spacing(2), 10);

    return ({
      paddingLeft: extraPadding + 'px',
      paddingRight: (slideBarWidth + extraPadding) + 'px',
    });
  }
);

function Paddingmain({innerRef, ...props}) {
  return (
    <Container ref={innerRef} {...props}/>
  );
};

export default Paddingmain;