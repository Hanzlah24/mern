import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Add a name"],
    },
    email: {
      type: String,
      required: [true, "Add a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Add a password"],
      unique: true,
    },
  },
  { timestamps: true }
);
export const User=mongoose.model('User',userSchema);