const express = require("express");
const router = express.Router();
const {
  getAllMetadata,
  getMedata,
  createMetadata,
  getTotalMetadataDocsCount,
} = require("../controllers/metadata");

router.get("/", getAllMetadata);
router.post("/", createMetadata);
router.get("/supplyCount", getTotalMetadataDocsCount);
router.get("/:id", getMedata);
module.exports = router;
