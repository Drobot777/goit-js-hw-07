import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery')

const galleryClick = galleryEl.addEventListener('click', onImageClick )
const creatGallery = creatElementGallery(galleryItems)
function creatElementGallery(galleryItems) {
  return galleryItems.map(({preview, original, description})=> 
     `
     <li class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> 
    `).join('')
}
galleryEl.insertAdjacentHTML('beforeend',creatGallery)

function onImageClick(e) {
  e.preventDefault()
  if (e.target.nodeName !== 'IMG') {
    return
  }
  
 const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`,  {  onShow: (instance) => {
        window.addEventListener('keydown', onEscPress);
      },
      onClose: (instance) => {
        window.removeEventListener('keydown', onEscPress);
      },
    })
 
instance.show()
  
  function onEscPress(e) {
  const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;
    if (!isEscKey) return;
    instance.close();
}  
}










