
import dotenv from 'dotenv'
import ConnectToMongoose from './Db.js';
import chartModel from './models/chartModel.js';
import Data from './population_data.json' assert { type: 'json' };
dotenv.config() 

ConnectToMongoose();

const adddata=async()=>{
    try {
        await chartModel.create(Data);
        console.log('success')
    } catch (error) {
        console.log(error)
    }
}
adddata();