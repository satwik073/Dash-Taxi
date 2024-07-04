const mongoose = require('mongoose')

const rideSchemaModel = new mongoose.Schema({
    passengerUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'userRegistrations',
        required: true,
    },
    AllocatedDriver: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'taxiowner',
        required:  true
    },
    rideStatus: {
        type: String,
        enum: ['requested', 'accepted', 'completed'],
        default: 'requested'
    },
    createdAt: {
        type: Date,
        default:  Date.now
    },
    completedAt: {
        type: Date,
        default: Date.now
    }
})

const rideDetailsOfUserAndDriver = mongoose.model('rideById', rideSchemaModel)
module.exports = rideDetailsOfUserAndDriver

// function Person(firtsname, latsname) {
//     this.firtsname = firtsname
//     this.latsname=latsname
// }
// Person.prototype.getFullName = function () {
//     console.log(this.firtsname , this.latsname)
// }
// let fn = new Person('Satwik', 'Kanhere')
// console.log(fn)