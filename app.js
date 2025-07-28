const express = require("express");
const app = express();
const metadata = require("./routes/metadata");
require("dotenv").config();
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");

const url = process.env.MONGO_URI;

// middleware
app.use(express.json());;

// routes

app.use("/api/v1/metadata", metadata);
app.use(notFound);

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(url);
    console.log("Connected to Database...");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
