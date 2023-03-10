import express from "express";
import mongoose from "mongoose";
import noteRouter from "./routes/noteRoute";
const cors = require("cors");

const app = express();
app.use(express.json());

// {
//     origin:'*',
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200,
//  }
app.use(cors(
    {origin:'*',}
));
require("dotenv").config();

const port = process.env.PORT || 4005;

// app.use(express.static('public/build'))

const url = process.env.MONGODB_URI;

mongoose
  .connect(url)
  .then((res) => {
    console.log("connected to Mongoose");
  })
  .catch((err) => {
    console.log("Failed to connect to Mongoose:");
    console.log(err.message);
  });

app.use("/api/notes", noteRouter);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
