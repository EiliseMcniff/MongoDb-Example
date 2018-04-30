

var mongoose = require("mongoose");

var userSchema =  mongoose.Schema({
	ident: {
		required: true,
		unique: true,
		type:String
	},
	name: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
