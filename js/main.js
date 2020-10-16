
const warnTheDeveoper = ( devNumOfChair, numOfSweet, chairStartPosition ) => {
    let warnDev = chairStartPosition
    for (let sweetIndex = 1; sweetIndex < numOfSweet; sweetIndex++) {
        // check and continue process or possibly reset warnDev to 1
        ( warnDev >= devNumOfChair ) ? warnDev = 1 : warnDev++
        
    }
    console.log('Warn the developer siting on sit', warnDev)
}

warnTheDeveoper(7, 19, 2)