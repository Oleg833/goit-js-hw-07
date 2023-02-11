import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

const makeGaleryCard = ({ preview, original, description }) => {
  const gallerylinkEl = document.createElement('a');
  gallerylinkEl.classList.add('gallery__item');
  gallerylinkEl.href = original;
  gallerylinkEl.rel = 'noopener noreferrer nofollow';
  gallerylinkEl.target = '_blank';

  const imageEl = document.createElement('img');
  imageEl.classList.add('gallery__image');
  imageEl.src = preview;
  imageEl.alt = description;

  gallerylinkEl.appendChild(imageEl);
  return gallerylinkEl;
};
const imageGalery = galleryItems.map(makeGaleryCard);

galleryContainer.append(...imageGalery);
// console.log(...imageGalery);

// const galleryMarkup = galleryItems
//   .map(
//     ({ preview, original, description }) =>
//       `<a class="gallery__item" href="${original}">
//   <img class="gallery__image" src="${preview}" alt="${description}" />
// </a>`
//   )
//   .join('');
// galleryContainer.innerHTML = galleryMarkup;

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 250,
});
console.log(SimpleLightbox);
