import app from "./app.js";
import morgan from "morgan";

app.get("/", (req, res) => {
  res.send("hello my wolrd");
});
app.use(morgan("dev")); // Logging middleware

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT} `);
});
