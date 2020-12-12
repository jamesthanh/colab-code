var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Colab Code - Realtime Pair Coding' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Colab Code - Realtime Pair Coding' });
});

module.exports = router;
