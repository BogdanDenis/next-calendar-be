const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const UserModel = mongoose.model('User', userSchema);

UserModel.createCollection().then(() => {
  console.log('"Users" collection is created!');
});

module.exports = { UserModel };
