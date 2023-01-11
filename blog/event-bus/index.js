const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;
  console.log("🚀 ~ file: index.js ~ line 10 ~ app.post ~ event", event);

  const response = axios
    .post("http://localhost:4000/events", event)
    .catch((err) => {
      console.log(err.message);
    });
  console.log("🚀 ~ file: index.js ~ line 15 ~ app.post ~ response", response);

  const response2 = axios
    .post("http://localhost:4001/events", event)
    .catch((err) => {
      console.log(err.message);
    });
  console.log(
    "🚀 ~ file: index.js ~ line 22 ~ app.post ~ response2",
    response2
  );

  const response3 = axios
    .post("http://localhost:4002/events", event)
    .catch((err) => {
      console.log(err.message);
    });
  console.log(
    "🚀 ~ file: index.js ~ line 27 ~ app.post ~ response3",
    response3
  );
  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
