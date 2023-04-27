const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
        routeNo: {
            type: Number,
            required: false
        },
        trainNo : {
            type: Number,
            required: false
        
        },
        trainName: {
            type: String,
            required: false
        },
        startingStation : {
            type: String,
            required: false
            },
        endingStation : {
                type: String,
                required: false
                },
        startRegionalLang : {
                type : String,
                required: false
            },
        endingRegionalLang : {
                    type : String,
                    required: false
                },
        stoppages : {
            type : String,
            required : false
        }
    })

const Info = new mongoose.model('Information', infoSchema);

module.exports =Info