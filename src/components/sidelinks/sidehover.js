import { useEffect, useState } from 'react';
import ScrollFunction from './scrollfunction';
import styled from '@emotion/styled';

const Div = styled.div(
  props => ({
    position: 'fixed',
    right: '0',
    zIndex: '3',
    width: props.defaultWidth,
    height: '100vh',
  })
);

const Sidehover = ({height, setScrollFunction, defaultWidth}) => {
  const [variant, setVariant] = useState('opaque');
  const [hover, setHover] = useState(false);

  const onMouseOver = () => {
    setHover(true);
  };

  const onMouseOut = () => {
    setHover(false);
  };
  
  return (
    <>
      <Div defaultWidth={defaultWidth} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        <ScrollFunction
          height={height} 
          setScrollFunction={setScrollFunction}
          variant={variant} 
          setVariant={setVariant}
          defaultWidth={defaultWidth}
          hover={hover}
        />
      </Div>
    </>
  );
}

export default Sidehover;