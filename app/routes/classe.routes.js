const {authJwt} = require("../middlewares");
const controller = require("../controllers/classe.controller");

module.exports = function (app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get("/api/classe/all", controller.getAll);
    app.get("/api/classe/:title", controller.findOne);
    app.post("/api/classe/create", controller.create);
    app.put("/api/classe/update/:id", controller.update);
    app.delete("/api/classe/delete/:id", controller.delete);
};
