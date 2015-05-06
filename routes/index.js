var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/front', function(req, res, next) {
  res.render('front', { title: 'Express' });
});

router.get('/back', function(req, res, next) {
  res.render('back', { title: 'Express' });
});

module.exports = router;
