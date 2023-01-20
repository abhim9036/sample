const express = require('express');
const mongoose  = require('mongoose');
const app = express();


//create a function to connect and check mongodb connection
const connectDB = async()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/e-commerce');

    //create a schema object using mangoose
    const productSchema = new mongoose.Schema({
              name:String,
              email:String,
              password:Number

       });
   
    //create a collection using mongoose (mangoose.model("collectionName, schemaName));
    const product = mongoose.model("users", productSchema);
	
    //Insert Data in the model
   // let data = new productsModel({name:"abhishek", email:"abhisejek@gmail.com", password:154894848});
    let result = await data.save();
    console.log(result);

    //To print existing database
    const data = await product.find();
    console.log(data);

}