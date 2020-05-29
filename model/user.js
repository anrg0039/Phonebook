var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodeauth');
var db = mongoose.connection;

var UserSchema = mongoose.Schema({
	 name: {
		type: String,
		index: true
	},
	phone: {
		type: String
		
	},
	email: {
		type: String
		
	},
	dob: {
		type: String
		
	}

});

var User = module.exports = mongoose.model('User',UserSchema);
module.exports.createUser = function(newUser, callback)
{
	newUser.save(callback);
}