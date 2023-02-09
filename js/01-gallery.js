import { galleryItems } from './gallery-items.js';
// Change code below this line
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

const galleryContainer = document.querySelector('.gallery');
galleryContainer.append(...imageGalery);

const onImageClick = event => (
  event.preventDefault(), event.target.nodeName === 'IMG' ? onOpenModalWindow(event) : false
);

galleryContainer.addEventListener('click', onImageClick);

function onOpenModalWindow(event) {
  const pressEsc = event => (event.code === 'Escape' ? instance.close() : false);

  const instance = basicLightbox.create(
    `<img src = "${event.target.dataset.source}"
    width="1280" height="1024">`,
    {
      onShow: instance => {
        galleryContainer.addEventListener('keydown', pressEsc);
      },
      onClose: instance => {
        galleryContainer.removeEventListener('keydown', pressEsc);
      },
    }
  );
  instance.show();
}

// const basicLightbox = require('https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js');
// https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js
// import * as basicLightbox from './basicLightbox.min.js';
// import * as basicLightbox from 'basiclightbox';

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <img src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg">
//     </div>
// `);
// console.log(basicLightbox);
// instance.show();

// instance.show(() => console.log('lightbox now visible'));
// basicLightbox
//   .create(
//     ` <img src="https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg">`
//   )
//   .show();
