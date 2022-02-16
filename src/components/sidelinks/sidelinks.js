import Sidehover from "./sidehover";

function Sidelinks({setScrollFunction, height, defaultWidth}) {
  return (
    <Sidehover
      height={height} 
      setScrollFunction={setScrollFunction}
      defaultWidth={defaultWidth}
    />
  )
};

export default Sidelinks;