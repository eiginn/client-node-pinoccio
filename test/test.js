var test = require('tape');
var api = require('../');


test("can register",function(t){
  var a = api({api:'http://localhost:8002'});

  var i = Date.now();
  var email = i+"_soldair@gmail.com";
  var pass = 'testtest';

  a.register({email:email,password:pass},function(){
    console.log(arguments);
    t.end();
  })

})
