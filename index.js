import express from 'express';
const app=express();
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.render("index.ejs")
})
app.get('/login',(req,res)=>{
    res.render("login.ejs")
})
app.get('/sitemap',(req,res)=>{
    res.render("sitemap.xml")
})
app.listen(3000,()=>{
    console.log('server is  running on 3000')
});