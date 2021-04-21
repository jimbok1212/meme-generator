'use strict'

function onMemeEditor(url) {
    elImagesContainer.classList.toggle('hidden')
    elMemeEditor.classList.toggle('hidden')
    resetCanvas(url)
    renderCanvas()
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