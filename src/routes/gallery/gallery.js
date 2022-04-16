import * as React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import someImage from "../../../assets/window1.jpg";
import { Paper } from "@mui/material";

import g1 from "../../../assets/woodpro/Learn More/1.jpg";
import g2 from "../../../assets/woodpro/Learn More/2.jpg";
import g3 from "../../../assets/woodpro/Learn More/3.jpg";
import g4 from "../../../assets/woodpro/Learn More/4.jpg";
import g5 from "../../../assets/woodpro/Learn More/5.jpg";
import g6 from "../../../assets/woodpro/Learn More/6.jpg";
import g7 from "../../../assets/woodpro/Learn More/7.jpg";

import d1 from "../../../assets/dresscode/Learn More/1.jpg";
import d2 from "../../../assets/dresscode/Learn More/2.jpg";
import d3 from "../../../assets/dresscode/Learn More/3.jpg";
import d4 from "../../../assets/dresscode/Learn More/4.jpg";
import d5 from "../../../assets/dresscode/Learn More/5.jpg";
import d6 from "../../../assets/dresscode/Learn More/6.jpg";
import d7 from "../../../assets/dresscode/Learn More/7.jpg";
import d8 from "../../../assets/dresscode/Learn More/8.jpg";

const woodpro = [g1, g2, g3, g4, g5, g6, g7];
const dresscode = [d1, d2, d3, d4, d5, d6, d7, d8];

function Gallery() {
  let params = useParams();
  const [images, setImages] = React.useState(woodpro);

  React.useEffect(() => {
    if (params.id === "dresscode") setImages(dresscode);
  }, []);

  return (
    <div>
      <Paper
        variant="outlined"
        style={{
          display: "flex",
          height: 100,
          marginBottom: 35,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Typography
            css={(theme) => ({
              color: theme.palette.text.secondary,
              display: "inline",
              fontSize: "1.3rem",
              fontWeight: "500",
            })}
          >
            SM
          </Typography>
          <Typography
            css={(theme) => ({
              color: theme.palette.primary.main,
              display: "inline",
              fontSize: "1.3rem",
              fontWeight: "500",
            })}
          >
            A
          </Typography>

          <Typography
            css={(theme) => ({
              color: theme.palette.text.secondary,
              display: "inline",
              fontSize: "1.3rem",
              fontWeight: "500",
            })}
          >
            RTHOUSE
          </Typography>
        </div>
        <div></div>
      </Paper>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h3">Some Blah Blah Title</Typography>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", padding: 30, gap: 15 }}>
        {images.map((value, index) => (
          <Card css={{ width: 210, height: 280 }} key={index}>
            <CardMedia
              component="img"
              height="200"
              image={value}
              alt="thumbnail"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {"Some Title"}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
