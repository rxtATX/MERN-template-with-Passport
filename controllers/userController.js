const db = require("../models");
// Defining methods for the userController
module.exports = {
    findAll: function (req, res) {
        db.User.find({})
            .then(dbData => {
                res.json(dbData)
            })
            .catch(err => {
                res.status(401).json(err);
            })
    },
    findMe: function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user._id
            });
        }
    },
    login: function (req, res) {
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    },
    create: function (req, res) {
        const user = new db.User(req.body);
        user.encryptPassword();

        db.User.create(user)
            .then(() => {
                res.redirect(307, "/api/user/login");
            })
            .catch(err => {
                console.log(err)
                res.status(401).json(err);
            });
    },
    logout: function (req, res, next) {
        // Get rid of the session token. Then call `logout`; it does no harm.
        req.logout();
        req.session.destroy(function (err) {
            if (err) { return next(err); }
            // The response should indicate that the user is no longer authenticated.
            return res.send({ authenticated: req.isAuthenticated() });
        });
    }
};
