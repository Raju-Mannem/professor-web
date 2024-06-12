import express from 'express';
import serverless from 'serverless-http';
const app=express();
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.render("index.ejs")
})
app.get('/login',(req,res)=>{
    res.render("login.ejs")
})
app.listen(3000,()=>{
    console.log('server is  running on 3000')
});
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);