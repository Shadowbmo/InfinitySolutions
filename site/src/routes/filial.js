var express = require("express");
var router = express.Router();

var filialController = require("../controllers/filialController");

router.get("/", function (req, res) {
    filialController.testar(req, res);
});

router.get("/listar", function (req, res) {
    filialController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de filialController.js
router.post("/cadastrar", function (req, res) {
    filialController.cadastrar(req, res);
})

module.exports = router;