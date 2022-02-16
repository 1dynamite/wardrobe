import { useEffect, useState } from 'react';

function ScrollFunction({component: Component, height, setHeight, ...props}) {
  const [variant, setVariant] = useState('default');
  useEffect(() => {
    props.setScrollFunction(() => (
      () => {
        if(window.scrollY === 0)
          setVariant('default');
        else if(window.scrollY < window.innerHeight - height)
        {
          if(variant !== 'opaque')
            setVariant('opaque');
        }
        else if(variant !== 'light')
          setVariant('light');
      }
    ));
  }, [props.setScrollFunction, height, variant]);

  return (
    <Component setHeight={setHeight} variant={variant} defaultWidth={props.defaultWidth}/>
  )
};

export default ScrollFunction;
