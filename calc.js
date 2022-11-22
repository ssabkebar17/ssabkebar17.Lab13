const  express= require("express");
const bodyParser=require("body-parser");
const app= express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
var num1=Number(req.body.n1);
var num2=Number(req.body.n2);
var add = req.body.add;
var sub = req.body.sub;

var multi = req.body.multi;
var div = req.body.div;
// console.log(req.body.n1 + " ,"+sub + ","+add + " ,"+ req.body.calculator.add)

var result =0;
if(add){
 result=num1+num2;
}
else if(sub){
     result=num1-num2;
    }
  
  else  if(multi){
     result=num1*num2;
    }
    else  if(div){
     result=num1-num2;
    }

res.send("The result "+result);
//res.redirect('/')
});
app.listen(3030,function(){
console.log("Server started on port 3021");
});