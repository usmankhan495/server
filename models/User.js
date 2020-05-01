const monogoos=require("mongoose");

const { Schema }= monogoos;

const userSchema=new Schema({
    googleId:String
})

monogoos.model('users',userSchema)