const express = require('express')
const app = express()
const router = express.Router();
  
var path = __dirname + "/views/";

app.use(express.static('public'));

app.use("/",router);
  
router.get("/",function(req, res){
  res.sendFile(path + "index.html");
});
  
router.get("/product",function(req, res){
  res.sendFile(path + "product.html");});
  
router.get("/about",function(req, res){
  res.sendFile(path + "about.html");
});
  
app.use("*",function(req, res){
  res.send("Error 404: Not Found!");
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))