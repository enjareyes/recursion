// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// var stringifyJSON = function(obj) {
//   var result;

//   console.log(obj)

//   if (obj!== undefined) {
//     if (typeof obj == 'string') {
//       result = '"' + obj +  '"'
//       console.log('result: ' + result)
//       return result;

//     } else if (obj instanceof Array) {

//       if (obj.length >= 1) {
//         var inner = []
//         for (var i = 0; i < obj.length; i++) {
//           if (typeof obj[i] == 'string') {
//             var current = '"' + obj[i] + '"';
//             inner.push(current)
//           } else {
//             inner.push(obj[i].toString())
//           }
//         }
//         result = String("[" + inner + "]");
//       }

//       if (inner === undefined) {
//         result = '[]'
//       }
//       console.log("result: " + result)
//       return result;


//     } else {
//       var result = String(obj);
//       console.log('result: ' + result)
//       return result
//     };
//   } 
// };


var stringifyJSON = function(obj) {
  var result;

  console.log('*********')
  console.log(obj)

  if (obj!== undefined) {

    if (obj instanceof Array) {
      if (obj.length < 1) {
        result = '[]'; 
        console.log('Array result ' + result)
        console.log(result)
        return result;
      }

      var arrayContents = [];
      var currentIndex = 0

      var recursiveCheckArray = function(obj) {
      
        var currentElem = obj[currentIndex];
        
        if (currentIndex === obj.length){
          console.log('arrayContents: ' + arrayContents)
          result = "[" + arrayContents + "]"
          return result
        }

        if (typeof currentElem === 'string') {
          currentElem = '"' + currentElem + '"'; 
          arrayContents.push(currentElem);
          currentIndex += 1;
          return recursiveCheckArray(obj);
        } 

        if (typeof currentElem === 'number') {
          arrayContents.push(String(currentElem));
          currentIndex += 1
          return recursiveCheckArray(obj)
        };

        if (currentElem instanceof Array) {   
          if (currentElem.length > 1) {
            arrayContents.push('['); //how to remove commah after
            for (var i = 0; i < currentElem.length; i++) {
              if (currentElem[i] instanceof Array && currentElem[i].length < 1) {
                arrayContents.push('[]')
                currentIndex +=1;
              } else {
                arrayContents.push('"' + currentElem[i] + '"')
                //return recursiveCheckArray(currentElem)
              }
            }
            arrayContents.push(']'); //how to remove comma before this is pushed?
            currentIndex +=1
            return recursiveCheckArray(currentElem)
          }

          // for (var i = 0; i < currentElem.length; i++) {
          //   if (currentElem[i].length < 1) {
          //     arrayContents.push('[]')
          //     return recursiveCheckArray(currentElem);
          //   }
          // }
          //return recursiveCheckArray(currentElem)
        }
        return recursiveCheckArray(obj);
      }

      //if (currentIndex < obj.length) {
      return recursiveCheckArray(obj);
      //}
    }

    if (typeof obj === 'object' && !(Array.isArray(obj))) { //is an obj but not an array
      result = String(obj)
      console.log('bool/num result: ' + result)
      console.log(result)
      return result;
    }


    if (typeof obj === 'boolean' || typeof obj === "number") {
      result = String(obj)
      console.log('bool/num result: ' + result)
      console.log(result)
      return result;
    }

    if (typeof obj === 'string') {
      result = '"' + obj +  '"'
      console.log('string result: ' + result)
      console.log(result)
      return result;
    } 

  } else {
    return null;
  }
};




















