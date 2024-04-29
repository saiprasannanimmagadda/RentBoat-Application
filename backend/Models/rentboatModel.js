const mongoose = require('mongoose');

//Creating the new Schema

const rentboatSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'Name is required field'],
        trim: true
    },
    middleName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        required: [true, 'Name is required field'],
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone is required field'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required field']
    },
    type: {
        type: String,
        required: [true, 'Type is required field']
    },
    count: {
        type: Number,
        required: [true, 'Number of boat needed is required field']
    },
    duration: {
        type: Number,
        required: [true, 'Duration is required field']
    },
    date: {
        type: Date,
        required: [true, 'Date is required field']
    },
    startTime: {
        type: String,
        required: [true, 'startTime is required field']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
//Creating a virtual attributes - we can not use these virtual properties in quering 
rentboatSchema.virtual('endTime').get(function () {
    return this.duration + this.startTime;
})


// Creatung a model using the schema created above
const Rentboat = mongoose.model('Rentboat', rentboatSchema);


module.exports = Rentboat