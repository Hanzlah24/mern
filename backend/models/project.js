import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "Add a title"],
  },
  description: {
    type: String,
  },
  explanation: {
    type: String,
  },
  stars: {
    type: Number,
    required: [true, "Add stars"],
  },
  logo: {
    type: String,
    required: false,
  },
});
export const Project = mongoose.model("Project", projectSchema);
