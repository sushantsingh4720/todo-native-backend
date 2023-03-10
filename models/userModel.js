import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      required: "Name is required",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      required: "Your email is required",
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 16,
      min: 6,
    },
    avatar: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
