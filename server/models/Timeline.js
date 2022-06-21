const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimelineSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["education", "experience"],
    },
    time: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("timelines", TimelineSchema);
