const express = require('express');
const connectDB = require('./config/db');
const bodyParser= require('body-parser');
const path = require('path');
const app = express();

connectDB();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({
    limit: "100mb",
    extended: false
  }));

  app.use(bodyParser.json({limit: "100mb"}));
    app.get("/",(req,res)=>{
    res.send("hello")
})

app.use('/register',require('./routes/register'))
app.use('/auth',require('./routes/auth'));
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
