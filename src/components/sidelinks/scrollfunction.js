import { useEffect, useState } from 'react';
import Variant from './variants.js';

function ScrollFunction(props) {
  const [topmost, setTopmost] = useState(true);
  const {variant, setVariant} = props;
  
  useEffect(() => {
    props.setScrollFunction(() => (
      () => {
        if(window.scrollY === 0){
          setVariant('opaque');
          setTopmost(true);
        }
        else if(window.scrollY < window.innerHeight - props.height)
        {
          setTopmost(false);
          setVariant('opaque');
        }
        else{
          setTopmost(false);
          setVariant('light');
        }
      }
    ));
  }, [props.setScrollFunction, props.height, setVariant]);

  return (
    <Variant
      variant={variant}
      view={topmost === true || props.hover ? 'open' : 'close'}
      PaperProps={{elevation: variant === 'light' ? 3 : 0, variant: 'elevation', square: true}}
      defaultWidth={props.defaultWidth}
    />
  )
};

export default ScrollFunction;