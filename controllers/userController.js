import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET);
}

export const loginUser = async (req,res)=>{
      try {
          const {email,password}=req.body;
        const user = await userModel.findOne({email});

        
        if (bcrypt.compare(password,user.password)){
            const token=createToken(user._id);
            res.json({success:true,token});
        }
        else{
            res.json({success:false,message:"Authentication failed"});
        }
      } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
      }
}

export const registerUser = async (req,res)=>{
    try {
        const {name,email,password} = req.body;
    
    const salt= await bcrypt.genSalt(10);
    const hashedPassword= await bcrypt.hash(password,salt);

    const userData={name,email,password:hashedPassword};

    const newUser = new userModel(userData);
    const user = await newUser.save();

    const token = createToken(user._id);
    res.json({success:true,token});
    } catch (error) {
        res.json({succes:false,message:error.message});
    }


} 