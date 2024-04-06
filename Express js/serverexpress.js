const express =require("express");
const app =express()
app.use(express.json())
app.use(express.raw())
app.use(express.text)
app.use(express.urlencoded())
app.use(express.static(__dirname+'/public'))
// app.get("/home",(req,res)=>{

//   res.json({
//     hello:"Hellow world"
//   });
// })
app.get("/home",(req,res)=>{
  res.sendFile(__dirname +"/index.html");
});

app.post('/create-post',(req,res)=>{
const postData=(req.body)
console.log(postData.toString())


})

app.listen(5000,()=>{
    console.log('server is listing port going 5000')
})