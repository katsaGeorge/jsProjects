// app state ~The only source of truth
const DEFAULT = 0
let counter = DEFAULT

const counterDOM = $('#counter')
const btns = $('.btn')  // θα φερει ολα πισω με class btn


$(document).ready(function(){

/**
 * Listener
 */

    btns.on('click', function(e){
        if (e.currentTarget.id === 'btnDecr'){
            onDecreaseClicked()
        }else if (e.currentTarget.id === 'btnIncr'){
            onIncreaseClicked()
        }else {
            onResetClicked()
        }
    })


})





//controlers

/**
 * Actions taken after 'Decrease' button clicked.
 * Actions include decreasing the counter.
 */
function onDecreaseClicked(){
    decreaseCounter()
}

/**
 * Actions taken after 'Increases' button clicked.
 * Actions include increasing the counter.
 */
function onIncreaseClicked(){
    IncreaseCounter()
}

/**
 * Actions taken after 'Reset' button clicked.
 * Actions include reseting the counter.
 */
function onResetClicked(){
        resetCounter()
}

/**
 * Decreases the counter and syncs the UI.
 */
function decreaseCounter(){
    counter--
    showCounter(counter)
}

/**
 * Increases the counter and syncs the UI.
 */
function IncreaseCounter(){
    counter++
    showCounter(counter)
}

/**
 * Reset the counter and syncs the UI.
 */
function resetCounter(){
    counter = DEFAULT
    showCounter(counter)
}


/**
 * Assigns the counter to the correspondings UI Element
 * and styles accordingly.
 * @param {Number | String} counter - the counter value
 */
function showCounter(counter){
    counterDOM.html (counter) 
    styleCounter(counter)
}


function styleCounter(counter){
    if (counter > 0){
        counterDOM.css('color','green')
    }else if (counter < 0 ){
        counterDOM.css('color','red')
    }else {
        counterDOM.css('color','black')
    }
}

