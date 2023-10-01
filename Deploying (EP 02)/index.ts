
import express from "express";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.get("/twitter", (req, res) => {
    res.send("Twitter is now changed to 'X'");
})

app.get("/login", (req, res) => {
    res.send("<h1>We are going to run it to login</h1>")
})

app.get("/youtube", (req, res) => {
    res.send("<h2>Chai aur Code Backend Series</h2>")
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
    console.log(`Access it on http://localhost:${process.env.PORT}`);
})