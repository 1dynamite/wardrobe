import styled from '@emotion/styled';
import { useState } from 'react';
import ImgMediaCard from '../card/card';
import browseItem1 from '../../../assets/browse-item1.jpg';
import browseItem2 from '../../../assets/browse-item2.jpg';
import browseItem3 from '../../../assets/browse-item3.jpg';
import browseItem4 from '../../../assets/browse-item4.jpg';
import browseItem5 from '../../../assets/browse-item5.jpg';
import Controls from './controls';

const itemWidth = 245;

const Container = styled.div(
  props => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'max-content',
    gap: props.theme.spacing(1)
  })
);

const Items = styled.div(
  props => {
    const gap = props.gap;

    return ({
      display: 'flex',
      gap: gap,
      paddingTop: props.theme.spacing(2),
      paddingBottom: props.theme.spacing(2),
      width: itemWidth * props.itemsCount + (props.itemsCount - 1) * parseInt(gap, 10),
      overflow: 'hidden',
    });
  }
);

const CardItem = styled(ImgMediaCard)(
  ({gap, index, itemWidth, theme}) => ({
    position: 'relative',
    right: (gap + itemWidth) * index,
    transition: theme.transitions.create('right'),
    willChange: 'right'
  })
);

function Carousel(props) {
  const [index, setIndex] = useState(0);
  const gap = 32;


  return (
    <Container >
      <Items itemsCount={props.itemsCount} gap={gap}>
        <CardItem index={index} itemWidth={itemWidth} path={browseItem1} gap={gap}/>
        <CardItem index={index} itemWidth={itemWidth} path={browseItem2} gap={gap}/>
        <CardItem index={index} itemWidth={itemWidth} path={browseItem3} gap={gap}/>
        <CardItem index={index} itemWidth={itemWidth} path={browseItem4} gap={gap}/>
        <CardItem index={index} itemWidth={itemWidth} path={browseItem5} gap={gap}/>
      </Items>
      <Controls totalCount={5} itemsCount={props.itemsCount} index={index} setIndex={setIndex}/>
    </Container>
  );
};

export default Carousel;