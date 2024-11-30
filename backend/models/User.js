import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHER"],
    },
    profileImage: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin"], // Define roles here
      default: "user", // Default role is 'user'
    },
    isVerified: {
      type: Boolean,
      default: false, // Initially, users are not verified
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Users = mongoose.model("Users", userSchema);
export default Users;
