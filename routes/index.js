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

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Bricks4Biz - Contact' });
});

/* GET Works page. */
router.get('/works', function(req, res, next) {
  res.render('works', { title: 'Bricks4Biz - How it Works' });
});

/* POST Email Submission */
router.post('/requestcontact', function(req, res, next){
	res.render('contact', {title: "Bricks4Biz - Contact", success: true});
});

module.exports = router;
