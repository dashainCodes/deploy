const express=require('express');
const app=express()
const cors=require('cors');

app.use(cors());

app.get("/", (req, res) => {
    
   return res.send("hiiiii its working.")
  });

app.listen(4001,()=>{
    console.log("listening to 4001")
})
