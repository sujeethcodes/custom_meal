import dotenv from "dotenv"
import express from "express"
import Connection from "./config/db.js"
import router from "./router.js"
import morgan from "morgan"
import bodyParser from "body-parser"
import cors from "cors"
dotenv.config()
const app = express()
app.use(express.json());
app.use("/api", router)

app.use(bodyParser.json({ limit: "3000mb" }));
app.use(bodyParser.urlencoded({ limit: "3000mb", extended: true }));
app.use(cors("*"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Welcome to the Server! 🌐");
});


const PORT = process.env.PORT || 9000
app.listen(PORT, ()=>{
    console.log(`This port is running in ${PORT}`)
})