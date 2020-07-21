const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};

// Creating our User model
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: [validateEmail, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.methods.encryptPassword = function () {
  this.password = bcrypt.hashSync(
    this.password,
    bcrypt.genSaltSync(10),
    null
  );

  return this.password;
};

const User = mongoose.model("User", UserSchema);

module.exports = User;