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

    getCategoryByID(id) {
        return this
        .schema
        .findOne({
            where : {
                id : id
            }
        })
    }

    createCategory(category) {
        return this
        .schema
        .create(category)
    }

    updateCategoryByID(category, id) {
        return this
        .schema
        .update(category, {
            where : {
                id : id
            }
        })
    }

    deleteCategoryByID(id) {
        return this
        .schema
        .destroy({
            where : {
                id : id
            }
        })
    }
}

const categoryService = new CategoryService();

module.exports = { categoryService };