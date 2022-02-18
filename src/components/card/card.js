import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SeparateItemwidth = ({variant, className, children}) => {
  return (
    <Card className={className} variant={variant}>
      {children}
    </Card>
  );
};

const MyCard = styled(SeparateItemwidth)(
  props => ({
    width: props.itemWidth, 
    borderRadius: '15px',
    ':hover': {
      transition: props.theme.transitions.create('box-shadow'),
      boxShadow: props.theme.shadows[4]
    },
    flexShrink: '0'
  })
);

export default function ImgMediaCard(props) {
  return (
    <MyCard variant='outlined' itemWidth={props.itemWidth} className={props.className}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={props.path}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lorem Ipsum
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </MyCard>
  );
}
