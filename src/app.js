import express from "express";
const app = express();
const PORT = 5080;

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(PORT, console.log(`Listening to port ${PORT}`))
