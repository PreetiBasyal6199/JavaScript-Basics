// Recursion


let function1 = function get_list(num){
    if (num==0){return ;}
    console.log(num)
    function1(num - 1)
        
    }
function1(10)

/*
10
9
8
7
6
5
4
3
2
1

*/

// Partial Function

let mulliply = (a,b,c) => a*b*c ;
console.log(mulliply(2,3,4))                // 24

// Same implementation using partial function

let multiplyBy2 = mulliply.bind(null, 2)
console.log(multiplyBy2(3,4))               //24


