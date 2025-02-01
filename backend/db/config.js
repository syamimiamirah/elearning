const mongoose = require('mongoose');

const connectDB =async ()=>{
    mongoose.connect("mongodb://localhost:27017/elearning");
    const userSchema = new mongoose.Schema({});
    const user = mongoose.model("users", userSchema);
    const data = await user.find();
    console.warn(data);
}
connectDB();