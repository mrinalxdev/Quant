const router = require("express").Router();
const Post = require("../Modals/Post");
const { verifyToken } = require("./verfiytoken");

router.post("/user/post", verifyToken, async (req, res) => {
  try {
    let { title, image, video } = req.body;
    let newPost = new Post({
      title,
      image,
      video,
      user: req.user.id,
    });
    // await newPost(); : This line was causing error
    res.status(200).json(newPost);
  } catch (error) {
    return res.status(500).json("Internal Server Error");
  }
});

router.get('/get/post', verifyToken, async(req, res)=> {
    try {
        const myPost = await Post.findById({user : req.user.id})
        if (!myPost) {
            return res.status(200).json("You dont have any Post")
        }
    } catch (error) {
        
    }
})

module.exports = router;
