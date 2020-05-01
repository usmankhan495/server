const passport = require('passport');
//import passport from 'passport'

module.exports=(app)=>{
app.get('/auth/google',passport.authenticate('google',{
    scope:['profile','email']
}))

app.get('/auth/google/callback',passport.authenticate('google'));

app.get('/api/logout',(req,res)=>{
    req.logout();
    res.send(req.user);
})

app.get('/api/currentuser',(req,res)=>{
    //res.send(req.session );
    res.send(req.user);
})
}

