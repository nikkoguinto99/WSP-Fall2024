const model = require("../model/products")
const express = require("express")
const app = express.Router()

/* Four ways to send data to the server:
1. Query String
2. Path Parameters
3. Headers
4. Body

*/

app.get("/", (req, res, next) => {
    res.send(model.getAll()) //Promise does not contain array. It contains a promise that will resolve to an array.
})
    .get("/:id", (req, res, next) => {
        const id = req.params.id
        const product = model.get(id)
        res.send(product)
    })
    .post("/", (req, res, next) => {
        const product = model.add(req.body)
        res.send(product)
    })
    .patch("/:id", (req, res, next) => {
        const id = req.params.id
        const product = model.update(id, req.body)
        res.send(product)
    })
    .delete("/:id", (req, res, next) => {
        const id = req.params.id
        try {
            const ret = model.remove(id)
            res.send(ret)
        }catch (err) {
            next(err.message)
        }
    })

module.exports = app