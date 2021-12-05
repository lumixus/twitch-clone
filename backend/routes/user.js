import express from "express";
import mongoose from "mongoose";
import { generateToken, auth } from "../utils.js";
import bcrypt from "bcrypt";
import userSchema from "../models/user.js";

let userRouter = express.Router();

  
userRouter.post("/login", async (req, res) => {
    const User = mongoose.model("users", userSchema);
    console.log(req.body);
    const result = await User.findOne({ username: req.body.username });
    if(result === null){
      res.status(403).send({error : "User not found"});
      return;
    }

    if(bcrypt.compareSync(req.body.password,result.password)){
      result.token = generateToken(result);
      const updatedData = await result.save();
      res.send({username : updatedData.username, email : updatedData.email, token : updatedData.token});
    }else{
      res.status(403).send({error : "Invalid Credentials"});
    }
    
  });
  
  
  userRouter.post("/register", async (req, res) => {
    const User = mongoose.model("users", userSchema);
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    const newUser = new User(req.body);
    newUser.token = generateToken(newUser);
    const addedUser = await newUser.save();
  
    res.send(addedUser);
  });



  export default userRouter;
  