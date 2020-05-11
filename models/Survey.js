const mongooe=require('mongoose');

const {Schema} =mongooe;
const RecipientSchema=require('./Recipient');

const surveySchema=new Schema({
    title:String,
    subject:String,
    body:String,
    recipients:[RecipientSchema],
    yes:{type:Number,default:0},
    no:{type:Number,default:0},
    _user:{type:Schema.Types.ObjectId,ref:'User'},
    datesend:Date,
    lastResponded:Date
});

mongooe.model('survey',surveySchema);