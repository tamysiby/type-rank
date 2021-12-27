const mongoose = require('mongoose')
const Schema = mongoose.Schema

const provinsiSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
})

const Provinsi = mongoose.model('Provinsi', provinsiSchema)
module.exports = Provinsi

//navigator.geolocation.getCurrentPosition()


// _id: String,
// name: String,
// count: Number