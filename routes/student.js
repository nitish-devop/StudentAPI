const express = require("express");
const router = express.Router();
const student_controller = require("../controllers/student_controller");

router.get("/all", student_controller.getUsers);
router.post("/new", student_controller.createUser);
router
  .route("/:id")
  .get(student_controller.getUserByID)
  .put(student_controller.updateUser)
  .delete(student_controller.deleteUser);

module.exports = router;
