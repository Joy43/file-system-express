const http = require("node:http");
const url=require("url")
const fs=require("fs");
const { json } = require("express");
// --------json data create----------



const server = http.createServer((req, res) => {

  console.log(req.url,req.method);
 const parsedURL=new URL(req.url,`http://${req.headers.host}`);

const pathName=parsedURL.pathname;

// -------router------------
  if(pathName==="/home"&& req.method==="GET"){
    fs.readFileSync(__dirname + '/index.html', 'utf-8',(err,data)=>{
      if (err) {
        throw new Error('Error writing to file:', err);
    
    }
    const query=parsedURL.searchParams
const postId=query.get('id');
const expectedPost=json.parse(data).find((post)=>post.id==postId)

console.log(expectedPost);
res.writeHead(200,{
  'Content-type':"text/html",
})

res.end(JSON.stringify(expectedPost));
}) }
// ------------post--------------
else if(pathName==="/posts" && req.method==="GET"){


 fs.readFileSync(__dirname + '/post.json', 'utf-8',(err,data)=>{
  if (err) {
    throw new Error('Error writing to file:', err);

}
res.setHeader("Content-type","application/json");
res.statusCode=200;
res.end(data);
 });


}
   else{
    res.end("Not found")
  }
  
});
server.listen(5000, "127.0.0.1", () => {
  console.log("server is listing server");
});
