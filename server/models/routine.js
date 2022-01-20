const mongoose = require("mongoose");

const routineSchema = mongoose.Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    routines: {
      type: Array,
    },
  },
  { timestamps: true },
);

const Routine = mongoose.model("Routine", routineSchema);

module.exports = { Routine };
