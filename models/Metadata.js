const mongoose = require("mongoose");

const AttributeSchema = new mongoose.Schema(
  {
    trait_type: String,
    value: String,
  },
  { _id: false }
);

const MetadataSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    required: true,
  },
  attributes: {
    type: [AttributeSchema],
  },
});

module.exports = mongoose.model("Metadata", MetadataSchema);
