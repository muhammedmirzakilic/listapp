import express from "express";
import bodyParser from "body-parser";
const routes = express.Router();
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
  res.status(200).send("Working!");
});

app.listen(3000, function () {
  console.log("Server started");
});
