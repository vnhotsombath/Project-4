const Post = require("../models/post");
const User = require('../models/user');

const S3 = require("aws-sdk/clients/s3");
const s3 = new S3(); 
const { v4: uuidv4 } = require("uuid");
const e = require("express");
const BUCKET_NAME = process.env.AWS_BUCKET_NAME;

module.exports = {
  create,
  index,
  getPost
};

function create(req, res) {
  console.log(req.body, req.file, req.user); // < req.user comes the config/auth middleware that is mounted before our controllers in the server.js
  const key = `thegoodeatsco/posts/${uuidv4()}-${req.file.originalname}`;
  const params = { Bucket: BUCKET_NAME, Key: key, Body: req.file.buffer };

  s3.upload(params, async function (err, data) {
    console.log("=======================");
    console.log(err, " err from aws");
    console.log("=======================");
    if (err) return res.status(400).json({ err: "Check Terminal error with AWS" });
    try {
      // Using our model to create a document in the posts collection in mongodb
      const post = await Post.create({
        title: req.body.tile,
        description: req.body.description,
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

async function index(req, res) {
  try {
    const posts = await Post.find({}).populate("user").exec();
    res.status(200).json({ data: posts });
  } catch (err) {
    res.status(400).json({ err });
  }
}

async function getPost(req, res) {
    try{
        const post = await Post.findById(req.params.id);
        resizeTo.status(200).json(post);
    } catch (err) {
        res.stauts(500).json(err);
    }
}

// async function getAllPost(req, res){
//     const username = req.query.user;
//     const catName= req.qurey.cat;

//     try{
//         let posts;
//         if(username){
//             posts = await Post.find({username});
//         } else if (catName){
//             posts = await Post.find({
//                 categories: {
//                     $in: [catName],
//                 },
//             });
//         } else {
//             posts = await Post.find();
//         }
//         res.status(200).json(posts)
//     } catch(err){
//         res.status(500).json(err);
//     }
// }

// async function updatePost(req, res){
//     try {
//         const post = await Post.findById(req.params.id);
//         if (post.username === req.body.username){
//             try{
//                 const updatePost = await Post.findByIdAndUpdate(
//                     req.params.id, {
//                         $set: req.body,
//                     },
//                     { new: true }
//                 );
//                 res.status(200).json(updatePost);
//             } catch(err){
//                 res.status(500).json(err);
//             }
//         } else {
//             res.status(400).json('You can only update YOUR post!');
//         }
//     } catch(err){
//         res.status(500).json(err)
//     }
// }