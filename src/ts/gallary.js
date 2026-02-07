// gallary.js
import { changeModal } from './modules/changeModal.js';
import { se } from './modules/music.js';

document.querySelector('.gallary-close-button-container').addEventListener('click', () => {
  changeModal('top');
  se.play("button_close");
});

export function initGallary() {
  // 後でjsonからfetchする仕組みを作る
}