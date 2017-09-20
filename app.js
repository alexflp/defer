var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var apply = require('./routes/apply');
var insert =require('./routes/insert');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/apply', apply.index);
app.post('/add_apply', apply.add_apply);


var mysql = require('mysql');
var pool = mysql.createPool({
     connectionLimit : 100, //focus it
     host     : 'ffkk.cgiqg4kguirw.us-west-2.rds.amazonaws.com',
     user     : 'flo',
     password : 'flash123',
     port     : '3306',
     database : 'flouser'
});


app.post('/insert',function(req,res){
    console.log("GET DTAT");
    console.log(req.body);
    pool.getConnection(function(error,conn){

    var queryString = "insert into flasht(conatct_name,conatct_title,email,phone,store,IOB,BRN,storea,web,note) values('"+req.body.conatct_name+"','"+req.body.conatct_title+"','"+req.body.email+"','"+req.body.phone+"','"+req.body.store+"','"+req.body.IOB+"','"+req.body.BRN+"','"+req.body.storea+"','"+req.body.web+"','"+req.body.note+"')";

    conn.query(queryString,function(error,results){
        if(error)
            {
                throw error;
            }
        else
            {
              res.send('We will contact you soon')
            }

      });
      conn.release();
    });

});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
