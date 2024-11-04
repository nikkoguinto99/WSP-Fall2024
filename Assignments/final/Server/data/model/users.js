const data = require("../data/users.json")

function getAll(){
    return data.users
}

function get(id){
    return data.users.find(user => user.id == id)
}

function add(user){
    user.id = data.users.reduce((prev, x)=> (x.id > prev ? x.id : prev), 0) + 1
    data.users.push(user)
    return user
}

function update(id, user){
    const index = data.users.findIndex(user => user.id == id)
    Object.assign(data.users[index], user)
    return data.users[index]
}

function remove(id){
    const index = data.users.findIndex(user => user.id == id)
    return data.users.splice(index, 1)
}

module.exports = {
    getAll,
    get,
    add,
    update,
    remove
}