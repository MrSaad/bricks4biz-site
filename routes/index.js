var _ = require('lodash');
var express = require('express');
const multiparty = require('multiparty');
var locations = require('../models/locations.js');
var iLocations = require('../models/international-locations.js');
const sgMail = require('@sendgrid/mail');
const demo_template = require('../models/email-template.js');

let sendToEmail = process.env.SEND_TO_EMAIL;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('{{', '}}');
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
	const form = new multiparty.Form();

	// splits form-data into keys, fields and files, where values are arrays of associated data
	form.parse(req, function(err, fields, files) {

		if (err) {
			console.log("invalid request: " + err.message);
			return;
		}

		// Extract fields from form
		try {
			const formData = {
				name : 			fields.name[0],
				org : 			fields.org[0],
				email : 		fields.email[0],
				phone : 		fields.phone[0],
				location : 	fields.location[0],
				msg : 			fields.msg[0],
			};

			// Create SendGrid message and send email to HyperCare
			const msg = {
				'personalizations': [{
					'to': [{
						"email": sendToEmail,
						"name": "Testing Stuff"
					}],
					'subject': 'Contact Request from {{fullname}} @ {{org}}',
					'substitutions': {
						'fullname': formData.name,
						'org': formData.org,
						'eml': formData.email,
						'phone': formData.phone,
						'loc': formData.location,
						'msg': formData.msg
					}
				}],
				'from': {
					"email": formData.email
				},
				'reply_to': {
					'email': formData.email,
					'name': formData.name
				},
				'html': demo_template
			};
			sgMail.send(msg);

			console.log(formData);

		} catch (err) {
			console.log("error: \n" + err);
			return;
		} finally {
			// do nothing
		}
	});

	res.render('contact', {title: "Bricks4Biz - Contact", success: true});
});

module.exports = router;
