const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/health", (req, res) => {
  res.send("healthy");
});

app.listen(4005, () => console.log("listening on http://localhost:4005"));
