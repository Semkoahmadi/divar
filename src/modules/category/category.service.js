const autoBind = require("auto-bind");
const CategoryModel = require("./category.model");

class CategoryService {
    #model;
    constructor() {
        autoBind(this);
        this.#model = CategoryModel
    }
    async create(categoryDto) {

    }
}
module.exports = new CategoryService();