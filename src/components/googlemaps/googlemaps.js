import React from "react";
import GoogleMapReact from "google-map-react";
import { Typography } from "@mui/material";
import CtgryTitle from "../ctgryTitle/ctgryTitle";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMaps() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const rootStyles = (theme) => ({
    height: "500px",
    width: "100%",
  });

  return (
    // Important! Always set the container height explicitly
    <>
      <CtgryTitle>Find us</CtgryTitle>
      <div css={rootStyles}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </>
  );
}
