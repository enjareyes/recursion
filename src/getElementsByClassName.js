// We could just do things the easy way:

// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



// var getElementsByClassName = function(className){
//   var elements = [];
//   var index = 0;
//   // var all = document.body.childNodes;  // or .children   why not grabbing children's children? 
//   var all = document.body.getElementsByTagName('*') //grabs all elements in body (including nested)
//   all = Array.prototype.slice.apply(all);

//   // console.log(all)
//   // console.log(all instanceof Array)

//   if ($('body').hasClass(className)) {
//     elements.push(document.body);
//   };

//   var recursiveFunc = function() {
//     if (index === all.length) { 
//       return elements;
//     }

//     var currentElement = all[index]

//     if ($(currentElement).hasClass(className)) {  // if (currentElement.classList.contains(className)) {   
//       elements.push(currentElement);
//     }
    
//     index += 1; 
//     return recursiveFunc();
//   }
  
//   return recursiveFunc();

// };

 //replaced some JQuery

var getElementsByClassName = function(className){
  var elements = [];
  var index = 0;
  // var all = document.body.childNodes;  // or .children   why not grabbing children's children? 
  var all = document.body.getElementsByTagName('*') //grabs all elements in body (including nested)
  all = Array.prototype.slice.apply(all); 

  var bodyElem = document.getElementsByTagName('body')[0]
  if (bodyElem.classList.contains(className)) {
    elements.push(document.body);
  };

  var recursiveFunc = function() {
    if (index === all.length) { 
      return elements;
    }

    var currentElement = all[index]

    if ($(currentElement).hasClass(className)) {  // if (currentElement.classList.contains(className)) {   
      elements.push(currentElement);
    }
    
    index += 1; 
    return recursiveFunc();
  }
  
  return recursiveFunc();

};

















