var express = require("express");
var router = express.Router();

var responsavelController = require("../controllers/responsavelController");

router.get("/", function (req, res) {
    responsavelController.testar(req, res);
});

router.get("/listar/:idEmpresa", function (req, res) {
    responsavelController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de responsavelController.js
router.post("/cadastrar", function (req, res) {
    responsavelController.cadastrar(req, res);
})

module.exports = router;