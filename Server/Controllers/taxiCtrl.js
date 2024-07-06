const CatchAsyncErrors = require("../Middlewares/CatchAsyncErrors");
const taxiDetails = require("../Model/taxiModel");

exports.getTaxiDetails =  CatchAsyncErrors(async (req, res) => {
    try {
        const taxiDetailsFetched = await taxiDetails.find()
        if (!taxiDetailsFetched) {
            return res.status(400).json({ error : "No data Found"})
        }
        return res.status(200).json({
            success: true,
            AllTaxis : taxiDetailsFetched
        })
    } catch (err) {
        console.log("Something went wrong")
    }
})