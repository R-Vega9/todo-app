const router = require("express").Router();
const controller = require("./todos.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/:todo_id").get(controller.read).put(controller.update).delete(controller.delete).all(methodNotAllowed);
router.route("/").get(controller.list).post(controller.create).all(methodNotAllowed);

module.exports = router;