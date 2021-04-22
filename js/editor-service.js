'use strict'

let gMeme;


function resetCanvas(urlImg) {
    gMeme = {
        // selectedImgId: 1,
        selectedLineIdx: 0,
        url: urlImg,
        lines: [{
            txt: 'first text',
            size: 40,
            pos: {
                x: 300,
                y: 50
            },
            align: 'center',
            color: 'blue',
            font: 'IMPACT',
            isDragging: false
        }, ],
    }
}

function getMeme() {
    return gMeme
}

function updateText(elInput) {
    if (gMeme.lines.length === 0) return
    gMeme.lines[gMeme.selectedLineIdx].txt = elInput.value
    renderCanvas()
}

function renderCanvas() {
    drawImg(renderText)
}

// function resizeCanvas() {
//     const elContainer = document.querySelector('.canvas-container')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }

function drawImg(renderText) {
    const img = new Image()
    img.src = gMeme.url;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        renderText()
    }
}

function renderText() {
    let currLineIdx = gMeme.selectedLineIdx;
    // console.log('currLineIdx', currLineIdx)
    gMeme.lines.forEach((line, idx) => {
        gMeme.selectedLineIdx = idx;
        if (idx === currLineIdx) {
            drawText()
        } else drawText(line)
    })
    gMeme.selectedLineIdx = currLineIdx
}

function drawText(newLine) {
    let text = gMeme.lines[gMeme.selectedLineIdx].txt;
    let x = gMeme.lines[gMeme.selectedLineIdx].pos.x;
    let y = gMeme.lines[gMeme.selectedLineIdx].pos.y;
    let fontSize = gMeme.lines[gMeme.selectedLineIdx].size
    let font = gMeme.lines[gMeme.selectedLineIdx].font
    let color = gMeme.lines[gMeme.selectedLineIdx].color
    gCtx.beginPath()
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = color
    gCtx.font = `${fontSize}px ${font}`
    gCtx.textAlign = 'center'
    gCtx.fillText(text, x, y)
    gCtx.strokeText(text, x, y)
    gCtx.strokeStyle = newLine ? 'transparent' : 'black'
    let lineHeight = fontSize * 1.25
    let textWidth = gCtx.measureText(text).width;
    gCtx.strokeRect(x - textWidth / 2 - 10, y - lineHeight + 10, textWidth + 20, lineHeight);
}

function newLine() {
    let line = {
        txt: 'New Text',
        size: 40,
        pos: {
            x: gElCanvas.width / 2,
            y: gElCanvas.height / 2
        },
        align: 'center',
        color: 'blue',
        font: 'IMPACT',
        isDragging: false

    }
    gMeme.lines.push(line)
    gMeme.selectedLineIdx = gMeme.lines.length - 1
    renderText()
    renderCanvas()
}

function switchLines() {
    gMeme.selectedLineIdx -= 1
    if (gMeme.selectedLineIdx < 0) {
        gMeme.selectedLineIdx = gMeme.lines.length
    }
    renderCanvas()
}

function removeLine() {
    if (gMeme.lines.length === 0) return
    gMeme.lines.splice([gMeme.selectedLineIdx], 1)
    // gMeme.selectedLineIdx -= 1
    renderCanvas()
}

function changeSize(diff) {
    if (gMeme.lines[gMeme.selectedLineIdx].size + diff <= 20 ||
        gMeme.lines[gMeme.selectedLineIdx].size + diff >= 100) return
    gMeme.lines[gMeme.selectedLineIdx].size += diff
    renderCanvas()
}

function changeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
    renderCanvas()
}

function downloadCanvas(elLink) {
    const data = gElCanvas.toDataURL()
    elLink.href = data
    elLink.download = 'memes-by-Jimmy'
}