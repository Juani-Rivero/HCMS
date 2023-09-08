const express = require('express');
const router = express.Router();

const {
    getAllPatients,
    createPatient,
    getPatientById
} = require("../controllers/patientController");

router.route("/").get(getAllPatients).post(createPatient);
router.route("/:id").get(getPatientById);

module.exports = router;