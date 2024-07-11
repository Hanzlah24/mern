import express from "express";
import { getProjects,setProject,postProject,deleteProject,getOneProject } from "../controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();


router.route('/:id',).get(getProjects).put(protect,setProject).post(protect,postProject).delete(protect,deleteProject);
router.route('/project/:id').get(getOneProject);
export default router;