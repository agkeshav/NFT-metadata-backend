const express = require("express");
const router = express.Router();
const {
  getAllMetadata,
  getMedata,
  createMetadata,
} = require("../controllers/metadata");

router.get("/", getAllMetadata);
router.post("/", createMetadata);
router.get("/:id", getMedata);
module.exports = router;
