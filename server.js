//* =======================================
//*              DEPENDENCIES
//* =======================================
const express = require("express"); 
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require('path');

//* =======================================
//*              CONFIGURATIONS
//* =======================================
require("dotenv").config();
const PORT = process.env.PORT;
const mongodbURI = process.env.mongodbURI;

//* =======================================
//*        BODY PARSER, MIDDLEWARE
//* =======================================
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(methodOverride("_method"));

//* =======================================
//*            MONGOOSE CONNECTION
//* =======================================
mongoose.connect(mongodbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);

mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

//* =======================================
//*         CONTROLLERS/ROUTES
//* =======================================
const directoryController = require("./controllers/directoryController.js");
app.use("/directory", directoryController); 


//* =======================================
//*              LISTENER
//* =======================================
app.listen(PORT, () => {
  console.log("Listening on the port", PORT);
});