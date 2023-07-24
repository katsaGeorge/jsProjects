let noteId = 0
const daysGR = ['Κυριακή','Δυετερα','Τριτη','Τεταρτη','Πεμπτη','Παρασκευή','Σαββατο']
const monthsGR = ['Ιανουαρίου', 'Φεβρουαριου','Μαρτιου','Απριλιου','Μαιου','Ιουνίου','Ιουλίου',
'Αυγούστου','Σεπτεμβρίου','Οκτωβρίου','Νοεμβριου','Δεκεμβρίου']

window.addEventListener('DOMContentLoaded', function(){

    this.setInterval(printGRDate,1000) // 1000ms === 1 sec

    this.document.querySelector('#addNoteBtn').addEventListener('click', function(){
        insertNote(document.querySelector('#inputNote').value.trim())
        reset()
    })
})

this.document.querySelector('#inputNote').addEventListener('keyup', function(e){
    if (e.key === 'Enter'){
        insertNote(this.value.trim())
        reset()
    }
    
})

function printGRDate(){
    const currentDate = new Date()
    const day = currentDate.getDay()
    const date = currentDate.getDate()
    const month = currentDate.getMonth()
    const year = currentDate.getFullYear()
    const hours = currentDate.getHours()
    const minutes = currentDate.getMinutes()
    const seconds = currentDate.getSeconds()

    const strDay = daysGR[day]
    const strMonth = monthsGR[month]
    let strDate = `${strDay}, ${date} ${strMonth} ${year}`
    let strTime = `${(hours < 10) ? '0':''}${hours}:${(minutes < 10) ? 0 :''}
    ${minutes}:${(seconds < 10) ? 0 : ''}${seconds} `

    document.querySelector('#dateText').innerHTML = strDate + "<br>" + strTime
}

function insertNote(note) {
    if(!note){
        return
    }

    noteId++

    let clone = document.querySelector('.note.hidden').cloneNode(true)
    clone.classList.remove('hidden')
    clone.querySelector('.note-check').addEventListener('click',function(){
        strikeThrough(clone.querySelector('.note-text'))
    })

    let clonedNoteInfo = clone.querySelector('.note-info')
    clonedNoteInfo.children[0].id = 'noteCheck' + noteId
    clonedNoteInfo.children[1].htmlFor = 'noteCheck' + noteId

    let clonedBtn = clone.querySelector('.notedel-btn')
    clonedBtn.id = 'noteDelBtn' + noteId

    clonedBtn.addEventListener('click', function(){
        deleteNote(this.parentNode)
    })

    clone.querySelector('.note-text').innerHTML = note
    document.querySelector('.notes-wrapper').appendChild(clone)
}

function strikeThrough(element) {
    element.classList.toggle('line-through')
}

function deleteNote(note){
    note.remove()
}

function reset(){
    document.querySelector('#inputNote').value = ''
}