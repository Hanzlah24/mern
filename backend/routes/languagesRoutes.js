import express from "express";
import { getLanguages,postLanguages,setLanguage,deleteLanguage } from "../controllers/languageController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();

router.route('/').get(getLanguages).post(protect,postLanguages);

router.route('/:id').put(protect,setLanguage).delete(protect,deleteLanguage)

export default router;
