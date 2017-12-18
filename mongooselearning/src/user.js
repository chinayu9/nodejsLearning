//定义schema及对应model
const mongoose = require('./db.js');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username:{type:String},
	userpwd:{type:String},
	userage:{type:Number},
	logindate:{type:Date}
});

module.exports = mongoose.model('User',UserSchema);