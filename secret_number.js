'use strict';
module.exports = function (){

    let generatedNumber = Math.floor(Math.random()*1000001);

    return function(){
      return generatedNumber;
    };
};



