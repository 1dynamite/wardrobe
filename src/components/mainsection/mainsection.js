import styled from "@emotion/styled";
import Paddingmain from "../paddingmain/paddingmain";
import CtgryItemsContainer from "../ctgryItemsContainer/ctgryItemsContainer";
import CtgryItem from "../ctgryItem/ctgryItem";
import CtgryTitle from "../ctgryTitle/ctgryTitle";
import imgSrc from "../../../assets/browse-item1.jpg";
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
        src: imgSrc,
      },
      titleProps: {
        children: "Kuxonnie garnituri",
      },
    },
    item2: {
      imgProps: {
        src: imgSrc,
      },
      titleProps: {
        children: "Spalniye garnituri",
      },
    },
    item3: {
      imgProps: {
        src: imgSrc,
      },
      titleProps: {
        children: "Detskuyu mebel",
      },
    },
  };

  const ctgryItemProps2 = {
    item1: {
      imgProps: {
        src: imgSrc,
      },
      titleProps: {
        children: "Gardernobnoe napolnenie woodpro",
      },
    },
    item2: {
      imgProps: {
        src: imgSrc,
      },
      titleProps: {
        children: "Gardernobnoe napolnenie dresscode",
      },
    },
    item3: {
      imgProps: {
        src: imgSrc,
      },
      titleProps: {
        children: "Osveshenie i prochie accessories",
      },
    },
  };

  return (
    <Container defaultWidth={props.defaultWidth}>
      <CtgryItemsContainer theme={theme}>
        <CtgryTitle>Individualno podzakaz izgatavlivaem</CtgryTitle>
        <CtgryItem theme={theme} {...ctgryItemProps.item1} />
        <CtgryItem theme={theme} {...ctgryItemProps.item2} />
        <CtgryItem theme={theme} {...ctgryItemProps.item3} />
      </CtgryItemsContainer>
      {/* <ContextImage src={imgSrc}></ContextImage> */}
      <CtgryItemsContainer theme={theme}>
        <CtgryTitle>Some title</CtgryTitle>
        <CtgryItem theme={theme} {...ctgryItemProps.item1} />
        <CtgryItem theme={theme} {...ctgryItemProps.item2} />
        <CtgryItem theme={theme} {...ctgryItemProps.item3} />
      </CtgryItemsContainer>
      {/* <GoogleMaps theme></GoogleMaps> */}
      {/* <footer theme></footer> */}
    </Container>
  );
}

export default Mainsection;
