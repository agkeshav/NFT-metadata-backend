const Metadata = require("../models/Metadata");

const getAllMetadata = async (req, res) => {
  try {
    const metadata = await Metadata.find({});
    res.status(200).json({ metadata });
  } catch (err) {
    res.status(500).json(err);
  }
};

const createMetadata = async (req, res) => {
  try {
    const metadata = await Metadata.create(req.body);
    res.status(201).json(metadata);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getMedata = async (req, res) => {
  try {
    const metadata = await Metadata.findOne({ id: req.params.id });
    if (!metadata) {
      return res
        .status(404)
        .json({ msg: `No metadata with id ${req.params.id}` });
    }
    res.status(200).json(metadata);
  } catch (err) {
    res.status(500).json(err);
  }
};

const getTotalMetadataDocsCount = async (req, res) => {
  try {
    const count = await Metadata.countDocuments();
    res.json({ count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch count" });
  }
};
module.exports = {
  getAllMetadata,
  createMetadata,
  getMedata,
  getTotalMetadataDocsCount,
};
