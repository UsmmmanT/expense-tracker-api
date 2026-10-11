import mongoose from 'mongoose'

const userScehema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

const userModel= mongoose.models.userModel || mongoose.model('userModel',userScehema);
export default userModel;