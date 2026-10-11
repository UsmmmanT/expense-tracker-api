import express from 'express';
import connectDb from './config/mongodb.js'
import 'dotenv/config';
import expenseRouter from './routes/expenseRoute.js';
import userRouter from './routes/userRoutes.js'

const app=express();
const port = 3000;

app.use(express.json());



connectDb();

app.use('/api/expense',expenseRouter);
app.use('/api/user',userRouter);

app.get('/',(req,res)=>{
    res.send('Api working');
}) 

app.listen(port,()=>{console.log("Listening on port 3000")})