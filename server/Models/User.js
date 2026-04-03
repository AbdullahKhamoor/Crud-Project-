const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    age: Number,
    email: String,
    name: String
})

const UserModel = mongoose.model("users", UserSchema)   

module.exports = UserModel; 