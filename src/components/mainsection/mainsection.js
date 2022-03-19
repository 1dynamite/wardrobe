import styled from "@emotion/styled";
import Paddingmain from "../paddingmain/paddingmain";
import CtgryItemsContainer from "../ctgryItemsContainer/ctgryItemsContainer";
import CtgryItem from "../ctgryItem/ctgryItem";
import CtgryTitle from "../ctgryTitle/ctgryTitle";
import detskuyu from "../../../assets/detskuyu-mebel.jpg";
import kuxnya from "../../../assets/kuxnya.jpg";
import individualnie from "../../../assets/individualnie.jpg";
import ConstCtgryContainer from "../constCtgry/container";
import ConstCtgryItem from "../constCtgry/item";
import spalnaya from "../../../assets/carousel-item3.jpg";
import GoogleMaps from "../googlemaps/googlemaps";
import headBg2 from "../../../assets/carousel-item2.jpg";
import dresscode from "../../../assets/dresscode.jpg";
import lighting from "../../../assets/lighting.png";
import context from "../../../assets/context-image.jpg";
import ContextImage from "../contextImage/contextImage";

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
        children: "Gardernobnoe napolnenie woodpro",
      },
    },
    item2: {
      imgProps: {
        src: dresscode,
      },
      titleProps: {
        children: "Gardernobnoe napolnenie dresscode",
      },
    },
    item3: {
      imgProps: {
        src: lighting,
      },
      titleProps: {
        children: "Osveshenie i prochie accessories",
      },
    },
  };

  return (
    <Container defaultWidth={props.defaultWidth}>
      <CtgryItemsContainer theme={theme} style={{ width: "90%" }}>
        <CtgryTitle typProps={{ style: { right: -70 } }}>
          Individualno podzakaz izgatavlivaem
        </CtgryTitle>
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
      <ContextImage src={context}></ContextImage>
      <CtgryItemsContainer theme={theme}>
        <CtgryTitle>Some title</CtgryTitle>
        <CtgryItem theme={theme} {...ctgryItemProps2.item1} />
        <CtgryItem theme={theme} {...ctgryItemProps2.item2} />
        <CtgryItem theme={theme} {...ctgryItemProps2.item3} />
      </CtgryItemsContainer>
      <CtgryItemsContainer theme={theme}>
        <GoogleMaps></GoogleMaps>
      </CtgryItemsContainer>
    </Container>
  );
}

export default Mainsection;
