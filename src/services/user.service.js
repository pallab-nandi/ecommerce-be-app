const db = require('../models/index.model');

class UserService {
    schema;
    constructor() {
        this.schema = db.user;
    }

    findAll() {
        return this
        .schema
        .findAll();
    }

    findOne(id) {
        return this
        .schema
        .findOne({
            where : {
                id : id
            }
        })
    }

    createUser(user) {
        return this
        .schema
        .create(user)
    }

    updateUser(user, id) {
        return this
        .schema
        .update(user, {
            where : {
                id : id
            }
        })
    }

    deleteUser(id) {
        return this
        .schema
        .destroy({
            where : {
                id : id
            }
        })
    }

    findUserByEmail(email) {
        return this
        .schema
        .findOne({
            where : {
                email : email.toLowerCase()
            }
        })
    }
}

const userService = new UserService();

module.exports = { userService };