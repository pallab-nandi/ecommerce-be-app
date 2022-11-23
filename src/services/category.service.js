const db = require('../models/index.model');

class CategoryService {
    schema;
    constructor() {
        this.schema = db.category;
    }

    getCategories() {
        return this
        .schema
        .findAll();
    }
}

const categoryService = new CategoryService();

module.exports = { categoryService };