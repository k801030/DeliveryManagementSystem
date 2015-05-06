var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '2015 Spring' });
});


router.get('/front', function(req, res, next) {
  res.render('front', { title: 'Front' });
});

router.get('/back', function(req, res, next) {
  res.render('back', { title: 'Back' });
});


router.get('/stringParser', function(req, res, next) {
  res.render('stringParser', { title: 'stringParser' });
});

module.exports = router;
