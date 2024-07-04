const express = require('express');
const userModel = require('../Model/userModel');
const CatchAsyncErrors = require('../Middlewares/CatchAsyncErrors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userDetails = require('../Model/userModel');

exports.registerUserData = CatchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    if (!name || !email || !password) {
        return res.status(400).json("All fields are required");
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
        return res.status(400).json("User already exists with this email, try a different one");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRY || '30d',
    });

    res.status(200).json({
        success: true,
        message: "User registered successfully",
        user: newUser,
        token: token,
    });
});

exports.getUserLogin = CatchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json("All fields are required");
    }

    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
        return res.status(400).json("User not found", 400);
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
        return res.status(400).json("Invalid Credentials");
    }

    const token = jwt.sign({ id: existingUser._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRY || '30d',
    });

    res.status(200).json({
        success: true,
        message: "User logged in successfully",
        user: existingUser,
        token: token,
    });
});
exports.getAllProfiles = CatchAsyncErrors(async (req, res) => {
    const allUsers = await userDetails.find()
    return res.status(200).json({
        success: true,
        message: "Here are all users",
        users: allUsers
    })
      
    
})
    