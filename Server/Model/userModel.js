const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    Avatar: {
        type: String,
        default: "https://png.pngtree.com/png-vector/20230903/ourmid/pngtree-3d-illustration-avatar-profile-man-png-image_9945226.png"

    },
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
       
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        default : ''
    },
    isVerified :{
    type: Boolean,
    default: false
}
})

const userDetails = mongoose.model("userRegistrations", userModel)
module.exports = userDetails