'use strict';



function hello (names){
  if(names.length > 0)
  names.forEach(function (name) {
    console.log(name)
  });
}

module.exports=hello;
