/* Dato un array di oggetti letterali con:
-url dell’immagine
-titolo
-descrizione Creare un carosello come nella foto allegata. */
const container = document.querySelector('.slides');
const imageElements = document.getElementsByClassName('slide');
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
/**
 * Takes an array of imgs and a domElement and generate the images
 * @param {object} arrayOfImages array of image objects
 * @param {object} domElement element where to append the HTML code
 */
//Milestone 1 genero dinamicamente gli elementi del carosello
function generateImages(arrayOfImages, domElement){
    arrayOfImages.forEach((image,index) => {
        let imgEl = document.createElement('img');
        imgEl.classList.add('slide')
        if(index == 0){
            imgEl.classList.add('active');
        }
        imgEl.src = './assets/' + image.image;
        domElement.insertAdjacentElement('beforeend', imgEl);
    })
    
}



