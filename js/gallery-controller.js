'use strict'

function onInit() {
    createImgs();
    renderImages();
    
}

function renderImages() {
    const imgs = getImgs()
    const strHTML = imgs.map(img => `<img src="${img.url}" alt="${img.keywords.join(',')}" class="gallery-img" onclick="onMemeEditor('${img.url}')"/>`).join('')
    elImagesContainer.innerHTML = strHTML
}

function getFilteredImgs(){

}

function onGallery() {
    elImagesContainer.classList.remove('hidden')
    elMemeEditor.classList.add('hidden')
}
