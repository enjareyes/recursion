// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result;

  console.log(obj)

  if (obj!== undefined) {
    if (typeof obj == 'string') {
      result = '"' + obj +  '"'
      console.log('result: ' + result)
      return result;
    }else{
      var result = String(obj);
      console.log('result: ' + result)
      return result
    }
  } else {
    return null;
  }
};
