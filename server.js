const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.PORT||3000;
const User=require("./routes/UserRoute");
const UserRoute=User.route;
app.use(bodyParser.json());
app.use(UserRoute);

app.listen(port,()=>{
    console.log("app is running on port 3000")
});
