const mongoose = require("mongoose");

const documentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    file: {
      type: String,
      required: true,
    },
    // admin
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
      // ref: "Admin",
    },
    //
    // event: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: ture,
    //   ref: "Event",
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Document", documentSchema);
