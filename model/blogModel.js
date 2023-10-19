import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
    userId:{type:String},
    title:{type:String},
    content:{type:String},
    image:{type:Date,default:new Date},
});

export default mongoose.model("Blog",blogSchema)