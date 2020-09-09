const lyricBox = document.querySelector('.lyric-box');

function lyricPromise(lyric) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const lyricElement = document.createElement('h3');
            lyricElement.innerHTML = lyric;
            lyricBox.append(lyricElement);
            resolve();
        }, 3000);
    })
}

lyricPromise('ก ไก่')
    .then(() => {
        return lyricPromise('ข ไข่');
    })
    .then(() => {
        return lyricPromise('ค ควาย');
    })
    .then(() => {
        return lyricPromise('ง งู')
    })