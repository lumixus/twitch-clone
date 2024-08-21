import mongoose from "mongoose";

// Get schema class from mongoose
const {Schema} = mongoose;



const userSchema = new Schema({
    username : String,
    email : String,
    password : String,
    stream_key : String,
    token : String
});


export default userSchema;