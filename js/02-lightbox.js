import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery')
const creatGallery = creatElementGallery(galleryItems)
function creatElementGallery(galleryItems) {
  return galleryItems.map(({preview, original, description})=> 
     `
     <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
   `).join('')
}
galleryEl.innerHTML = creatGallery
const onImagClick = galleryEl.addEventListener('click',(e)=> {
   e.preventDefault()
   if (e.target.nodeName !== 'IMG') {
      return
   }
const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionsDelay: 250, disableScroll: false });
})






