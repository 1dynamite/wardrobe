import styled from '@emotion/styled';
import { Paper, IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useRef } from 'react';

const MyPaper = (props) => {
  return (
    <Paper className={props.className} {...props.PaperProps}>
      {props.children}
    </Paper>
  )
}

const Container = styled(MyPaper)(
  props => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100vh',
    position: 'fixed',
    zIndex: '3',
    right: '0',
    width: props.view === 'open' ? props.defaultWidth : '0',
    overflowX: 'hidden',
    backgroundColor: props.variant === 'light' ? 'white' : props.theme.bgTransparent,
    padding: `${props.theme.spacing(12)} 0`,
    transition: props.theme.transitions.create('width'),
  })
);

const Div = styled.div(
  props => ({
    display: 'flex',
    flexDirection: 'column',
    gap: props.theme.spacing(2)
  })
);

const MyAvatar = styled(IconButton)(
  props => ({
    width: props.theme.avatarDiameter,
    height: props.theme.avatarDiameter,
    margin: `0 ${props.theme.spacing(4)}`,
    backgroundColor: 'none',
    border: props.variant === 'light' ? `1px solid ${props.theme.palette.text.secondary}` : (
      '1px solid white'
    ),
    color: props.variant === 'light' ? props.theme.palette.text.secondary : 'white',
    ':hover': {
      backgroundColor: props.variant === 'opaque' ? props.theme.palette.primary.main : 'white',
      border: `1px solid ${props.theme.palette.primary.main}`,
      color: props.variant === 'opaque' ? 'none' : props.theme.palette.primary.main,
    }
  })
)

function Variant(props) {
  return (
    <Container {...props}>
      <Div>
        <MyAvatar variant={props.variant}><SearchIcon/></MyAvatar>
        <MyAvatar variant={props.variant}><SearchIcon/></MyAvatar>
      </Div>
      <Div>
        <MyAvatar variant={props.variant}><SearchIcon/></MyAvatar>
        <MyAvatar variant={props.variant}><SearchIcon/></MyAvatar>
        <MyAvatar variant={props.variant}><SearchIcon/></MyAvatar>
      </Div>
    </Container>
  )
};

export default Variant;