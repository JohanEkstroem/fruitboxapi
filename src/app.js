import express from "express";
import fruitBoxes from './util/data.js'
const app = express();
const PORT = 5080;

app.get("/", (req, res) => res.send(getAll()))

app.listen(PORT, console.log(`Listening to port ${PORT}`))

const getAll = () => fruitBoxes