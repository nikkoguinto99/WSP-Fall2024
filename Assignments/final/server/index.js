const express = require("express")
const app = express()
const userController = require("./controllers/users")
const PORT = 3000

// Middleware
app.use(express.json())

// Controllers
app.get("/", (req, res) => {
    res.send("Hello World")
})
    .get("/about", (req, res) => {
        res.send("About Us")
    })
    .use("/users", userController)

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT)
})