import mongoose from "mongoose";


export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-ejvbsym-shard-00-00.jkwikcx.mongodb.net:27017,ac-ejvbsym-shard-00-01.jkwikcx.mongodb.net:27017,ac-ejvbsym-shard-00-02.jkwikcx.mongodb.net:27017/?ssl=true&replicaSet=atlas-x6sq79-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');
    } catch (error) {
        console.log('Error while connecting with the database',error.message);
    }
}

export default Connection;