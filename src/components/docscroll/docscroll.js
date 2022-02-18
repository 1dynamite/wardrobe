import { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar.js';
import Sidelinks from '../sidelinks/sidelinks.js';
import headBg from '../../../assets/headBg.jpg';
import styled from '@emotion/styled';
import Mainsection from '../mainsection/mainsection.js';

const defaultWidth = '100px';

const Container = styled.div(
  props => ({
    display: 'flex',
    flexDirection: 'column',
    gap: props.theme.spacing(6)
  })
);

const Div = styled.div(
  props => ({
    height: '100vh', 
    backgroundImage: `url(${headBg})`,
    backgroundPosition: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    backgroundBlendMode: 'darken',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  })
);

function Docscroll() {
  const [navFunction, setNavFunction] = useState(null);
  const [sideFunction, setSideFunction] = useState(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    document.onscroll = () => {
      if(navFunction)
        navFunction();
      if(sideFunction)
        sideFunction();
    };

    return () => {
      document.onscroll = null;
    };
  }, [navFunction, sideFunction]);


  return (
    <Container>
      <Div>
        <Navbar 
          height={height} 
          setHeight={setHeight} 
          setScrollFunction={setNavFunction}
          defaultWidth={defaultWidth}
        />
        <Sidelinks 
          defaultWidth={defaultWidth}
          height={height}
          setScrollFunction={setSideFunction}
        />
      </Div>

      <Mainsection defaultWidth={defaultWidth}>

      </Mainsection>
    </Container>
  )
};

export default Docscroll;
