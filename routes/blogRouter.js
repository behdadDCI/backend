import express from "express"
import { createBlog , getBlog, updateBlog,getAllBlogs,deleteBlog } from "../controller/blogController.js"
const router = express.Router();
router.post("/api/blog/create", createBlog)
router.get("/api/blog/display", getAllBlogs)
router.get("/api/blog/display/:id", getBlog)
router.put("/api/blog/update/:id", updateBlog)
router.delete("/api/blog/delete/:id", deleteBlog)
export default router