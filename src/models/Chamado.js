const mongoose = require('mongoose');

const MatriculaSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    matricula: {
        type: String,
        required: true,
    },
    setor: {
        type: String,
        required: true,
    },
    localizacao:String,
    servico: {
        type: String,
        required: true,
    },
    anexo: String,
}, {
        timestamps: true,
});