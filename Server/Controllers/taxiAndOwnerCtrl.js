const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const CatchAsyncErrors = require('../Middlewares/CatchAsyncErrors');
const taxiDetails = require('../Model/taxiModel');
const taxiOwnerDetail = require('../Model/taxiOwners');

exports.registerVehicleAndOwner = CatchAsyncErrors(async (req, res) => {
    const { DriverName, DriverEmail, Password, DriverPhoneNumber, DriverAddress, TaxiNumber, LicenseNumber, vehicleIdentificationNumber, AadharNumber, companyName, builtModel, vehicleColor, categoryVehicle
    } = req.body;

    if (!DriverName || !DriverEmail || !Password || !DriverAddress || !DriverPhoneNumber || !TaxiNumber || !LicenseNumber || !AadharNumber || !companyName || !builtModel || !vehicleColor || !vehicleIdentificationNumber || !categoryVehicle) {
        return res.status(400).json("All fields are required to register data");
    }

    const existingTaxiOwner = await taxiOwnerDetail.findOne({ DriverEmail });
    if (existingTaxiOwner) {
        return res.status(400).json("User with this email already exists, please try with a different email.");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(Password, salt);
    const enteringTaxiOwner = new taxiOwnerDetail({ DriverName, DriverEmail, DriverAddress, DriverPhoneNumber, AadharNumber, Password: hashedPassword, TaxiNumber, LicenseNumber });
    const savedTaxiOwner = await enteringTaxiOwner.save();

    const existingTaxiWithNumber = await taxiDetails.findOne({ vehicleIdentificationNumber });
    if (existingTaxiWithNumber) {
        return res.status(400).json("Taxi with this Plate Number already exists, please try using another number.");
    }

    const enteringTaxi = new taxiDetails({ companyName, builtModel, vehicleColor, vehicleIdentificationNumber, DriverDetail: savedTaxiOwner._id, categoryVehicle });
    const savedTaxi = await enteringTaxi.save();

    const token = jwt.sign({ id: savedTaxiOwner._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_TIME || '30d'
    });

    return res.status(200).json({
        success: true,
        message: "Success! Taxi Owner and Taxi saved successfully",
        taxiOwner: savedTaxiOwner,
        token: token,
        taxiDetails: savedTaxi,
    });
});

exports.letUserLoginWithDetails = CatchAsyncErrors(async (req, res) => {
    const { DriverEmail, Password } = req.body;
    if (!DriverEmail || !Password) {
        return res.status(400).json("All Fields are required");
    }
    const existingTaxiOwner = await taxiOwnerDetail.findOne({ DriverEmail })
    if (!existingTaxiOwner) {
        return res.status(400).json("User Not Found");
    }
    const decodedPassword = await bcrypt.compare(Password, existingTaxiOwner.Password)
    if (existingTaxiOwner.DriverEmail !== DriverEmail || !decodedPassword) {
        return res.status(400).json("Invalid Email or Password");
    }

    const token = jwt.sign({ id: existingTaxiOwner._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_TIME || '30d'
    });
    return res.status(200).json({
        success: true,
        message: "Success! Taxi Owner LoggedIn successfully",
        taxiOwner: existingTaxiOwner,
        token: token
    });

})

exports.getAllTaxiOwnerProfiles = CatchAsyncErrors(async (req, res) => {
    const fetchAllTaxiOwners = await taxiOwnerDetail.find();
    if (!fetchAllTaxiOwners) {
        return res.status(400).json("No taxi Driver Found")
    }
    return res.status(200).json({
        success: true,
        message: "All Taxi Drivers Fetched",
        taxiOwners: fetchAllTaxiOwners
    })
})