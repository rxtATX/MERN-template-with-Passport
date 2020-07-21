const router = require("express").Router();
const userController = require("../../controllers/userController");
const passport = require("../../config/passport");

// Matches with "/api/user/login"
router.route("/login")
    .post(passport.authenticate("local"), userController.login);

// Matches with "/api/user/signup"
router.route("/signup")
    .post(userController.create);

// Matches with "/api/user/logout"
router.route("/logout")
    .get(userController.logout);

// Matches with "/api/user/me"
router.route("/me")
    .get(userController.findMe)

// Matches with "/api/user/all"
router.route("/all")
    .get(userController.findAll)

module.exports = router;
