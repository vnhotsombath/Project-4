const Post = require("../models/post");

const S3 = require("aws-sdk/clients/s3");
const s3 = new S3();
const { v4: uuidv4 } = require("uuid");
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

module.exports = {
    create,
    index,
    deletePost,
    getPost,
}

// ----CREATE---- //
function create(req,res){
    console.log(req.body, req.file, req.user);
    const key = `thegoodeatsco/posts/${uuidv4()}-${req.file.originalname}`;
    const params = { Bucket: BUCKET_NAME, Key: key, Body: req.file.buffer };

  s3.upload(params, async function (err, data) {
    console.log("=======================");
    console.log(err, " err from aws");
    console.log("=======================");
    if (err) return res.status(400).json({ err: "Check Terminal error with AWS" });
    try {
     
      const post = await Post.create({
        title: req.body.title,
        content: req.body.content,
        user: req.user,
        photoUrl: data.Location, // < this is from aws
      });
      // respond to the client!
      res.status(201).json({ data: post });
    } catch (err) {
      res.status(400).json({ err });
    }
  });
}

// ----INDEX---- //
async function index(req, res) {
    try {
      const posts = await Post.find({}).populate("user").exec();
      res.status(200).json({ data: posts });
    } catch (err) {
      res.status(400).json({ err });
    }
  }


// ----GET POST DETAILS---- //
async function getPost(req, res) {
  console.log("details id --> ", req.params.id); 

  try {
    const post = await Post.find({ _id: req.params.id }).populate("_id").exec();
    console.log("details post 0--> ", post); 
    if (!post){
      console.log(" error in details in constroler");
    }
    if (!post) return res.status(404).json({ error: "Post not found" });
      res.status(200).json({
      data: {
        post: post,
      }
    });
  } catch (err) {
    console.log(err.message, " <- Post controller");
    res.status(400).json({ error: "Something went wrong" });
  }
}



// ----DELETE---- //
async function deletePost(req,res){
  try{
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json({});
  } catch (err){
    console.log(err, "Error in deletePost");
    res.status(400).json({err})
  }
}
