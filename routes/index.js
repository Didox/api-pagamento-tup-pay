var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/pagamento/:cliente_id', function(req, res, next) {
  res.send({
    pagamento_id_transacao: new Date().getTime(),
    cliente_id: req.params.cliente_id,
    status: "Pagamento realizado"
  });
});

module.exports = router;
