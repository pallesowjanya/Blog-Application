const express = require("express");
const imageupload = require("../Helpers/Libraries/imageUpload");

const { getAccessToRoute } = require("../Middlewares/Authorization/auth");
const { 
  addStory, 
  getAllStories, 
  detailStory, 
  likeStory, 
  editStory, 
  deleteStory, 
  editStoryPage 
} = require("../Controllers/story");

const { 
  checkStoryExist, 
  checkUserAndStoryExist 
} = require("../Middlewares/database/databaseErrorhandler");

const router = express.Router();


// CUSTOM MULTER ERROR HANDLER WRAPPER
const uploadStoryImage = (req, res, next) => {
  imageupload.single("image")(req, res, (err) => {
    if (err) {
      // send error to global handler
      return next(err);
    }
    next();
  });
};


// -------- ROUTES ---------

router.post(
  "/addstory",
  [getAccessToRoute, uploadStoryImage],
  addStory
);


router.post("/:slug", checkStoryExist, detailStory);

router.post("/:slug/like",
  [getAccessToRoute, checkStoryExist],
  likeStory
);

router.get(
  "/editStory/:slug",
  [getAccessToRoute, checkStoryExist, checkUserAndStoryExist],
  editStoryPage
);

router.put(
  "/:slug/edit",
  [getAccessToRoute, checkStoryExist, checkUserAndStoryExist, uploadStoryImage],
  editStory
);

router.delete(
  "/:slug/delete",
  [getAccessToRoute, checkStoryExist, checkUserAndStoryExist],
  deleteStory
);

router.get("/getAllStories", getAllStories);

module.exports = router;
