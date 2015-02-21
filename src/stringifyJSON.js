// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
  var result = ""

  console.log(obj)

  if (obj === undefined || typeof obj === 'function' || obj === null) {
    return 'null'
  };

  if (obj!== undefined) {

    if (obj instanceof Array) {
      result += '[';

      if (obj.length >= 1) {
        for (var currentIndex=0; currentIndex < obj.length; currentIndex ++) {
          var currentElem = obj[currentIndex];

          if (typeof currentElem === 'number') { 
            result += String(currentElem);
          }

          if (typeof currentElem === 'string') {
            result += '"' + currentElem + '"'
          }

          if (currentElem instanceof Array) {
            result += stringifyJSON(currentElem);
          }

          if (typeof currentElem === 'object' && !(Array.isArray(currentElem))) {
            result += stringifyJSON(currentElem);
          }
         
          if (currentIndex != obj.length-1) {
            result += ','
          }
        } 
      }
        result += "]" 
    }

    if (typeof obj === 'object' && !(Array.isArray(obj))) { 
      result += '{';

      var arrayOfObjects = []
      for (var the_key in obj) {
        arrayOfObjects.push(the_key);
      }

      if (obj !== {}) {
        for (var key in obj) {
          var currentValue = obj[key];

          if (currentValue !== undefined && typeof currentValue !== 'function') {

            result += '"' + key + '":';

            if (typeof currentValue === 'number' || typeof currentValue === 'boolean') { 
              result += String(currentValue);
            }

            if (typeof currentValue === 'string') {
              result += ('"' + currentValue + '"');
            }

            if (typeof currentValue === 'object') {
              result += stringifyJSON(currentValue);
            }

            if (currentValue === 'null') {
              result += "null"
            }
           
            if (key !== arrayOfObjects[arrayOfObjects.length-1]) { //if not last prop in object
              result += ','
            }
          }
        }
      }

      result += "}" 
      console.log('object result: ' + result)
    }


    if (typeof obj === 'boolean' || typeof obj === "number") {
      result += String(obj);
      console.log('bool/num result: ' + result)
      return result;
    }

    if (typeof obj === 'string') {
      result += '"' + obj +  '"'
      console.log('string result: ' + result)
      return result;
    } 

    return result;

  } 
};







