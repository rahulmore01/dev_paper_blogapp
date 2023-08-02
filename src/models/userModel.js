import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  //   user will be asked to click on a email link , then only varified
  isVarified: {
    type: Boolean,
    default: false,
  },
  //   alternative option of using role,

  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  varifyToken: String,
  varifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("User", userSchema);

export default User;
