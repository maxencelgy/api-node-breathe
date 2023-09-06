const mongoose = require("mongoose");

const Classe = mongoose.model(
    "Classe",
    new mongoose.Schema({
        title: String,
        personnes: String,
        time: String,
    })
);

module.exports = Classe;


