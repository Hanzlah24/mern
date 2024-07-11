import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../models/users.js";

//@desc resgiter User
//@route POST /api/users
//@access public
export const postUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("add a all fields");
  }
  //Hash the password before saving it
  const salt = await bcrypt.genSalt(10);
  const HashPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    name,
    email,
    password: HashPassword,
  });
  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token:generateToken(user.id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid user Data");
  }
});

//@desc login User
//@route POST /api/users/login
//@access public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token:generateToken(user.id)
    });
  } else {
    res.status(400);
    throw new Error("Invalid user Data");
  }
});

//@desc Get User
//@route  GET /api/users/me
//@access private
export const getUser = asyncHandler(async (req, res) => {
  const {_id,name,email} = await User.findById(req.user.id);
  res.status(200).json({
    id:_id,
    name,
    email,
  });
});

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
}