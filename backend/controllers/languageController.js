import asyncHandler from "express-async-handler";
import { Language } from "../models/language.js";
import { User } from "../models/users.js";
//@desc Get Languages
//@route  GET /api/langauges
//@access public
export const getLanguages = asyncHandler(async (req, res) => {
  const languages = await Language.find().sort({ stars: -1 });

  res.status(200).json(languages);
});

//@desc post Languages
//@route POST /api/langauges
//@access private
export const postLanguages = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not authorized");
  }
  
  if (!req.body.name && !req.body.stars) {
    res.status(400);
    throw new Error("add a name field");
  }
  const logo = req.body.logo || process.env.DEFAULT_LOGO
  const description =req.body.description || ''
  const language = await Language.create({
    name: req.body.name,
    stars: req.body.stars,
    user: req.user.id,
    logo,
    description,
  });
  res.status(200).json(language);
});

//@desc update Language
//@route PUT /api/langauges/:id
//@access private
export const setLanguage = asyncHandler(async (req, res) => {
  const language = await Language.findById(req.params.id);
  if (!language) {
    res.status(400);
    throw new Error("no data found against this ID");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  if (language.user.toString() !== req.user.id.toString()) {
    res.status(401);
    throw new Error("user not authorized");
  }
  const updatedLanguage = await Language.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedLanguage);
});

//@desc delete Language
//@route DELETE /api/langauges/:id
//@access private
export const deleteLanguage = asyncHandler(async (req, res) => {
  const language = await Language.findById(req.params.id);
  if (!language) {
    res.status(400);
    throw new Error("no data found against this ID");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not found");
  }
  if (language.user.toString() !== req.user.id.toString()) {
    res.status(401);
    throw new Error("user not authorized");
  }
  await Language.deleteOne({ _id: req.params.id });
  res
    .status(200)
    .json({ message: `deleted language using id ${req.params.id}` });
});
