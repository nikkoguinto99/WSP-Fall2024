const express = require("express")
const app = express()
const userController = require("./controllers/users")
const postController = require("./controllers/posts")
const PORT = 3000

// Middleware
app.use(express.json())
app.use(express.static(__dirname + "/dist")) //Run 'npm run build' from inside client folder to create dist folder in server

// Controllers
app.get("/", (req, res) => {
    res.send("Hello New Paltz!")
})
    .get("/about", (req, res) => {
        res.send("About Us")
    })
    .use("/api/v1/users", userController)
    .use("/api/v1/posts", postController)

app.listen(PORT, () => {
    console.log("Server is running at http://localhost:" + PORT)
})