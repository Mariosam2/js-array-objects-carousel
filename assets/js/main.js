/* Dato un array di oggetti letterali con:
-url dell’immagine
-titolo
-descrizione Creare un carosello come nella foto allegata. */
const container = document.querySelector('.slides');
const imageElements = document.getElementsByClassName('slide');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
let counter = 0;
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
console.log(imageElements);
nextButton.addEventListener('click',function () {
    next();
})
prevButton.addEventListener('click', function () {
    prev();
})
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

// Milestone 2 ciclo infinito del carosello
// next farà il display dell'immagine successiva nell'array
function next(){
    let currentImage = imageElements[counter];
    console.log(currentImage)
    currentImage.classList.remove('active');
    counter++;
    console.log(counter)
    if(counter >= imageElements.length){
        counter = 0;
    }
    console.log(counter)
    currentImage = imageElements[counter];
    currentImage.classList.add('active');
}
//prev farà il display dell'immagine precedente nell'array
function prev(){
    let currentImage = imageElements[counter];
    console.log(currentImage)
    currentImage.classList.remove('active');
    counter--;
    console.log(counter)
    if(counter < 0){
        counter = imageElements.length - 1;
    }
    console.log(counter)
    currentImage = imageElements[counter];
    currentImage.classList.add('active');
}


