import * as basicLightbox from 'basiclightbox';

function createModal(imagePath) {
  basicLightbox.create(`<img src="${imagePath}" width="1280">`,).show();  
}

export default createModal;