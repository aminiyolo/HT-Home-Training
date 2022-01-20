const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_ID, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use("/api/routines", require("./routes/routines"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server Listening on ${port}`);
});
