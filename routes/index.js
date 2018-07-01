var express = require('express');
var locations = require('../models/locations.js');
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

/* GET Legal page. */
router.get('/legal', function(req, res, next) {
  res.render('legal', { title: 'Bricks4Biz - Privacy Policy & Terms of Service' });
});

/* GET location data */
router.get('/locdata/:areacode', function(req, res, next) {
	let areacode = req.params.areacode; 
	let areadata = locations.filter(o => o.code === areacode);

	res.json(areadata);
});

/* POST Email Submission */
router.post('/requestcontact', function(req, res, next){
	res.render('contact', {title: "Bricks4Biz - Contact", success: true});
});

module.exports = router;
