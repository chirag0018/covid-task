require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");

const userRoutes = require("./routes/UserRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes);

mongodb.MongoClient.connect(
  process.env.mongoUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    if (err) {
      console.log(err);
    } else {
      db = client.db();
      console.log("Mongodb connected successfully");
    }
  }
);

app.listen(PORT, () => {
  console.log("sever running on : " + PORT);
});
