const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const URL = "mongodb+srv://satwikkanhere2003:123@cluster0.rrcfalc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
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