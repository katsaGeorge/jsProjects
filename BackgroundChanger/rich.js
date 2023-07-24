let color = undefined

/**
 * Listener
 */

document.querySelector('#btn').addEventListener('click', function(){
    onClickMeClicked()
})

/**
 *  Controller
 * Actions taken after 'Click Me' button clicked
 */
function onClickMeClicked(){
    updateBg()
}

/**
 * Model
 * Gets a color and updates the UI backround
 */

function updateBg() {
    color = getRandomBgColor()
    showBgColor(color)
}

/**
 * Bilids a random color in hex format
 * @returns the bckground color
 */

function getRandomBgColor(){
    const letters = ['A','B','C','D','E','F']
    const digits = ['0','1','2','3','4','5','6','7','8','9']
    const hex = [...letters, ...digits]

    color = '#'
    for(let i = 1; i<= 6; i++){
        let randomHex = Math.floor(Math.random() * hex.length)
        color += hex[randomHex]
    }
    return color
}

/**
 * View
 * Fills the values of the corresponding UI elements.
 * @param {string} bgcolor -the given color 
 */

function showBgColor(bgColor){
    document.querySelector('#hex').innerHTML = bgColor
    document.body.style.backgroundColor = bgColor
}

