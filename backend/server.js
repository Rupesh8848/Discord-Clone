const http = require("http");
const mongoose = require("mongoose");
require("dotenv").config({});

const app = require("./app");

const PORT = process.env.PORT || process.env.API_PORT;

const server = http.createServer(app);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Successfully connected to DB");
    server.listen(8000, () => {
      console.log("Server started and listening at port 8000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to database.", err);
  });
