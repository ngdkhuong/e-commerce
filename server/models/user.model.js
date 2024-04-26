const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        name: String,
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: String,
        profilePic: String,
        role: String,
    },
    {
        timestamps: true,
    },
);

const userModel = model('user', userSchema);

module.exports = userModel;
