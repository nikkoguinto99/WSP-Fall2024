// @ts-nocheck
/** @type {{ items: User[] }} */
const data = require("../data/users.json")

/**
 * @template T
 * @typedef {import("../../client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/**
 * @typedef {import("../../client/src/models/users").User} User
 */

/**
 * Get all users
 * @returns {Promise<DataListEnvelope<User>>}
 */
async function getAll() {
    return { data: data.items, isSuccess: true }
}

/**
 * Get a user by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<User>>}
 */
async function get(id) {
    const user = data.items.find((user) => user.id == id)
    return { data: user, isSuccess: !!user }
}

/**
 * Add a new user
 * @param {User} user
 * @returns {Promise<DataEnvelope<User>>}
 */
async function add(user) {
    user.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1
    data.items.push(user)
    return { data: user, isSuccess: true }
}

/**
 * Update a user
 * @param {number} id
 * @param {User} user
 * @returns {Promise<DataEnvelope<User>>}
 */
async function update(id, user) {
    const userToUpdate = data.items.find((user) => user.id == id)
    if (!userToUpdate) {
        return { data: null, isSuccess: false }
    }
    Object.assign(userToUpdate, user)
    return { data: userToUpdate, isSuccess: true }
}

/**
 * Remove a user
 * @param {number} id
 * @returns {Promise<DataEnvelope<{ success: boolean, message: string, id: number }>>}
 */
async function remove(id) {
    const userIndex = data.items.findIndex((user) => user.id == id)
    if (userIndex === -1) {
        return { data: { success: false, message: "User not found", id: id }, isSuccess: false }
    }
    data.items.splice(userIndex, 1)
    return { data: { success: true, message: "User deleted", id: id }, isSuccess: true }
}

/**
 * Search users by username
 * @param {string} query
 * @returns {Promise<DataListEnvelope<User>>}
 */
async function search(query) {
    const users = data.items.filter((user) => user.username.includes(query))
    return { data: users, isSuccess: true }
  }
  
  

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
    search,
}