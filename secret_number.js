'use strict';
module.exports = function() {

  let secretNumber = (function(){
    let randomNumber = 0;
    return function(){
      randomNumber = Math.floor(Math.random()*1000001);
      return randomNumber;
    }
  })();

};