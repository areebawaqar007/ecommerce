import ErrorHandler from "../../Utils/errorhandler.js";
import { ApiFeatures } from "../../Utils/apifeatures.js";
import { User } from "../models/userModel.js";
import catchAsyncErrors from "../../middleware/catchAsyncErrors.js";



// Register a User
export const registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "sample",
      url: "sample",
    },
  });

    const token = user.getJWTToken();
  res.status(201).json({
    success: true,
      user,
    token
  });
});