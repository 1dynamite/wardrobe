import styled from '@emotion/styled';
import Link from '@mui/material/Link';

const LinkS = styled(Link)(
  props => ({
    padding: `${props.theme.spacing(1)} ${props.theme.spacing(2)}`,
    color: props.variantc === 'light' ? props.theme.palette.text.secondary : (
      props.theme.palette.primary.contrastText
    ),
    transition: props.theme.transitions.create(['background-color', 'color']),
    borderRadius: props.theme.shape.borderRadius,
    textDecoration: 'none',
    ":hover": {
      color: props.variantc === 'light' ? props.theme.palette.primary.main : 'white',
      backgroundColor: props.variantc !== 'light' ? props.theme.palette.primary.main : 'white'
    },
  })
)

function LinkC(props) {
  return (
    <LinkS {...props}/>
  )
}

export default LinkC;
