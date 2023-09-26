const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pendingFriends: {
    type: Array,
  },
  friends : {
    type : Array,
  },
  phonenumber: {
    type: Number,
    required: true,
  },
  profile: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
