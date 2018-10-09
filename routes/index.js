var _ = require('lodash');
var express = require('express');
var locations = require('../models/locations.js');
var iLocations = require('../models/international-locations.js');
var router = express.Router();

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bricks4Biz - Corporate Team Building' });
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

/* GET Locations page. */
router.get('/locations', function(req, res, next) {
	iCountries = _.uniq(iLocations.map(o => o.country));
  res.render('locations', {title: 'Bricks4Biz - Locations', iCountries: iCountries});
});

/* GET location data */
router.get('/locdata/:areacode', function(req, res, next) {
	let areacode = req.params.areacode; 
	let areadata = locations.filter(o => o.code === areacode);

	res.json(areadata);
});

/* GET international location data */
router.get('/ilocdata/:country', function(req, res, next) {
	let country = req.params.country; 
	let areadata = iLocations.filter(o => o.country === country);
	console.log(areadata);

	res.json(areadata);
});

/* POST Email Submission */
router.post('/requestcontact', function(req, res, next){
	res.render('contact', {title: "Bricks4Biz - Contact", success: true});
});

module.exports = router;
