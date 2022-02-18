import ScrollFunction from './scrollfunction.js';
import Variant from '../navbar/variants.js';

function Navbar({setScrollFunction, height, setHeight, defaultWidth}) {
  return (
    <ScrollFunction 
      defaultWidth={defaultWidth}
      component={Variant} 
      height={height}
      setHeight={setHeight}
      setScrollFunction={setScrollFunction}/>
  );
};

export default Navbar;