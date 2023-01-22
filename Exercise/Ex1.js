// Try to find out the result of this problem
const a = function(){
    console.log('a', this)
    const b = function(){
        console.log('b', this)
        const c = {
            hi : function(){
                console.log('c', this)
            } 
        }
        c.hi()
    }
    b()
}
a()

// a Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// b Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// c {hi: ƒ}

//While calling the a() and b(), it refers to window object.  

