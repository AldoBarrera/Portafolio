var express = require('express');
var path = require('path');

var bodyParser = require('body-parser');
var ejs = require('ejs');
var partials = require('express-partials');
var indexRouter = require('./routes/index');

var aboutUsRouterUI = require('./routes/ui/about-us');
var homeRouterUI = require('./routes/ui/home');

var restFul =  require('method-override');

var app = express();
app.use(partials());


app.use(restFul('_method'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.engine('html', require('ejs').renderFile);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

let router = express.Router();
//router.use(express.static(path.join(__dirname, '/public')));

app.use('/', indexRouter);
app.set('view engine', 'ejs');

app.use('/', aboutUsRouterUI);
app.use('/',homeRouterUI);



//app.use('/', router);


app.get('*', (req, res) => {
  //res.sendFile(path.join(__dirname, './angularapp/dist/angularapp/index.html'));
  res.redirect('/');
});


app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});
