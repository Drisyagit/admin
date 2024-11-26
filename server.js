const dotenv = require('dotenv');
const express = require('express');
var cors=require('cors');
dotenv.config({path:'./config/config.env'});


const app = express();
var corsOptions ={
  origin:'http://127.0.0.1:5500/'
}

app.use(cors(corsOptions));

//app.use(cors());
 
const PORT = process.env.PORT || 5000;
app.use(express.json());
const logger = require('./middlewares/logger');
const errorhandler= require('./middlewares/errorHandler');

const user = require('./productroute/user');
app.use('/api/auth',user);

const route = require('./productroute/route');
app.use('/api',route);


// app.get('/api/:id',(req,res)=>{
//     console.log("cou:",req.params.id);
//     res.status(200).json({success:true,data:{id:req.params.id,title:"fffd"}})
// })


// app.post('/api',(req,res)=>{
    
//     res.status(200).json({success:true,data:{id:101,title:"fffd"}})
// })



// app.put('/api/:id',(req,res)=>{
    
//     res.status(200).json({success:true,data:{id:req.params.id,title:"tttttnnnn"}})
// })

// app.delete('/api/:id',(req,res)=>{

//     res.status(200).json({success:true,message:`successfully deleted `})
// })
//app.get('/',(req,res)=>{
  //  res.send("hello")
//});
app.use(errorhandler);
app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`);
});