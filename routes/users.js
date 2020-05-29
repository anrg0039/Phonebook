var express = require('express');
var router = express.Router();
var multer = require('multer');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

var User = require('../model/user');
/* GET users listing. */

router.get('/add', function(req, res, next) {
  res.render('add',{title:"add"});
});
router.get('/search', function(req, res, next) {
  res.render('search',{title:"search"});
});

router.post('/search', function(req, res, next) {
res.send('Module is under process');
});

router.post('/update', function(req, res, next) {
res.location('update');
	res.redirect('update');
});
router.post('/delete', function(req, res, next) {
res.send('Module is under process');
});
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add',function(req, res, next) {
	// res.send('respond with a resource');
	var name = req.body.name;
	var phone = req.body.phone;
	var email = req.body.email;
	var dob = req.body.dob;

	// req.checkBody('name','Name is required').notEmpty();
	// req.checkBody('phone','Phone is required').notEmpty();
	// req.checkBody('email','Email is not valid').notEmail();

	var newUser = new User({
		name: name,
		phone: phone,
		email: email,
		dob: dob
	});
	User.createUser(newUser, function(err, user){
		if(err) throw err;
		console.log(user);
	});

	req.flash('success','Your contact has been added.');

	res.location('/');
	res.redirect('/');


});

router.get('/list', function(req, res)
	{
    User.find({},function(err, docs){
    	if(err) res.json(err);
    	else
    		res.render('list',{users: docs});
    });
});

module.exports = router;
