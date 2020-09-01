import express from "express";
import bodyParser from "body-parser";
import cuid from "cuid";
const app = express();

//to use .env file
require("dotenv").config();

//body parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  var uid = cuid();
  res.redirect(302, "/" + uid);
});

app.get("/:uid", (req, res) => {
  var uid = req.params.uid;
  res.send(uid);
});

app.listen(3000, function () {
  console.log("Server started");
});
