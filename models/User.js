const monogoos=require("mongoose");

const { Schema }= monogoos;

const userSchema=new Schema({
    googleId:String,
    credit:{type:Number,default:0}
})

monogoos.model('users',userSchema)