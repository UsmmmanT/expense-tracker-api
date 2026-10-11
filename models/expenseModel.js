import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    title:{type:String,required:true},
    amount:{type:Number,required:true},
    category:{type:String,default:'None',required:true},
    date:{type:Date,default:Date.now},
    user:{type:Object,required:true}
})

const expenseModel= mongoose.models.expense|| mongoose.model('expense',expenseSchema);
export default expenseModel;