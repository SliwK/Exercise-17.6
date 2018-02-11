var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');
app.use('/store', function(req, res, next){
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', function (req, res) {
    res.send('Hello world!');
});


app.get('/first-template', function(req, res){
    res.render('first-template');
});

app.get('/dynamic-view', function(req, res){
    res.render('dynamic', {
      name: 'My dynamic page',
      url: 'http://www.google.com',
    });
});


app.get("/auth/google", function(req, res){
  res.render('google');
});


app.get('/store', function (req, res) {
    res.render('store', {
      userName: "Kris"
    });
});

app.listen(3000);
app.use(function (req, res, next) {
    res.status(404).send('Sorry we counld not find what you are looking for!');
});
