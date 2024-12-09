/** @type {{ items: Post[] }} */
// @ts-ignore
const data = require("../data/posts.json")

/**
 * @template T
 * @typedef {import("../../Client/src/models/dataEnvelope").DataEnvelope} DataEnvelope
 * @typedef {import("../../Client/src/models/dataEnvelope").DataListEnvelope} DataListEnvelope
 */

/**
 * @typedef {import("../../client/src/models/posts").Post} Post
 */

/**
 * Get all posts
 * @returns {Promise<DataListEnvelope<Post>>}
 */
async function getAll() {
    return { data: data.items, isSuccess: true }
}

/**
 * Get a post by id
 * @param {number} id
 * @returns {Promise<DataEnvelope<Post>>}
 */
async function get(id) {
    const post = data.items.find((post) => post.id == id)
    return { data: post, isSuccess: !!post }
}

/**
 * Add a new post
 * @param {Post} post
 * @returns {Promise<DataEnvelope<Post>>}
 */
async function add(post) {
    post.id = data.items.reduce((prev, x) => (x.id > prev ? x.id : prev), 0) + 1
    data.items.push(post)
    return { data: post, isSuccess: true }
}

/**
 * Update a post
 * @param {number} id
 * @param {Post} post
 * @returns {Promise<DataEnvelope<Post>>}
 */
async function update(id, post) {
    const postToUpdate = data.items.find((post) => post.id == id)
    if (!postToUpdate) {
        return { data: null, isSuccess: false }
    }
    Object.assign(postToUpdate, post)
    return { data: postToUpdate, isSuccess: true }
}

/**
 * Remove a post
 * @param {number} id
 * @returns {Promise<DataEnvelope<{ success: boolean, message: string, id: number }>>}
 */
async function remove(id) {
    const itemIndex = data.items.findIndex((post) => post.id == id)
    if (itemIndex === -1) {
        return { data: { success: false, message: "Item not found", id: id }, isSuccess: false }
    }
    data.items.splice(itemIndex, 1)
    return { data: { success: true, message: "Item deleted", id: id }, isSuccess: true }
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove,
}