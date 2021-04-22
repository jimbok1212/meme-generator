'use strict'

function onInit() {
    createImgs();
    // getImgsForDisplay();
    renderImages();
}

function renderImages() {
    const imgs = getImgsForDisplay()
    // console.log('imgs', imgs)
    const strHTML = imgs.map(img => `<img src="${img.url}" alt="${img.keywords.join(',')}" class="gallery-img" onclick="onMemeEditor('${img.url}')"/>`).join('')
    elImagesContainer.innerHTML = strHTML
}

function filterImgs(imgs) {
    // console.log('imgs', imgs)
    // ev.preventDefault()
    let userSearch = document.getElementById('category').value;
    // console.log('userSearch', userSearch)
    if (userSearch === '') return imgs;
    else return imgs.filter(function (img) {
        // img.keywords.includes(userSearch)
        return img.keywords.some(function (keyword) {
            // console.log('img', img)
            return keyword.substring(0, userSearch.length) === userSearch;
        });
    });
}

function getImgsForDisplay() {
    let imgs = [];
    imgs = filterImgs(gImgs)
    // console.log('imgs', imgs)
    return imgs;
}


function onGallery() {
    elImagesContainer.classList.remove('hidden')
    elMemeEditor.classList.add('hidden')
}