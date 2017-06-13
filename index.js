var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/userListModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://0.0.0.0:27017/userdb',function(err){
if(err)
{
console.log('Error connecting db');
}
else{
console.log('successfully connected with DB');
}

}); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/userListRoutes');
routes(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);