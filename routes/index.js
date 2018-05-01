var express = require('express');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bricks4Biz - Corporate Team Building' });
});

/* GET Locations page. */
router.get('/locations', function(req, res, next) {
  res.render('locations', { title: 'Bricks4Biz - Locations' });
});

module.exports = router;
