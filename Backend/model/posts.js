import mongoose from "mongoose";
const PostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    date: {
      type: Date,
      },
  },
 { timestamps: true }
);
const Post = mongoose.model("Post", PostSchema);

export default Post;