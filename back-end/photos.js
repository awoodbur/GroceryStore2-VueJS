const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();

// Configure multer so that it will upload to '/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 50000000
  }
});

const users = require("./users.js");
const User = users.model;
const validUser = users.valid;

//const albums = require("./albums.js")
//const Album = albums.model;

const photoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  path: String,
  title: String,
  tags: String,
  created: {
    type: Date,
    default: Date.now
  },
});

const Photo = mongoose.model('Photo', photoSchema);

router.post("/", validUser, upload.single('photo'), async (req, res) => {
  try {

    if (!req.file)
      return res.status(400).send({
        message: "Must upload a file."
      });

    const photo = new Photo({
      user: req.user,
      //album: album,
      path: "/images/" + req.file.filename,
      title: req.body.title,
      tags: req.body.tags,
    });
      await photo.save();
      return res.sendStatus(200);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.get("/", validUser, async (req, res) => {

  try {
    let photos = await Photo.find({
      user: req.user
    }).sort({
      created: -1
    }).populate('user');
    return res.send(photos);
  } catch (error) {
    return res.sendStatus(500);
  }
});


router.get("/all", async (req, res) => {
  try {
    let photos = await Photo.find().sort({
      created: -1
    }).populate('user');
    return res.send(photos);
  } catch (error) {
    return res.sendStatus(500);
  }
});


router.delete('/:id', validUser, async (req, res) => {
    try {
        let photo = await Photo.findOne(
          {_id:req.params.id,
          user: req.user
});
        if (!photo) {
            res.sendStatus(404);
            return;
        }
        await photo.delete();
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(500);
    }
});

router.put('/:id', validUser, async (req, res) => {

  try {
    let photo = await Photo.findOne({
      _id: req.params.id,
      user: req.user
    });
    photo.tags = req.body.tags;
    await photo.save();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

module.exports = {
  model: Photo,
  routes: router,
}
