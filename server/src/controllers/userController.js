import ErrorHandler from "../../Utils/errorhandler.js";
import { ApiFeatures } from "../../Utils/apifeatures.js";
import { User } from "../models/userModel.js";
import catchAsyncErrors from "../../middleware/catchAsyncErrors.js";
import { sendToken } from "../../Utils/jwtToken.js";


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

   sendToken(user, 201, res);
});


// Login User
export const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

 sendToken(user, 201, res);
});