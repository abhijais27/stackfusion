import Post from '../model/posts.js';
import express from 'express';
const router = express.Router();
//create a post

router.post("/", async (req, res) => {
  if (!(req.body.phone.length === 10)) {
    return res.status(200).json({ msg: "phone number should be 10 digits" });
  }
  console.log(req.body);
  const{phone, name, email, date}=req.body;
  const newPost = new Post({
    phone:Number(phone),
    name,
    email,
    date: new Date(date),
    });
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});
export default router;