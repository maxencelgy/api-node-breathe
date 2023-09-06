const config = require("../config/auth.config");
const db = require("../models");
const Classe = db.classe;


// Get all classes
exports.getAll = (req, res) => {
    Classe.find()
        .then(classes => {
            res.send(classes);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving classes."
            });
        });
}

// create
exports.create = (req, res) => {
    const classes = new Classe({
        title: req.body.title,
        personnes: req.body.personnes,
        time: req.body.temps,
    });

    classes.save(classes)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Classe."
                });
            }
        );
};

// Delete
exports.delete = (req, res) => {
    const id = req.params.id;

    Classe.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Classe with id=${id}. Maybe Classe was not found!`
                });
            } else {
                res.send({
                    message: "Classe was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Classe with id=" + id
            });
        });
}

// Find by ID
exports.findOne = (req, res) => {
    Classe.findById(req.params.id)
        .then(data => {
                if (!data)
                    res.status(404).send({message: "Not found Classe with id " + req.params.id});
                else res.send(data);
            }
        ).catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving Classe with id=" + req.params.id});
        }
    );
}
