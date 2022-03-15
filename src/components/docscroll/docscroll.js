import { useEffect, useState } from "react";
import Navbar from "../navbar/navbar.js";
import Sidelinks from "../sidelinks/sidelinks.js";
import styled from "@emotion/styled";
import Mainsection from "../mainsection/mainsection.js";
import CarouselSI from "../carouselSI/carouselSI.js";

const defaultWidth = "100px";

const Container = styled.div((props) => ({
  display: "flex",
  flexDirection: "column",
  gap: props.theme.spacing(6),
}));

function Docscroll({ theme }) {
  const [navFunction, setNavFunction] = useState(null);
  const [sideFunction, setSideFunction] = useState(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    document.onscroll = () => {
      if (navFunction) navFunction();
      if (sideFunction) sideFunction();
    };

    return () => {
      document.onscroll = null;
    };
  }, [navFunction, sideFunction]);

  return (
    <Container>
      <CarouselSI>
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
      </CarouselSI>

      <Mainsection defaultWidth={defaultWidth} theme={theme}></Mainsection>
    </Container>
  );
}

export default Docscroll;
