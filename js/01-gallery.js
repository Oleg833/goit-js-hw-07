import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector('.gallery');

const makeGaleryCard = ({ preview, original, description }) => {
  const gallerylinkEl = document.createElement('a');
  gallerylinkEl.classList.add('gallery__link');
  gallerylinkEl.href = original;
  gallerylinkEl.rel = 'noopener noreferrer nofollow';
  gallerylinkEl.target = '_blank';

  const imageEl = document.createElement('img');
  imageEl.classList.add('gallery__image');
  imageEl.src = preview;
  imageEl.dataset.source = original;
  imageEl.alt = description;

  gallerylinkEl.appendChild(imageEl);

  return gallerylinkEl;
};
const imageGalery = galleryItems.map(makeGaleryCard);
divGallery.append(...imageGalery);

console.log(galleryItems);
