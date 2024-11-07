const model = require("../model/products")
const express = require("express")
const app = express.Router()

/* Four ways to send data to the server:
1. Query String
2. Path Parameters
3. Headers
4. Body

*/

app.get("/", (req, res) => {
    res.send(model.getAll())
})
    .get("/:id", (req, res) => {
        const id = req.params.id
        const product = model.get(id)
        res.send(product)
    })
    .post("/", (req, res) => {
        const product = model.add(req.body)
        res.send(product)
    })
    .patch("/:id", (req, res) => {
        const id = req.params.id
        const product = model.update(id, req.body)
        res.send(product)
    })
    .delete("/:id", (req, res) => {
        const id = req.params.id
        const ret = model.remove(id)
        res.send(ret)
    })

module.exports = app