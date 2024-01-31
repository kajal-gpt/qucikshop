var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var categoryRouter = require('./routes/category');
var productRouter = require('./routes/product');
var productlistRouter = require('./routes/productlist');
var subcategoryRouter = require('./routes/subcategory')
var bannerRouter = require('./routes/banners')
var adminRouter = require('./routes/admin')
var productpictureRouter = require('./routes/productpicture')
var userInterfaceRouter = require('./routes/userinterface')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/category',categoryRouter)
app.use('/product',productRouter)
app.use('/productlist',productlistRouter)
app.use('/subcategory',subcategoryRouter)
app.use('/banners',bannerRouter)
app.use('/admin',adminRouter)
app.use('/productpicture',productpictureRouter)
app.use('/userinterface',userInterfaceRouter)






// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404)); return res.status(200).json( {data:[] , message:'Sserver Error'})
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
