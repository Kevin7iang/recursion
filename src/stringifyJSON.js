// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

  var result = '';

  var stringifyInput = function(input) {
    
    //stringify boolean & number types
    if (typeof input === 'boolean' || typeof input === 'number') {
      result += input.toString();
    }
    
    //stringify null
    else if (input === null) {
      result += 'null';
    }
    
    //stringify undefined
    else if (input === undefined) {
      result += 'undefined';
    }

    //stringify string type
    else if (typeof input === 'string') {
      result += '"' + input.toString() + '"';
    }
    
    //arrays
    else if (Array.isArray(input)) {
      result += '[';
      for (var i = 0; i < input.length; i++) {
        stringifyInput(input[i]);
        if (i !== input.length - 1) {
          result += ',';
        }
      }
      result += ']';
    }
    
    //objects
    else if (typeof input === 'object') {
      result += '{';
      var counter = 0;
      var len = Object.keys(input).length;
      for (var i in input) {
        counter++;
        if (typeof i !== 'function' && typeof input[i] !== 'function' && input[i] !== undefined) {
          result += '"' + i.toString() + '":';
          stringifyInput(input[i]);
          if (counter !== len) {
            result += ',';
          }
        }
      }
      result += '}';
    }
  };

  stringifyInput(obj);
  return result;
};
