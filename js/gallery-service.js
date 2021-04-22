'use strict'
const KEY = 'IMG_KEY'

const elImagesContainer = document.querySelector('.images-container')
const elMemeEditor = document.querySelector('.meme-editor')

let gImgs;

let gKeyWords = [
    ['politics'],
    ['animals', 'cute'],
    ['animals', 'cute', 'baby'],
    ['animals', 'cute'],
    ['baby', 'cute'],
    ['tv', 'funny'],
    ['cute', 'baby', 'funny'],
    ['tv', 'funny'],
    ['cute', 'baby', 'funny'],
    ['politics', 'funny'],
    ['sports', 'funny'],
    ['tv'],
    ['tv', 'funny'],
    ['tv'],
    ['tv'],
    ['tv', 'funny'],
    ['politics'],
    ['tv', 'kids']
]

function createImgs() {
    let img = loadFromStorage(KEY)
    if (!img || !img.length) {
        img = [];
        for (let i = 0; i <= img.length; i++) {
            let x = createImg(i)
            img.push(x)

        }
    }
    gImgs = img
    saveToStorage(KEY, gImgs)
}

function createImg(i) {
    return {
        id: makeId(),
        url: getUrl(i + 1),
        keywords: gKeyWords[i]
    }
}

function getImgs() {
    return gImgs
}

// function getKeyWords(i) {
//     switch (i) {
//         case (i === 1 || i === 10 || i === 17):
//             return gKeyWords[0]
//         case (i === 2 || i === 3 || i === 4):
//             return gKeyWords[1]
//         case (i === 2 || i === 3 || i === 4):
//             return gKeyWords[2]
//         case (i === 2 || i === 3 || i === 4):
//             return gKeyWords[3]
//         case (i === 2 || i === 3 || i === 4):
//             return gKeyWords[4]
//         case (i === 2 || i === 3 || i === 4):
//             return gKeyWords[5]
//     }
// }