import doctorModel from "../models/doctorModel.js";

export const createDoctor = async (req, res) => {
    try {
        const newDoctor = new doctorModel(req.body);
        await newDoctor.save();
        res.status(201).json({ message: "Doctor created successfully", doctor: newDoctor });
    } catch (error) {
        res.status(500).json({ message: "Error creating doctor", error: error.message });
    }
};

export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await doctorModel.find();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: "Error fetching doctors", error: error.message });
    }
};

export const getDoctorById = async (req, res) => {
    try {
        const doctor = await doctorModel.findById(req.params.id);
        if (!doctor) return res.status(404).json({ message: "Doctor not found" });
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ message: "Error fetching doctor", error: error.message });
    }
};

export const updateDoctor = async (req, res) => {
    try {
        const updatedDoctor = await doctorModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDoctor) return res.status(404).json({ message: "Doctor not found" });
        res.status(200).json({ message: "Doctor updated successfully", doctor: updatedDoctor });
    } catch (error) {
        res.status(500).json({ message: "Error updating doctor", error: error.message });
    }
};

export const deleteDoctor = async (req, res) => {
    try {
        const deletedDoctor = await doctorModel.findByIdAndDelete(req.params.id);
        if (!deletedDoctor) return res.status(404).json({ message: "Doctor not found" });
        res.status(200).json({ message: "Doctor deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting doctor", error: error.message });
    }
};
