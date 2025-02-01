const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
  
  // Prevent model overwrite error
  const User = mongoose.models.User || mongoose.model("User", UserSchema);
  
  module.exports = User;