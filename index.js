const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Job portal server running on port 500");
});

app.listen(port, () => {
  console.log(`Job portal server running on port ${port}`);
});
