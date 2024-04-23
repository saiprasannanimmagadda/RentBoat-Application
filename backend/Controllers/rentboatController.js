const { query } = require('express')
const Rentboat = require('../Models/rentboatModel')

exports.rentBoat = async (req, res) => {

    try {
        const rentboat = await Rentboat.create(req.body)
        res.status(201).json({ status: "success", data: { rentboat: rentboat } })
    }
    catch (err) {
        res.status(400).json({ status: "failure", message: err.message })
    }
}

exports.cancelBooking = async (req, res) => {
    try {
        await Rentboat.findByIdAndDelete(req.params.ID);
        res.status(200).json({ status: "Success", message: "Booking Cancelled Successfully" })
    }
    catch (err) {
        res.status(400).json({ status: "failure", message: err.message })
    }
}
exports.showBooking = async (req, res) => {
    try {
        //const movie = await Movie.find({ _id: req.param.id })
        const boatDetails = await Rentboat.findById(req.params.ID)
        console.log(boatDetails)
        res.status(200).json({ status: "Success", data: { boatDetails } })
    }
    catch (err) {
        res.status(400).json({ status: "failure", message: err.message })
    }
}
exports.updateBooking = async (req, res) => {
    try {

        const updatedBooking = await Rentboat.findByIdAndUpdate(req.params.ID, req.body, { new: true, runValidators: true }) //{new:true} is used to return the the updated document runValidators- is used to run the validators which we created before
        res.status(200).json({ status: "Success", data: { boatDetails: updatedBooking } })
    }
    catch (err) {
        res.status(400).json({ status: "failure", message: err.message })
    }
}