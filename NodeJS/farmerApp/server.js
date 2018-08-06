var express = require('express');
var routes = express.Router();
var http = require('http');
var path = require('path');
var bodyParser=require('body-parser');
//load farmers route
var farmers = require('./routes/farmers'); 
var app = express();
var connection  = require('express-myconnection'); 
var mysql = require('mysql');
// all environments
app.set('port', process.env.PORT || 4344);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({
    extended: true
}));
// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
  }
  app.use(
    
    connection(mysql,{
        
        host: 'localhost', 
        user: 'root',
        password : 'root',
        port : 3306, 
        database:'nodejs'

    },'request')

);
app.get('/', farmers.add);
app.get('/addfarmer',farmers.getlist);
app.post('/addfarmer',farmers.addlist);
app.get('/routes/farmers/list',farmers.getlist);
app.post('/routes/farmers/namesearch',farmers.searchpost)
app.get('/routes/farmers/namesearch',farmers.searchget);

app.use(app.router);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
  });