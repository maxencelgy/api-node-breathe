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

// Update
exports.update = (req, res) => {
    const id = req.params.id;

    Classe.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Classe with id=${id}. Maybe Classe was not found!`
                });
            } else res.send({message: "Classe was updated successfully."});
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Classe with id=" + id
            });
        });
}


// Get one classe by title
exports.findOne = (req, res) => {
    const title = req.params.title;

    Classe.findOne({title: title})
        .then(data => {
            if (!data)
                res.status(404).send({message: "Not found classe with title " + title});
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({message: "Error retrieving classe with title=" + title});
        });
}