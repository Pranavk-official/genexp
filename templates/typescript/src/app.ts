import dotenv from "dotenv";
dotenv.config();
import express from "express";
import path from "path";
import morgan from "morgan";
import indexRouter from "./routes/index";

const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
