import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ConstCtgryItem(props) {
  return (
    <Card css={{ flex: "1 1 0" }}>
      <CardMedia
        component="img"
        height="240"
        image={props.imgSrc}
        alt="thumbnail"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
