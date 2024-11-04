const express = require("express")
const app = express()

const PORT = 3000

app.get("/", (req, res) => {
    res.send("Haven't forgotten a thing. Never will.")
}).get("/about", (req, res) => {
        res.send("About Us")
    }).use("/users")

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT)
})