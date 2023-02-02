// Setting Interval using a setInterval function
var func1 = function(){
    console.log("hello setInterval")
}

setInterval(func1, 1000)            // it prints hello setInterval in every second, 1000ms is 1s


var func2 = function(){
    console.log("Hello settimeout")
}
setTimeout(func2, 5000)             //// it prints hello setTimeout after it waits for 2 seconds.

