import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import LinkC from '../linkc/linkc.js';

const VariantS = styled(Paper)(
  props => ({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: props.variantc === 'light' ? 'white' : ( 
      props.variantc === 'default' ? 'rgba(0,0,0,0)' : props.theme.bgTransparent
    ),
    padding: `${props.theme.spacing(2)} ${props.defaultWidth}`,
    position: 'fixed',
    top: '0',
    width: '100%',
    transition: props.theme.transitions.create(['background-color', 'color'])
  })
);

const rightBar = theme => ({display: 'flex', gap: theme.spacing(1)});

function Variant({variant, setHeight, ...props}) {
  const inputRef = useRef();

  useEffect(() => {
    setHeight(inputRef.current.clientHeight)
  }, [setHeight, inputRef])
  return (
    <VariantS 
      ref={inputRef}
      elevation={0} 
      variant={variant === 'light' ? 'outlined' : 'elevation'} 
      variantc={variant} 
      square
      {...props}
    >
      <LinkC variantc={variant} href="#">Link</LinkC>
      <div css={rightBar}>
        <LinkC variantc={variant} href="#">Link</LinkC>
        <LinkC variantc={variant} href="#">Link</LinkC>
        <LinkC variantc={variant} href="#">Link</LinkC>
      </div>
    </VariantS>
  )
};

export default Variant;
