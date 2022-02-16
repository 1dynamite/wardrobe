import { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar.js';
import Sidelinks from '../sidelinks/sidelinks.js';

const defaultWidth = '100px';

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
    <div>
      <div style={{height: '100vh', backgroundColor: 'grey'}}>
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
      </div>
    </div>
  )
};

export default Docscroll;
