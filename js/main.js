/* 
    warnTheDeveloper Function 
    devNumOfChair: an integer, the number of developer
    numOfSweet: an integer, the number of sweets
    chairStartPosition: an integer, the chair number to begin passing out sweets from
*/
const warnTheDeveoper = ( devNumOfChair, numOfSweet, chairStartPosition ) => {
    console.log(devNumOfChair, numOfSweet,chairStartPosition)
    let warnDev = chairStartPosition
    if ( chairStartPosition > devNumOfChair )
    {
        return 'start positition should not be greater than the number of chairs available for developers'
    }
    for (let sweetIndex = 1; sweetIndex <= numOfSweet; sweetIndex++) {
        // check and continue process or possibly reset warnDev to 1
        if ( sweetIndex === numOfSweet ) {
            break;
        }
        if ( warnDev === devNumOfChair ) {
            warnDev = 1
        } else {
            warnDev++
        }
    }
    return `warn Developer sitting on sit ${warnDev}`
}


const theWarnDevForm = document.querySelector( '#warnDevForm' )
theWarnDevForm.addEventListener( 'submit', (event) => {
    event.preventDefault();
    // get data from form
    /* 
        document.forms.formId e.g 
        <form id="ereForm"> by id attribute
        document.forms.ereFrom
    */
    const getWarnDevFormById = document.forms.warnDevForm
    const warnDevFormData = new FormData( getWarnDevFormById )
    // get inputs by name attribute
    const devChairNumber = warnDevFormData.get('devChairNumber')
    const numOfSweet = warnDevFormData.get('numOfSweet')
    const chairStartPosition = warnDevFormData.get( 'chairStartPosition' )
    
    // warn dev
    const warnDeveoper = warnTheDeveoper( Number( devChairNumber ), Number( numOfSweet ), Number( chairStartPosition ) )

    // display result
    document.querySelector('#displayWarnToDev').innerHTML = warnDeveoper;

})

