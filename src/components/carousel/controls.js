import styled from '@emotion/styled';
import ArrowBackIosNewSharpIcon from '@mui/icons-material/ArrowBackIosNewSharp';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { IconButton } from '@mui/material';
import { useState } from 'react';

const Container = styled.div(
  props => ({
    display: 'flex',
    gap: props.theme.spacing(2),
  })
);

const Control = styled(IconButton)(
  props => ({
    width: props.theme.avatarDiameter,
    height: props.theme.avatarDiameter,
    border: '1px solid ' + (props.disabled ? props.theme.palette.text.disabled : (
      props.theme.palette.text.secondary)),

    ':hover': {
      border: '1px solid ' + props.theme.palette.primary.main,
      backgroundColor: props.theme.palette.primary.main,
      color: 'white'
    }
  })
);



function Controls({itemsCount, setIndex, index, totalCount}) {
  const [disabledLeft, setDisabledLeft] = useState(true);
  const [disabledRight, setDisabledRight] = useState(false);

  const onClickLeft = () => {
    setDisabledRight(false);

    if(index !== 0)
    {
      if(index === 1)
        setDisabledLeft(true);
      setIndex(index-1);
    }
  };

  const onClickRight = () => {
    setDisabledLeft(false);

    if(totalCount - index > itemsCount)
    {
      if(totalCount - index === itemsCount+1)
        setDisabledRight(true);
      setIndex(index+1);
    };
  };

  return (
    <Container>
      <Control onClick={onClickLeft} disabled={disabledLeft}>
        <ArrowBackIosNewSharpIcon fontSize='small'/>
      </Control>
      <Control onClick={onClickRight}  disabled={disabledRight}>
        <ArrowForwardIosSharpIcon fontSize='small' />
      </Control>
    </Container>
  );
};

export default Controls;