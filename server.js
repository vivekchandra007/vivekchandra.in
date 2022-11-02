const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.status(200).sendFile("./public/index.html");
});

app.listen(port, () =>
  console.log(`Server running on ${port}, http://localhost:${port}`)
);
