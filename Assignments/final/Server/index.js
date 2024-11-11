const express = require("express")
const app = express()
const userController = require("./controllers/users")
const productController = require("./controllers/products")

const PORT = 3000

//Middleware
app.use(express.json())
app.use(express.static(__dirname + "/dist")) //Middleware that looks at every request

//Controllers
app.get("/", (req, res) => { //Useless, but it's here. 
    res.send("Hello World")
})
    .get("/about", (req, res) => { //Mounts Controller
        res.send("About Us")
    })
    .use("/api/v1/users", userController)  //Use API. Practice helps with understanding the code.
    .use("/api/v1/products", productController)

app.listen(PORT, () => {
    console.log("Haven't Forgotten a thing. Never will.")
    console.log("Server is running at http://localhost:" + PORT)
})