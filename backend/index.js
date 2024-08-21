import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(process.env.DB_HOST, connectionParams).then(() => {
  console.log("Connected");
});

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/", userRouter);


app.post("/auth", (req, res) => {
  if (req.body.key === "secretkey") {
    res.status(200).send();
    return;
  }

  res.status(403).send();

  return;
});




app.listen(process.env.PORT || 5000, () => {
  console.log("Server started!");
});
