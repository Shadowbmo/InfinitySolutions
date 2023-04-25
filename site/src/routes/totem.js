var express = require("express");
var router = express.Router();

var totemController = require("../controllers/totemController");

router.get("/", function (req, res) {
    totemController.testar(req, res);
});

router.get("/listar", function (req, res) {
    totemController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de totemController.js
router.post("/cadastrar", function (req, res) {
    console.log("passei pela router")
    totemController.cadastrar(req, res);
})

module.exports = router;