//Implementation of async and await

async function weather(){
    let weatherKtm = new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Fetching the weather of ktm")
            resolve("27 deg")
            console.log("Successfully fetched the weather of Ktm")
            console.log("--------------*-------------------")
        }, 1000)
    })


    let weatherPkr = new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("Fetching the weather of Pokhara")
            resolve("22 deg")
            console.log("Successfully fetched the weather of Pokhara")
            console.log("--------------*-------------------")
        }, 6000)
    })

    const weatherK = await weatherKtm
    const weatherP = await weatherPkr   // This function awaits untill the promise if fulfilled

    console.log(weatherK, weatherP) 

}

weather()