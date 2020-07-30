let imageIndex = 0;
let imageLinks = [
    'https://sites.google.com/site/funnycatmeawww/_/rsrc/1422326075261/home/6997052-funny-cat.jpg?height=675&width=1200',
    'https://tsaib8.com/wp-content/uploads/2019/12/bird.jpg',
    'https://pbs.twimg.com/profile_images/1135934875591094273/EOiQegni.jpg'
]
let image = document.querySelector('.image')

function prevImage() {
    if (imageIndex > 0){
        imageIndex--;
        image.src = imageLinks[imageIndex]
    }
}

function nextImage() {
    if (imageIndex < imageLinks.length - 1) {
        imageIndex++;
        image.src = imageLinks[imageIndex]
    }
}

function keyup(event) {
    console.log(event.key);
    if (event.key === 'ArrowLeft') {
        prevImage();
    }
    else if (event.key === 'ArrowRight') {
        nextImage();
    }
}

document.addEventListener('keyup', keyup)