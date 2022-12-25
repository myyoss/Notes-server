import express from 'express';
import mongoose from 'mongoose';
import noteRouter from './routes/noteRoute';

const app = express();
require('dotenv').config();
const cors = require("cors");

const port = process.env.PORT || 4005;

app.use(express.static('public/build'))
app.use(cors());
app.use(express.json());

const url = process.env.MONGODB_URI;

mongoose.connect(url)
    .then(res => {
        console.log("connected to Mongoose");
    })
    .catch((err) => {
        console.log("Failed to connect to Mongoose:")
        console.log(err.message);
    });


app.use('/api/notes', noteRouter);


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});