import express from 'express';
import path from 'path'
const app=express();
const __dirname=path.resolve();
app.use(express.static("public"));
app.get('/',(req,res)=>{
    res.render("index.ejs")
})
app.get('/login',(req,res)=>{
    res.render("login.ejs")
})

app.get('/sitemap', (req, res) => {
    res.header('Content-Type', 'application/xml');
    res.sendFile(__dirname + '/sitemap.xml');
 });
app.listen(3000,()=>{
    console.log('server is  running on 3000')
});