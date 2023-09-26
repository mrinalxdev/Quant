const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  video: {
    type: String,
  },
  like : {
    type : Array,
    default : 0,
  },
  dislike: {
    type: Array,
    default : 0,
  },
  comments: [
    {
        user : {
            type : mongoose.Schema.ObjectId,
            required : true,
        },
        username : {
            type : String,
            required: true,
        }
    }
  ],
});

module.exports = mongoose.model("Post", PostSchema);
