const mongoose = require('mongoose');

const taxiModel = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    builtModel: {
        type: String,
        required: true,
    },
    vehicleColor: {
        type: String,
    },
    vehicleIdentificationNumber: {
        type: String,
        required: true,
        unique: true,
    },
    categoryVehicle: {
        type: [
            {
                category: String,
                imageUrl: String
            }
        ],
        required: true,
        default: [
            {
                category: "DashX",
                imageUrl: "https://img-new.cgtrader.com/items/3780663/b3b22979a3/uber-3d-suv-3d-model-b3b22979a3.jpg"
            },
            {
                category: "DashXL",
                imageUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1548646918/assets/e9/2eeb8f-3764-4e26-8b17-5905a75e7e85/original/2.png"
            },
            {
                category: "DashComfort",
                imageUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_638/v1591275848/assets/57/348090-0115-46b7-96b3-b9085e736876/original/Comfort_Vehicle_list.png"
            },
            {
                category: "DashBlack",
                imageUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png"
            },
            {
                category: "DashBlackSUV",
                imageUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1555367538/assets/31/ad21b7-595c-42e8-ac53-53966b4a5fee/original/Final_Black.png"
            },
            {
                category: "DashPool",
                imageUrl: "https://cdn.dribbble.com/users/914217/screenshots/6122089/attachments/1313084/pool_detailshot.png?resize=800x600&vertical=center"
            },
            {
                category: "DashGreen",
                imageUrl: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1580211187/assets/b4/2310ba-2562-4dea-842d-c330d65f624c/original/uber-green.jpg"
            },
            {
                category: "DashAssist",
                imageUrl: "https://cdn.dribbble.com/users/914217/screenshots/6122089/attachments/1313084/pool_detailshot.png?resize=800x600&vertical=center"
            },
            {
                category: "DashLUX",
                imageUrl: " https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_538/v1569352630/assets/4b/28f11e-c97b-495a-bac1-171ae9b29362/original/BlackSUV.png"
            }
        ]
    },
    DriverDetail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'taxiowner'
    }
});

const taxiDetails = mongoose.model('taxiVehicle', taxiModel);
module.exports = taxiDetails;
