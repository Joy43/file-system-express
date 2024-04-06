const http = require("node:http");
const url=require("url")

// --------json data create----------

const posts=[
  {
    "id":1,
    "name": "ssjoy",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
  },
   {
    "id":2,
    "author": "",
    "license": "ISC",
   },
     {
      "id":3,
      "cors": "^2.8.5",
      "express": "^4.18.2",
      "socket.io": "^4.7.4",
      "ytdl-core": "^4.11.5"
    }
 
]

const server = http.createServer((req, res) => {

  console.log(req.url,req.method);
 const parsedURL=new URL(req.url,`http://${req.headers.host}`);

const pathName=parsedURL.pathname;

// -------router------------
  if(pathName==="/home"&& req.method==="GET"){
res.writeHead(200,{
  'Content-type':"text/html",
})

res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
</head>
<body>
  <h1>Hello World! Welcome to my home</h1>
</body>
</html>
`);
  } else if(pathName==="/posts" && req.method==="GET"){
  //   res.writeHead(200,{
  //     'Content-type':"application/json",
  //     email:"ssjoy@gmail.com"
  //   });
  //    res.end(JSON.stringify(posts));
  // }
const query=parsedURL.searchParams
const postId=query.get('id');
const expectedPost=posts.find((post)=>post.id==postId)

res.setHeader("Content-type","application/json");
res.statusCode=200;
res.end(JSON.stringify(expectedPost));
}
   else{
    res.end("Not found")
  }
  
});
server.listen(5000, "127.0.0.1", () => {
  console.log("server is listing server");
});
