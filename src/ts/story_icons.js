// story_icons.js
import { changeModal, showModal, closeModal } from './modules/changeModal.js';
import { bgm, se } from './modules/music';

document.getElementById('opening-icon-save').addEventListener('click', (event) => {
  event.stopPropagation();
  showModal('savegame');
  se.play("button3");
});
document.getElementById('opening-icon-load').addEventListener('click', (event) => {
  event.stopPropagation();
  showModal('loadgame');
  se.play("button3");
});
document.getElementById('opening-icon-setting').addEventListener('click', (event) => {
  event.stopPropagation();
  showModal('setting');
  se.play("button3");
});
document.getElementById('opening-icon-menu').addEventListener('click', (event) => {
  event.stopPropagation();
  showModal('menu');
  se.play("button3");
});
document.querySelector('.menu-close-button-container').addEventListener('click', () => {
  closeModal('menu');
  se.play("button_close");
});

document.getElementById('menu-item-save-data').addEventListener('click', () => {
  closeModal('menu');
  showModal('savegame');
  se.play("button3");
});
document.getElementById('menu-item-load-data').addEventListener('click', () => {
  closeModal('menu');
  showModal('loadgame');
  se.play("button3");
});
document.getElementById('menu-item-setting').addEventListener('click', () => {
  closeModal('menu');
  showModal('setting');
  se.play("button3");
});
document.getElementById('menu-item-return-title').addEventListener('click', () => {
  closeModal('menu');
  changeModal('top');
  bgm.fadeOut();
  se.play("button3");
});