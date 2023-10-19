
import Blog from '../model/blogModel.js'


export const createBlog = async (req, res) => {
    const { userId, title, content, image } = req.body
    try {
        const blog = Blog.create({
            userId: userId,
            title: title,
            content: content,
            image: image
        })
        res.json(blog)
    } catch (error) {
        res.json(error)
    }
}
export const getAllBlogs = async (req, res) => {
    try {
        const blog = await Blog.find()
        res.json(blog)
    } catch (error) {
        res.json(error)
    }
}
export const getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById({ _id: req.params.id })
        res.json(blog)
    } catch (error) {
        res.json(error)
    }
}
export const updateBlog = async (req, res) => {
    try {
     await Blog.updateOne({ _id: req.params.id }, { $set: req.body })
        res.json({ message: "Blog successfully updated"});
    } catch (error) {
        res.json(error)
    }
}
export const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.deleteOne({ _id: req.params.id })
        res.json(blog)
    } catch (error) {
        res.json(error)
    }
}