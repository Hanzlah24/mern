import asyncHandler from "express-async-handler";
import { Language } from "../models/language.js";
import { User } from "../models/users.js";
import { Project } from "../models/project.js";
//@desc Get projects
//@route  GET /api/projects/:id
//@access public
export const getProjects = asyncHandler(async (req, res) => {
  const language = await Language.findById(req.params.id).populate({
    path: 'projects',
    options: { sort: { stars: -1 } }
  });
  if (!language) {
    res.status(400);
    throw new Error("no data found against this ID");
  }
  res.status(200).json(language);
});
//@desc post Project
//@route POST /api/projects/:id
//@access private
export const postProject = asyncHandler(async (req, res) => {
  if (!req.body.title && !req.body.stars) {
    res.status(400);
    throw new Error("add a name and stars field");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not authorized");
  }
  const description =req.body.description || '';
  const explanation = req.body.explanation || '';
  const logo = req.body.logo || process.env.DEFAULT_LOGO
  const project = await Project.create({
    title: req.body.title,
    stars: req.body.stars,
    description,
    explanation,
    logo,
  });
  //adding the project to language using params id
  const language = await Language.findById(req.params.id);
  if (!language) {
    res.status(400);
    throw new Error("no data found against this ID");
  }
  language.projects.push(project._id);
  await language.save();
  res.status(200).json(project);
});

//@desc update project
//@route PUT /api/projects/:id
//@access private
export const setProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(400);
    throw new Error("no data found against this ID");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not authorized");
  }
  const updatedProject = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedProject);
});

//@desc delete project
//@route DELETE /api/projects/:id
//@access private
export const deleteProject = asyncHandler(async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(400);
    throw new Error("no data found against this ID");
  }
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(401);
    throw new Error("user not authorized");
  }
  // Find the language that has this project
  const language = await Language.findOne({ projects: project._id });
  if (language) {
    // Remove the project from the language's projects array
    language.projects.pull(project._id);
    await language.save();
  }
  await Project.deleteOne({ _id: req.params.id });
  res
    .status(200)
    .json({ message: `deleted project using id ${req.params.id}` });
});


//@desc get project
//@route GET /api/projects/project/:id
//@access public
export const getOneProject=asyncHandler(async(req,res)=>{
  const project = await Project.findById(req.params.id);
  if (!project) {
    res.status(400);
    throw new Error("no data found against this ID");
  }
  res.status(200).json(project);
})