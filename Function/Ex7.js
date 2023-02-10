// closure
/*
    Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.
*/

function OuterFunction(){
    var newvariable = 50 ;

    function InnerFunction(){
        console.log(newvariable)
    }
    return InnerFunction()
}

OuterFunction()