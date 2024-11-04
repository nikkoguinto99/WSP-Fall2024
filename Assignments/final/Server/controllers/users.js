
const model = require("../models/users")
const express = require("express")
const app = express.Router()

app.get("/", (req, res) => {
    model.getAll()
}).get("/:id", (req, res) => {
    const id = req.params.id //Local variable called id which points to the id parameter in the URL
    const user = model.get(id)
    res.send(user)
}).post("/", (req, res) => {
    const user = model.add(req.body)
    data.items.push(user)
    res.send(user)
}).patch("/:id", (req, res) => { //patch edits information
    const id = req.params.id
    const user = model.update(id, req.body)
    Object.assign(user, req.body)
    res.send(user)
}).delete("/:id", (req, res) => {
    const id = req.params.id
    const ret = model.remove(id)
    res.send(user)
})

module.exports = app
/**
 * C - Create
 * R - Rewrite
 * U - Update
 * D - Delete
 */