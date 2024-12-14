const { Router } = require("express");
const OptionController = require("./option.controller");
const router = Router();
router.post("/", OptionController.create)
router.get("/by-category/:categoryId", OptionController.findByCategoryId)
router.get("/:id", OptionController.findById)
router.get("/", OptionController.find)
module.exports = { OptionRouter: router };