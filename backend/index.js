import express from "express";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";



const app = express();
const PORT = process.env.PORT || 5000;

// app.use(cors({ origin: "http://localhost:5173", credentials: true}));

app.use(express.json()); // allows us to parse incoming request with json payload || or || allows us to parse incoming requests :req.body
app.use(cookieParser()); // allows us to parse incoming cookies

app.get("/", (req, res) => {
    res.send("Hello world!")
});


app.listen(PORT, () => {
    connectDB();
    console.log("Server is running on port", PORT);
});