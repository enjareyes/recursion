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
  var all = document.body.childNodes;

  var recursiveFunc = function() {
    if (index === all.length) { 
      if ($('body').hasClass(className)) {
        elements.unshift(document.body)
      }
      console.log(elements);
      return elements;
    }

    var currentElement = all[index]

    if ($(currentElement).hasClass(className)) { // if ($(currentElement).classList.contains(className)) {   ??
      elements.push(currentElement);
    }
    
    index += 1; 
    recursiveFunc();
  }
  
  recursiveFunc();

};






