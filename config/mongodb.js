import mongoose from 'mongoose'

 const connectDb = async ()=>{

    const mongoUri = process.env.MONGO_CONNECTION_URI;

    if(!mongoUri){
        throw new Error('No mongodb uri present');
    }

    mongoose.connection.on('connected',()=>{console.log ("mongodb connected successfully")});
    await mongoose.connect(`${mongoUri}/e-commerce`);

}
export default connectDb;