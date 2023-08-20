const express = require("express");
const { readdirSync } = require("fs");
const connectDB = require("./config/DB");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
connectDB();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "10mb" }));

readdirSync("./Routes").map((r) => app.use("/api", require("./Routes/" + r)));
app.listen(3000, console.log("Start in port 3000"));
