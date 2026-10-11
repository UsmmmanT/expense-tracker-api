import jwt from 'jsonwebtoken'

export const userAuth = async ( req,res,next)=>{
   try {
     const{token}=req.body;

    if(!token){
        res.status(400).json({success:false,message:"Login In/sign up"});
    }
    const decodedToken= await jwt.verify(token,process.env.JWT_SECRET);
    req.body.userId=decodedToken.id;
    next();
    
   } catch (error) {
    console.log(error);
    res.status(500).json({success:false,message:error.message});
    
   }
    
}