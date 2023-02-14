const config = require("../config/auth.config");
const db = require("../models");
const Break = db.break;


// Get all breaks
exports.getAll = (req, res) => {
    Break.find()
        .then(breaks => {
            res.send(breaks);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving breaks."
            });
        });
}

// create
exports.create = (req, res) => {
    const breaks = new Break({
        title: req.body.title,
        time: req.body.temps,
    });

    breaks.save(breaks)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Break."
                });
            }
        );
};

