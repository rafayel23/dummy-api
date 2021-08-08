const mongoose = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'required field']
    },
    email: {
        type: String,
        required: [true, 'required field'],
        validate: {
            validator: (value) => isEmail(value),
            message: 'invalid value - {VALUE}'
        },
        unique: true,
},
    address: {
        street: {
            type: String,
            required: [true, 'required field']
        },
        city: {
            type: String,
            required: [true, 'required field']
        },
    },
    phones: {
        type: [{
            type: String,
            validate: {
                validator: (value) => /^\+\d{8,12}$/.test(value),
                message: 'invalid value - {VALUE}'
            }
        }],
        validate: {
            validator: (value) => value.length > 0,
            message: 'at least one item required'
        },
    } 
}, {versionKey: false});

module.exports = mongoose.model('User', UserSchema);