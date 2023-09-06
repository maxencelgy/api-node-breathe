const mongoose = require("mongoose");

const Break = mongoose.model(
    "Classe",
    new mongoose.Schema({
        title: String,
        personnes: String,
    })
);

module.exports = Break;


