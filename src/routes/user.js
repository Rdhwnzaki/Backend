const express = require("express");

const router = express.Router();
const { userController } = require("../controller/user");
const { validate } = require("../middleware/users");
const { protect } = require("../middleware/auth");

router.post("/register-test", validate, userController.register);
router.post("/login", userController.login);
router.post("/verif", userController.otp);
router.get("/get-user", protect, userController.getUser);

module.exports = router;
