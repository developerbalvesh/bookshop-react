const express = require("express");
const bookRoutes = require("./routes/books");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/books", bookRoutes);

mongoose
  .connect(process.env.MONG_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("listening to port 4000");
    });
  })
  .catch((err) => console.log(err));