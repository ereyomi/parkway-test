
const warnTheDeveoper = ( devNumOfChair, numOfSweet, chairStartPosition ) => {
    let warnDev = chairStartPosition
    for (let sweetIndex = 1; sweetIndex < numOfSweet; sweetIndex++) {
        if (warnDev >= devNumOfChair) {
            // reset warn
            warnDev = 1
        } else
        {
            warnDev++
        }
        
    }
    console.log('Warn the developer siting on sit', warnDev)
}

warnTheDeveoper(7, 19, 2)