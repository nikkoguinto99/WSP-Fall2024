
/**@type {{ items: Product[] }} */
const data = require("../data/products.json")


/**
 * @typedef {import("../../client/src/models/products").Product} Product
 */
/**
 * Get all users
 * @returns {Promise<Product[]>} All users
 */
async function getAll() { //adding async to function makes it return a promise
    return data.items
}

async function get(id) {
    return data.items.find((user) => user.id == id)
}

async function add(user) {
    user.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1
    data.items.push(user)
    return user
}

async function update(id, user) {
    const userToUpdate = get(id)
    Object.assign(userToUpdate, user)
    return userToUpdate
}

async function remove(id) {
    const productIndex = data.items.findIndex((user) => user.id == id)
    if(productIndex === -1) {
        throw { success: false, message: "Product not found", id: id }
    }
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