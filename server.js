const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.port||3000;
const UserRoute=require("./routes/UserRoute");
app.use(bodyParser.json);
app.use(UserRoute);

app.listen(port,()=>{
    console.log("app is running on port 3000")
});
