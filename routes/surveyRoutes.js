const requireLogin = require('../middlewares/requireLogin')
const requireCredit = require('../middlewares/requireCredit')
const mongoose = require('mongoose')
const Mailer = require('../services/Mailer')
const surveyTemplate = require('../services/emailTemplate/surveyTemplate')
const _=require('lodash');
const { Path } = require('path-parser');
const {URL}=require('url');

const Survey = mongoose.model('survey');
module.exports = app => {

    app.get('/api/surveys',requireLogin,async(req,res)=>{
        const survey= await Survey.find({_user:req.user.id}).select({
            recipients:false
        });

        res.send(survey);


    });
    app.get('/api/surveys/:surveyId/:choice',(req,res)=>{
        res.send('Thanks for voting!')
    });

    app.post('/api/surveys/webhooks',(req,res)=>{
        const events=_.map(req.body,(event)=>{
            const path=new URL(event.url).pathname;
            const p=new Path('/api/surveys/:surveyId/:choice');
            
            const match=p.test(path);
            if(match){
                return {email:event.email,
                surveyId:match.surveyId,
                choice:match.choice};
            }
        });

        const compactEvent=_.compact(events);
        const uniqueEvent=_.uniqBy(compactEvent,'email','surveyId')
        uniqueEvent.forEach(({surveyId,choice,email})=>{
            Survey.updateOne({
                _id:surveyId,
                recipients:{
                    $elemMatch:{
                        email:email,
                        responded:false
                    }
                }
            },{
                $inc:{[choice]:1},
                $set:{'recipients.$.responded':true},
                lastResponded:new Date(),
            }
            ).exec();
        })
       ß
    })
    app.post('/api/surveys', requireLogin, requireCredit,async (req, res) => {

        const { title, body, subject, recipients } = req.body;

        const survey = new Survey({
            title,
            body,
            subject,
            recipients: recipients.split(',').map(email => ({ email: email.trim() })),
            _user: req.user.id,
            dateSent: Date.now(),
        });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    try{
       await mailer.send();
       await survey.save();
       req.user.credit-=1;
       const user=await req.user.save();
       res.send(user);
    }catch(err){
        res.status(422).send(err);
    }
       


    })
}