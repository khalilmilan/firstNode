const http = require("http");

const server=http.createServer((req,res)=>{
// le status de retour
res.statusCode=200
// type de retour 
//res.setHeader("content-type","application/json")
res.setHeader("content-type","text/html")
// retour
res.write("hala wlh \n");
// get l'url 
res.write(req.url);
//res.write("ti winek");

// mise une fin a la boucle infinie
res.end();
})

server.listen(5000,()=>{console.log("server yemchi")})