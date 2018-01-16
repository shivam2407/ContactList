var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.get('/contactlist',function (req,res){
  console.log("I recieved a get request");
  person1 = {
    name:"Alex",
    number:"999-232-3443",
    email:"alex@gmail.com"
  };

  person2 = {
    name:"Amili",
    number:"998-423-4284",
    email:"amili@gmail.com"
  };

  person3 = {
    name:"John",
    number:"998-364-2232",
    email:'john@yahoo.in'
  };

  var contactlist = [person1,person2,person3];
  res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");
