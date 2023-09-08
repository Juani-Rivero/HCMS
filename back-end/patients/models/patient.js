const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Address = new Schema({
    city: String,
    code: Number,
    address: String,
});

const Patient = new Schema({
    name: String,
    lastname: String,
    birthday: String,
    address: {
        type: Address,
        default: {city: "Rosario", code: "2000", address: "Pellegrini"},
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

mongoose.model("Address", Address);
module.exports = mongoose.model("Patient", Patient);