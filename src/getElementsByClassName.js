// We could just do things the easy way:

// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:




// var elements = []
// var index = 0;

// var getElementsByClassName = function(className){
//   // var all = document.getElementsByTagName("*"); //  
//   var all = document.body.childNodes;

//   console.log(all);

//   if (index === all.length) {
//     if ($(document.body).hasClass(className)) {
//       elements.unshift(document.body)
//     }
//     console.log(elements instanceof Array)
//     console.log(elements);
//     return elements;
//   }

//   var currentElement = all[index]

//   if ($(currentElement).hasClass(className)) { //check element.classList for class?   element.classList.contains(className)
//   //if ($(currentElement).classList.contains(className)) { 
//     elements.push(currentElement);
//   }

//   index += 1;
//   getElementsByClassName(className);
// };





var getElementsByClassName = function(className){
  var elements = [];
  var index = 0;
  // var all = document.body.childNodes;  // or .children   why not grabbing children's children? 
  var all = document.body.getElementsByTagName('*') //grabs all elements in body (including nested)
  all = Array.prototype.slice.apply(all);

  // console.log(all)
  // console.log(all instanceof Array)

  if ($('body').hasClass(className)) {
    elements.push(document.body);
  };

  var recursiveFunc = function() {
    if (index === all.length) { 
        // var original = elements 
        // elements=[]
        // elements.push(document.body)
        // for (var i=0; i <= original.length-1; i++) {
        //   elements.push(original[i]);
        // }
      // }
      // console.log(elements);
      // console.log(elements instanceof Array)
      return elements;
    }

    var currentElement = all[index]
    // console.log(index)

    if ($(currentElement).hasClass(className)) { // 
    // if (currentElement.classList.contains(className)) {   
      elements.push(currentElement);
    }
    
    index += 1; 
    return recursiveFunc();
  }
  
  return recursiveFunc();

};


// var result = getElementsByClassName('targetClassName');
// console.log(result);



