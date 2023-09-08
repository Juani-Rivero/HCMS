const PatientModel = require("../models/patient");

exports.getAllPatients = async() => {
    return await PatientModel.find();
}

exports.createPatient = async(patient) => {
    return await PatientModel.create(patient);
}

exports.getPatientById = async(id) => {
    return await PatientModel.findById(id);
}
