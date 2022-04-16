import { hot } from "react-hot-loader";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import red from "@mui/material/colors/red";
import Docscroll from "./components/docscroll/docscroll.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./routes/gallery/gallery.js";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  },
  bgTransparent: "rgba(0,0,0, 0.4)",
  avatarDiameter: "2.5rem",
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Docscroll theme={theme} />} />
        <Route path="/gallery/:id" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default hot(module)(App);
