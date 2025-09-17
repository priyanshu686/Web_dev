const express = require('express');
const multer = require('multer')
const upload = multer({dest:'upload/'})

const app = express();

app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.file);
  // next();
  return res.redirect('/home')
})
var hbs = require('hbs');

hbs.registerPartials(__dirname + '/views', function (err) {});

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get("/home",(req,res)=>{
  res.render("home.hbs",{})
})

app.listen(3000,()=>{
    console.log("Server Started 3000")
})

