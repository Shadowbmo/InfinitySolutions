var express = require("express");
var router = express.Router();

var totemController = require("../controllers/totemController");

router.get("/", function (req, res) {
    totemController.testar(req, res);
});

router.get("/listar/:id", function (req, res) {
    totemController.listar(req, res);
});

router.get("/listar2", function (req, res) {
    totemController.listar2(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de totemController.js
router.post("/cadastrar", function (req, res) {
    console.log("passei pela router")
    totemController.cadastrar(req, res);
})

router.put("/deletar/:fkTotem/:fkEmpresa", function (req, res) {
    console.log("passei pela router")
    totemController.deletar(req, res);
})



router.post("/cadastrarLimite", function (req, res) {
    totemController.cadastrarLimite(req, res);
})
module.exports = router;