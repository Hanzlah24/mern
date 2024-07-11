import mongoose from "mongoose";

export const languageSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Add a user"],
  },
  name: {
    type: String,
    required: [true, "Add a name"],
  },
  stars: {
    type: Number,
    required: [true, "Add the rating for sorting"],
  },
  description: {
    type: String,
    required: false,
  },
  logo: {
    type: String,
    required: false,
  },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
});

export const Language = mongoose.model("Language", languageSchema);
