import express from "express";
import fruitBoxes from './util/data.js'
const app = express();
const PORT = 5080;

app.get("/fruitboxes", (req, res) => res.send(getAll()))

app.get('/fruitboxes/:number', (req, res) => {
  let getAllById = fruitBoxes.filter(x => x.Id == req.params.number)
  res.send(getAllById);
});

app.listen(PORT, console.log(`Listening to port ${PORT}`))

const getAll = () => fruitBoxes