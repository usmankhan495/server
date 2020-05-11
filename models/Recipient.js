const mongooe=require('mongoose');

const {Schema} =mongooe;

const recipientSchema=new Schema({
    email:String,
    responded:{type:Boolean,default:false},
    
});

module.exports=recipientSchema;