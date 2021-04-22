'use strict'
var gElCanvas
var gCtx
// var gText = 
var gStartPos
let currMeme = getMeme()
let gText 
const gTouchEvs = ['touchstart', 'touchmove', 'touchend']

function onMemeEditor(url) {
    elImagesContainer.classList.add('hidden')
    elMemeEditor.classList.remove('hidden')
    gElCanvas = document.getElementById('my-canvas');
    gCtx = gElCanvas.getContext('2d');
    // resizeCanvas()
    // currMeme = getMeme(currMeme.url)
    // currMeme.lines.pos
    // gText = getMeme()
    // console.log('gText', gText)
    resetCanvas(url)
    renderCanvas()
    addListeners()
}


function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderCanvas()
    })
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

function onNewLine() {
    newLine()
    document.querySelector('.edit-input').value = ''
}

function onSwitchLines() {
    switchLines()
}

function onRemoveLine() {
    removeLine()
}

function onChangeSize(diff) {
    changeSize(diff)
}

function onChangeColor(elInput) {
    changeColor(elInput.value)
}


// function onDown(ev) {
//     const pos = getEvPos(ev)
//     if (!isTextClicked(pos)) return
//     gText.isDragging = true
//     gStartPos = pos
//     document.body.style.cursor = 'grabbing'

// }

// function onMove(ev) {
//     if (gText.isDragging) {
//         const pos = getEvPos(ev)
//         const dx = pos.x - gStartPos.x
//         const dy = pos.y - gStartPos.y

//         gText.pos.x += dx
//         gText.pos.y += dy

//         gStartPos = pos
//         renderCanvas()
//     }
// }

// function onUp() {
//     gText.isDragging = false
//     document.body.style.cursor = 'grab'
// }

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

// function getEvPos(ev) {
//     var pos = {
//         x: ev.offsetX,
//         y: ev.offsetY
//     }
//     if (gTouchEvs.includes(ev.type)) {
//         ev.preventDefault()
//         ev = ev.changedTouches[0]
//         pos = {
//             x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
//             y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
//         }
//     }
//     return pos
// }

// function isTextClicked(clickedPos) {
//     const {
//         pos
//     } = gText
//     const distance = Math.sqrt((pos.x - clickedPos.x) ** 2 + (pos.y - clickedPos.y) ** 2)
//     return distance <= gText.size
// }
function moveUp() {
    let currMeme = getMeme()
    let moveLeft = currMeme.lines[currMeme.selectedLineIdx].pos
    moveLeft.y -= 20;
    renderCanvas()

}

function moveDown() {
    let currMeme = getMeme()
    let moveLeft = currMeme.lines[currMeme.selectedLineIdx].pos
    moveLeft.y += 20;
    renderCanvas()
}

function moveLeft() {
    let currMeme = getMeme()
    let moveLeft = currMeme.lines[currMeme.selectedLineIdx].pos
    moveLeft.x -= 20;
    // console.log(moveLeft)
    renderCanvas()
}

function moveRight() {
    let currMeme = getMeme()
    let moveLeft = currMeme.lines[currMeme.selectedLineIdx].pos
    moveLeft.x += 20;
    renderCanvas()
}