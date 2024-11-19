const express = require("express")
const app = express()
const userController = require("./controllers/users")
const productController = require("./controllers/products")

const PORT = 3000

//Middleware
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*") //Allow all origins
    res.header("Access-Control-Allow-Methods", "*") //Allow all methods
    res.header("Access-Control-Allow-Headers", "*") //Allow all headers
    next()
})

app.use(express.json())
app.use(express.static(__dirname + "/dist")) //Middleware that looks at every request


//Controllers
app.get("/", (req, res, next) => { //Useless, but it's here. //Can't throw errors in async programming
    res.send("Hello World")
})
    .get("/about", (req, res, next) => { //Mounts Controller
        res.send("About Us")
    })
    .use("/api/v1/users", userController)  //Use API. Practice helps with understanding the code.
    .use("/api/v1/products", productController)

    //Use catch all to prevent error when refreshing page
    .get("*", (req, res) => {
        res.sendFile(__dirname + "/dist/index.html")
    })

    //Error Handling
    app.use((err, req, res, next) => {
        console.error(err)
        res.status(err.status ?? 500).send(err)
    })

    console.log("Step #1") //Displays first
app.listen(PORT, (err, data) => {
    console.log("Step #2") //Displays third (Called before because listening takes time)
    console.log("Haven't Forgotten a thing. Never will.")
    console.log("Server is running at http://localhost:" + PORT)
})
console.log("Step #3") //Displays second

/* Four types of async methods
    1. Nodestyle callbacks
    2. Pipelines
    3. Promises
    4. Async/Await
*/

/**
 * Sample code below for reference (File Hell)
const file = require("fs")
file.readFile("./data/products.json", (err, data) => {
    if(err) {
        console.log("Error: ", err)
    } else {
        JSON.parse(data.toString())
        fetch("http://localhost:3000/api/v1/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        }, (err, data) => {
            if(err) {
                console.log("Error: ", err)
            } else {
                console.log("Data: ", data)
            }
        })
    }
})
 */