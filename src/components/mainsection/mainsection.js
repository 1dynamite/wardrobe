import styled from '@emotion/styled';
import Paddingmain from '../paddingmain/paddingmain';
import Carousel from '../carousel/carousel';

const Container = styled(Paddingmain)(
  props => ({
    display: 'flex',
    justifyContent: 'center',
  })
);

function Mainsection(props) {
  return (
    <Container defaultWidth={props.defaultWidth}>
      <Carousel itemsCount={3}>

      </Carousel>
    </Container>
  );
};

export default Mainsection;