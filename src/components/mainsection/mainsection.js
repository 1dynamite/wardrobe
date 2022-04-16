import styled from "@emotion/styled";
import Paddingmain from "../paddingmain/paddingmain";
import CtgryItemsContainer from "../ctgryItemsContainer/ctgryItemsContainer";
import CtgryTitle from "../ctgryTitle/ctgryTitle";
import detskuyu from "../../../assets/detskuyu-mebel.jpg";
import kuxnya from "../../../assets/kuxnya.jpg";
import individualnie from "../../../assets/individualnie.jpg";
import ConstCtgryContainer from "../constCtgry/container";
import ConstCtgryItem from "../constCtgry/item";
import spalnaya from "../../../assets/carousel-item3.jpg";
import GoogleMaps from "../googlemaps/googlemaps";
import headBg2 from "../../../assets/woodpro.jpg";
import lighting from "../../../assets/lighting.png";
import woodpro1 from "../../../assets/woodpro/1.jpg";
import woodpro2 from "../../../assets/woodpro/2.jpg";
import woodpro3 from "../../../assets/woodpro/3.jpg";
import woodpro4 from "../../../assets/woodpro/4.jpg";
import woodpro5 from "../../../assets/woodpro/5.jpg";
import woodpro6 from "../../../assets/woodpro/6.jpg";
import woodpro7 from "../../../assets/woodpro/7.jpg";
import woodpro8 from "../../../assets/woodpro/8.jpg";
import woodpro9 from "../../../assets/woodpro/9.jpg";
import woodpro10 from "../../../assets/woodpro/10.jpg";
import woodpro11 from "../../../assets/woodpro/11.jpg";
import main from "../../../assets/dresscode/main.jpg";
import dresscode1 from "../../../assets/dresscode/Facade/1.jpg";
import dresscode2 from "../../../assets/dresscode/Facade/2.jpg";
import dresscode3 from "../../../assets/dresscode/Facade/3.jpg";
import dresscode4 from "../../../assets/dresscode/Facade/4.jpg";
import dresscode5 from "../../../assets/dresscode/Facade/5.jpg";
import dresscode6 from "../../../assets/dresscode/Facade/6.jpg";
import dresscode7 from "../../../assets/dresscode/Facade/7.jpg";
import dresscode8 from "../../../assets/dresscode/Facade/8.jpg";
import dresscode9 from "../../../assets/dresscode/Facade/9.jpg";
import dresscode10 from "../../../assets/dresscode/Facade/10.jpg";
import dresscode11 from "../../../assets/dresscode/Facade/11.jpg";
import dresscode12 from "../../../assets/dresscode/Facade/12.jpg";
import dresscode13 from "../../../assets/dresscode/Facade/13.jpg";

import { css } from "@emotion/react";
import CtgrWindows from "../ctgrWindows/ctgrWindows";

const Container = styled(Paddingmain)((props) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: props.theme.spacing(6),
}));

function Mainsection({ theme, ...props }) {
  const ctgryItemProps = {
    item1: {
      imgProps: {
        src: kuxnya,
      },
      titleProps: {
        children: "Kuxonnie garnituri",
      },
    },
    item2: {
      imgProps: {
        src: spalnaya,
      },
      titleProps: {
        children: "Spalniye garnituri",
      },
    },
    item3: {
      imgProps: {
        src: detskuyu,
      },
      titleProps: {
        children: "Detskuyu mebel",
      },
    },
    item4: {
      imgProps: {
        src: individualnie,
      },
      titleProps: {
        children: "Individualnie zakazi",
      },
    },
  };

  const ctgryItemProps2 = {
    item1: {
      imgProps: {
        src: headBg2,
      },
      titleProps: {
        children: "Garderobnoe napolnenie woodpro",
      },
      pathId: "woodpro",
    },
    item2: {
      imgProps: {
        src: main,
      },
      titleProps: {
        children: "Garderobnoe napolnenie dresscode",
      },
      pathId: "dresscode",
    },
    item3: {
      imgProps: {
        src: lighting,
      },
      titleProps: {
        children: "Osveshenie i prochie accessories",
      },
      pathId: "osveshenie",
    },
  };

  const columnCtgrRoot = (theme) =>
    css({
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: theme.spacing(7),
    });

  return (
    <Container defaultWidth={props.defaultWidth}>
      <CtgryItemsContainer theme={theme}>
        <CtgryTitle>Some title</CtgryTitle>
        <div css={columnCtgrRoot}>
          <CtgrWindows
            theme={theme}
            windows={[
              woodpro1,
              woodpro2,
              woodpro3,
              woodpro4,
              woodpro5,
              woodpro6,
              woodpro7,
              woodpro8,
              woodpro9,
              woodpro10,
              woodpro11,
            ]}
            ctgrItem={ctgryItemProps2.item1}
          />
          <CtgrWindows
            theme={theme}
            windows={[
              dresscode1,
              dresscode2,
              dresscode3,
              dresscode4,
              dresscode5,
              dresscode6,
              dresscode7,
              dresscode8,
              dresscode9,
              dresscode10,
              dresscode11,
              dresscode12,
              dresscode13,
            ]}
            ctgrItem={ctgryItemProps2.item2}
          />
          <CtgrWindows
            theme={theme}
            windows={[]}
            ctgrItem={ctgryItemProps2.item3}
          />
        </div>
      </CtgryItemsContainer>
      <CtgryItemsContainer theme={theme}>
        <CtgryTitle>Individualno podzakaz izgatavlivaem</CtgryTitle>
        <ConstCtgryContainer>
          <ConstCtgryItem
            imgSrc={ctgryItemProps.item1.imgProps.src}
            title={ctgryItemProps.item1.titleProps.children}
          />
          <ConstCtgryItem
            imgSrc={ctgryItemProps.item2.imgProps.src}
            title={ctgryItemProps.item2.titleProps.children}
          />
          <ConstCtgryItem
            imgSrc={ctgryItemProps.item3.imgProps.src}
            title={ctgryItemProps.item3.titleProps.children}
          />
          <ConstCtgryItem
            imgSrc={ctgryItemProps.item4.imgProps.src}
            title={ctgryItemProps.item4.titleProps.children}
          />
        </ConstCtgryContainer>
      </CtgryItemsContainer>
      <CtgryItemsContainer theme={theme}>
        <GoogleMaps></GoogleMaps>
      </CtgryItemsContainer>
    </Container>
  );
}

export default Mainsection;
