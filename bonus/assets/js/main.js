/* Dato un array di oggetti letterali con:
-url dell’immagine
-titolo
-descrizione Creare un carosello come nella foto allegata. */
const container = document.querySelector('.slides');
const imageElements = document.getElementsByClassName('slide');
const thumbs = document.getElementsByClassName('thumb');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const invertButton = document.getElementById('invert');
let counter = 0;
let clicks = 0;
const IMAGES = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
generateImages(IMAGES, container);
generateThumbs(IMAGES, nextButton);
console.log(imageElements);
nextButton.addEventListener('click', function () {
    next();
})
prevButton.addEventListener('click', function () {
    prev();
})
let slideshow;
let backwardSlideshow;
startButton.addEventListener('click', function () {
    if (!this.classList.contains('clicked')) {
        clearInterval(backwardSlideshow);
        slideshow = setInterval(next, 3000);
    }
    this.classList.add('clicked');
    stopButton.classList.remove('clicked');
    invertButton.classList.remove('clicked');
    


});

stopButton.addEventListener('click', function () {
    if (!this.classList.contains('clicked')) {
        clearInterval(slideshow);
        clearInterval(backwardSlideshow);
    }
    this.classList.add('clicked');
    startButton.classList.remove('clicked');
    invertButton.classList.remove('clicked');
    

});

invertButton.addEventListener('click', function () {
    if (!this.classList.contains('clicked')) {
        clearInterval(slideshow);
        backwardSlideshow = setInterval(prev, 3000);

    }
    this.classList.add('clicked');
    startButton.classList.remove('clicked');
    stopButton.classList.remove('clicked');
    

});
//console.log(imageElements);
/**
 * Takes an array of imgs and a domElement and generate the images
 * @param {object} arrayOfImages array of image objects
 * @param {object} domElement element where to append the HTML code
 */
//Milestone 1 genero dinamicamente gli elementi del carosello
function generateImages(arrayOfImages, domElement){
    arrayOfImages.forEach((image,index) => {
        let slideMarkup = `<div class="slide ${index === 0 ? 'active': ''}"><div class="layover"></div><img class="img-fluid" src="/assets/${image.image}"><div class="caption"><h3 class="text-white text-center">${image.title}</h3><p class="text-white text-center">${image.text}</p></div></div>`;
        domElement.insertAdjacentHTML('beforeend', slideMarkup);
    })
    
}
/**
 * Takes an array of imgs and a domElement and generate the thumbs
 * @param {object} arrayOfImages array of image objects
 * @param {object} domElement element where to append the HTML code
 */
function generateThumbs(arrayOfImages, domElement) {
    arrayOfImages.forEach((image, index) => {
        let boxMarkup = `<div class="thumb"><div class="layover"></div><img class="thumb-img" src="/assets/${image.image}"></div>`
        if (index == 0) {
            boxMarkup = `<div class="thumb active"><div class="layover"></div><img class="thumb-img" src="/assets/${image.image}"></div>`
        }


        domElement.insertAdjacentHTML('beforebegin', boxMarkup)
    })
}

// Milestone 2 ciclo infinito del carosello
// next farà il display dell'immagine successiva nell'array
function next() {
    console.log(counter);
    let currentThumb = thumbs[counter];
    let currentImage = imageElements[counter];
    //console.log(currentImage)
    console.log(currentThumb);
    currentImage.classList.remove('active');
    currentThumb.classList.remove('active');
    counter++;
    console.log(counter)
    if (counter >= imageElements.length) {
        counter = 0;
    }
    console.log(counter)
    currentImage = imageElements[counter];
    currentThumb = thumbs[counter];
    currentImage.classList.add('active');
    currentThumb.classList.add('active');
    console.log(currentThumb);
}
//prev farà il display dell'immagine precedente nell'array
function prev() {
    let currentThumb = thumbs[counter];
    let currentImage = imageElements[counter];
    //console.log(currentImage)
    console.log(currentThumb);
    currentImage.classList.remove('active');
    currentThumb.classList.remove('active');
    counter--;
    console.log(counter)
    if (counter < 0) {
        counter = imageElements.length - 1;
    }
    console.log(counter)
    currentImage = imageElements[counter];
    currentThumb = thumbs[counter];
    currentImage.classList.add('active');
    currentThumb.classList.add('active')
    console.log(currentThumb);
}


