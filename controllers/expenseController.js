import expenseModel from "../models/expenseModel.js";
import userModel from "../models/userModel.js";

export const addExpense = async (req,res)=>{

    try {
    const {title,amount,category,userId}= req.body;
    

    const user = await userModel.findOne({_id:userId});

    const expenseDate={
        title,amount,category,user
    }

    const newExpense = new expenseModel(expenseDate);
    await newExpense.save();
    res.status(201).json({success:true,message:'New expense added'})
        
    } catch (error) {
        console.log(error);
        res.json({success:false,messagage:error})
        
    }
   
} 

export const getExpense = async (req,res)=>{
  try {
    const {userId}= req.body;
    
     const expenses = await expenseModel.find({});
    res.status(200).json({success:true,expenses})
  } catch (error) {
    res.json({success:false,message:error})
  }
}

export const updateExpense = async (req,res)=>{
    try {
    const expenseId = req.params.id;
    const updatedTitle= req.body;

    await expenseModel.findByIdAndUpdate(expenseId,updatedTitle);
    res.status(200).json({success:true,message:"expense title updated"});
        
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error});
       
    }

}

export const deleteExpense = async (req,res)=>{
    try {
    const id = req.params.id;
    await expenseModel.findByIdAndDelete(id);
    res.status(204).json({success:false,message:'failed to delete expenses'});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"falied to delete the record"});
    }
}

