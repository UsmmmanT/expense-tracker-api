import express from 'express'
import { addExpense,deleteExpense,getExpense,updateExpense} from '../controllers/expenseController.js';
import {userAuth} from '../middlewares/userMiddleware.js';



const expenseRouter= express.Router();

expenseRouter.post('/add',userAuth,addExpense);
expenseRouter.get('/all',userAuth,getExpense);
expenseRouter.patch('/update/:id',updateExpense);
expenseRouter.delete('/remove/:id',deleteExpense);

export default expenseRouter;



