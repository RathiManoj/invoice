const app = require("./server");

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Invoice App API"
  }).end();
})