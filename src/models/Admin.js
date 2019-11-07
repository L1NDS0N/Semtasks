const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    usuario:{
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    matricula: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
});

module.exports = mongoose.model('Admin', AdminSchema);