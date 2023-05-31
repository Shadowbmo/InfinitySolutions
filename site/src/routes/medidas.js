var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idFilial/:numeroDeIdentificacao", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/parametro/:idFilial/:numeroDeIdentificacao", function (req, res) {
    medidaController.buscarParametro(req, res);
});

router.get("/meses/:idFilial/:mes", function (req, res) {
    medidaController.buscarMedidasPorMes(req, res);
});

router.get("/tempo-real/:idFilial/:numeroDeIdentificacao", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.post("/cadastrarOcorrencia/:numeroDeIdentificacao/:idFilial", function (req, res) {
    medidaController.cadastrarOcorrencia(req, res);
})

router.get("/listarocorrencia/:idFilial", function (req, res) {
    medidaController.listarOcorrencias(req, res);
});
router.get("/listarocorrencia2/:idFilial", function (req, res) {
    medidaController.listarOcorrencias2(req, res);
});



router.get("/gerarPDF/:idFilial", function (req, res) {
    medidaController.gerarPDF(req, res);
});

router.get("/ultimas/:idFilial", function (req, res) {
    medidaController.buscarMedidasReinicizalicao(req, res);
})

router.put("/editarParametro/:idFilial/:numeroDeIdentificacao", function (req, res) {
    medidaController.editarParametro(req, res);
});


module.exports = router;