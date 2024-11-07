
/**@type {{ items: Product[] }} */
const data = require("../data/products.json")


/**
 * @typedef {import("../../client/src/models/products").Product} Product
 */
/**
 * Get all users
 * @returns {Array} All users
 */
function getAll() {
    return data.items
}

function get(id) {
    return data.items.find((user) => user.id == id)
}

function add(user) {
    user.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1
    data.items.push(user)
    return user
}

function update(id, user) {
    const userToUpdate = get(id)
    Object.assign(userToUpdate, user)
    return userToUpdate
}

function remove(id) {
    const productIndex = data.items.findIndex((user) => user.id == id)
    data.items.splice(productIndex, 1)
    return { success: true, message: "Product deleted", id: id }
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
}