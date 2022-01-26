const mongoose = require("mongoose");

const recordSchema = mongoose.Schema(
  {
    id: {
      type: String,
    },
    date: String,
    type: {
      type: Object,
    },
    records: {
      type: Array,
    },
  },
  { timestamps: true },
);

const Record = mongoose.model("Record", recordSchema);

module.exports = { Record };
