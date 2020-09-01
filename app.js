import express from "express";
import bodyParser from "body-parser";
import cuid from "cuid";
import mongoose from "mongoose";
import { getListData } from "./service";
const app = express();

//to use .env file
require("dotenv").config();

var db = mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

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

app.get("/:uid", async (req, res) => {
  var { uid } = req.params;
  var listData = await getListData(uid);
  res.send(listData);
});

app.listen(3000, function () {
  console.log("Server started");
});
