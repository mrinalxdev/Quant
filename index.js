const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./router/user")
const postRouter = require("./router/post")
const PORT = 5000;

const app = express();
dotenv.config();
mongoose
  .connect(process.env.DB_URI)
  .then(() => console.log("DB is successfully connected", { useNewUrlParser: true, connectTimeoutMS: 60000 }))
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());
app.use("/api/user", userRouter)
app.use("/api/post", postRouter)

app.listen(PORT, () => {
  console.log("Server is Running on", PORT);
});
