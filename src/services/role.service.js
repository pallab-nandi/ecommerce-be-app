const { Op } = require('sequelize');
const db = require('../models/index.model');

class RoleService {
    schema;
    constructor() {
        this.schema = db.role;
    }

    findAllRoles(roles) {
        return this
        .schema
        .findAll({
            where : {
                name : {
                    [Op.or] : roles
                }
            }
        })
        .catch((err) => {
            console.log('Error while fetching role', err);
            return Promise.reject('Error while fetching role');
        })
    }
}

const roleService = new RoleService();

module.exports = { roleService }