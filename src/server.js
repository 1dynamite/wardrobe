const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

//------------------------------------------------------------------------------------
/* var webpack = require("webpack");
var webpackConfig = require("../webpack.dev.config");
var compiler = webpack(webpackConfig);

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(require("webpack-hot-middleware")(compiler)); */
//------------------------------------------------------------------------------------

app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.get("/", function (req, res) {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

app.listen(3000, function () {
  console.log("Application is running on http://localhost:3000/");
});
