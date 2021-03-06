var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.get('/contactlist',function (req,res){
  console.log("I recieved a get request");

  db.contactlist.find( function(err,docs){
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactlist',function(req,res){
  console.log(req.body);
  db.contactlist.insert(req.body,function(err,docs){
    res.json(docs);
  });
});
app.delete('/contactlist/:id',function(req,res){
  console.log("Deleting record"+req.body)
  var id = req.params.id;
  db.contactlist.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
    res.json(doc);
  });
});
app.get('/contactlist/:id',function (req,res){
  console.log(req.params.id);
  db.contactlist.findOne({_id:mongojs.ObjectId(req.params.id)}, function(err,docs){
    console.log(docs);
    res.json(docs);
  });
});
app.put('/contactlist/:id',function(req,res){
  var id = req.params.id;
  console.log("Inside put"+req.body);
  db.contactlist.findAndModify({query: {_id:mongojs.ObjectId(id)},
    update: {$set: {name: req.body.name, number:req.body.number, email:req.body.email}},
    new: true}, function (err,doc){
      res.json(doc);
    });
});
app.listen(3000);
console.log("Server running on port 3000");
