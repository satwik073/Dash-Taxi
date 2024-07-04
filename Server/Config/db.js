const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const URL = process.env.DATABASE_URI
        mongoose.connect(URL).then(
            console.log("Connection Success")
        )
            .catch((err) => {

                console.log("Connection Unsuccessful")
            }
        )
    }

    catch (err) {
        new Error("There is an error while connecting to Database ", 500)
    }
}

module.exports = connectDB