//Change image
// let thumbnailImage = document.querySelector('.thumbnail-image')
let thumbnailImage = document.querySelectorAll('.thumbnail-image')
let bigImage = document.querySelector('.big-image')

function changeImage(event) {
    // bigImage.src = thumbnailImage.src
    bigImage.src = event.target.src
}

function removeImage() {
    bigImage.src = '';
}

// thumbnailImage.addEventListener('click', changeImage)
// thumbnailImage.addEventListener('mouseover', changeImage)

thumbnailImage.forEach((thumbnail) => {
    thumbnail.addEventListener('mouseout', removeImage)
    thumbnail.addEventListener('mouseover', changeImage)
})