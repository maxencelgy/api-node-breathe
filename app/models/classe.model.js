const mongoose = require("mongoose");

const Classe = mongoose.model(
    "Classe",
    new mongoose.Schema({
        title: String,
        personnes: String,
    })
);

module.exports = Classe;


