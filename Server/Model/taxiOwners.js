const mongoose = require('mongoose')
const taxiOwnerModel = new mongoose.Schema({
    Avatar: {
        type: String,
        default:"https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-3d-illustration-avatar-profile-man-png-image_9945226.png"
    },
    DriverName: {
        type: String,
        required:true
    },
    DriverEmail: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required:  true,
    },
    DriverPhoneNumber: {
        type: String,
    },
    DriverAddress: {
        type: String,
        required: true,
    },
    TaxiNumber: {
        type: String,
        required: true,
    },
    LicenseNumber: {
        type: String,
        required: true,
        unique: true


    },
    AadharNumber: {
        type: String,
        required: true,
        unique: true

    },
    otp: {
        type: String,
        default:""
    },
    isVerified: {
        type: Boolean,
        default : false
    },
    // ownerTaxi: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'taxiVehicle'
    // }

})

const taxiOwnerDetail = mongoose.model('taxiowner', taxiOwnerModel)
module.exports = taxiOwnerDetail