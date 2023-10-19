import mongoose from "mongoose";
const dbConnect = () => {
    try {
        mongoose.set("strictQuery", false);
        mongoose.connect(process.env.MONGO_URL, {
            useUniFiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("db conected !!!")
    } catch (error) {
        console.log(error)
    }
}
export default dbConnect;