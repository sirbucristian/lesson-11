// Main array
var array = (["HTML", 11, "JavaScript", 2, "CSS", 23, 12]);
console.log('array = ', array);


array.push(-18); //add element to end of array
console.log('push = ', array);
array.unshift(1000);   // add an element to the start of array
console.log('unshift', array);
array.push("Last array element"); // add an element to end of array
console.log('push = ', array);
array.splice(3,1); //using splice to delete and element with position 3
console.log('splice = ', array);

// This array contains strings that needs to be removed from main array
  var removeStr = [ 'HTML', 'CSS', 'Last array element']; //removes any element from array

array = array.filter(function(val){
  return (removeStr.indexOf(val) === -1 ? true : false)
});

console.log(array); 

//using filter to show only numbers

var a = array.filter(function(item) {
  return typeof item === 'number'})

console.log('filter = ', a);

//using map to square all number elements

var x = a.map(function square(el) {
  return el*el;
});
console.log('map = ', x);

x.sort(function(a, b) {
    return a - b 
});
console.log(x);
// using Math.max to show hightest value

var y = Math.max.apply(null,x);
console.log('Math.max = ', y);


var yourBrowser = "Chrome";
var ieLog = "We don't support IE browser!";
var webKitLog = "We support your browser = ";
var otherLog = "We hope your specific browser works fine";

var ifElseResult;
if (yourBrowser === "IE") {
    ifElseResult = ieLog;
} else if (yourBrowser === "Chrome" || yourBrowser === "Firefox" || yourBrowser === "Opera" || yourBrowser === "Safari") {
    ifElseResult = webKitLog + yourBrowser;
} else {
    ifElseResult = otherLog;
}
console.log('IF - ELSE SOLUTION: ', ifElseResult);

var switchResult;
// YOUR CODE GOES HERE
    switch(yourBrowser) {
        case "IE": 
        switchResult = ieLog
            break;
        case "Chrome":
        case "FireFox":
        case "Opera": 
        case "Safari":   
        switchResult = webKitLog + yourBrowser 
            break;

        default: 
        switchResult = otherLog}
console.log('SWITCH SOLUTION: ', switchResult);