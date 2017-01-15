'use strict';

function hello1 (names){
  if(names.length > 0)
  names.forEach(
    function (name) {
      name[0] =name[0].toUpperCase();
      console.log(name)
    }
  );
}

function hello2 (names){
  if(names.length > 0)
  names.forEach(
    function (name) {
      name[0] =name[0].toUpperCase();
      console.log(name)
    }
  );
}

function hello3 (names){
  if(names.length > 0)
  names.forEach(function (name) {
    name[0] =name[0].toUpperCase();
    console.log(name)
  });
}

function hello4 (names){
  if(names.length > 0)
  names.forEach(
    function (name) {
      name[0] =name[0].toUpperCase();
      console.log(name)
    }
  );
}

function hello5 (names){
  if(names.length > 0)
  names.forEach(function (name) {
    name[0] =name[0].toUpperCase();
    console.log(name)
  });
}

module.exports=hello1;
