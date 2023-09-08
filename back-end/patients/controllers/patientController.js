const patientService = require("../services/patientServices");

exports.getAllPatients = async (req, res) => {
    try {
        const patient = await patientService.getAllPatients();
        res.json({ data: patient, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.createPatient = async (req, res) => {
    try {
        console.log(req.body);
        const patient = await patientService.createPatient(req.body);
        res.json({ data: patient, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getPatientById = async (req, res) => {
    try {
        const patient = await patientService.getPatientById(req.params.id);
        res.json({ data: patient, status: "success" });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}
