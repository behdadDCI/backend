import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
  userId: { type: String },
  title: { type: String },
  content: { type: String },
  image: { type: String },
});

export default mongoose.model("Blog", blogSchema);
