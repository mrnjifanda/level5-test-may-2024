require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const port = "3000";
const database = process.env.DATABASE_URL;

mongoose.connect("mongodb://localhost:27017/contacts").then(() => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  //   const authmiddleware = require("./src/middlewares/auth.middleware");

  const contactRoute = require("./routes/contact.route");

  app.use("/api", contactRoute);

  app.listen(port, () => {
    console.log("Application listening on http://localhost:" + port);
  });
});
// .catch(error => {

//     console.log(error);
// });
