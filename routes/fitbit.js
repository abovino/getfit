var express = require('express');
var router = express.Router();
var passport = require('passport');
var FitbitStrategy = require('passport-fitbit-oauth2').FitbitOAuth2Strategy;

/* GET home page. */
router.get('/', function(req, res, next) {
  /*res.render('fitbit', {title: 'Fitbit data goes here'});*/
  passport.authenticate('fitbit', {scope: ['activity', 'heartrate', 'location', 'profile']})
});

module.exports = router;
