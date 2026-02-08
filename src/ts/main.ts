// main.ts
import { initSetting } from './setting';
import { applyStore } from './modules/gameState';
import { initSaveGame } from './saveGame.ts';
import { initLoadGame } from './loadGame.ts';
import { initGallary } from './gallary';

document.addEventListener('DOMContentLoaded', async () => {
  await applyStore();
  initSetting();
  initSaveGame();
  initLoadGame();
  initGallary();
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
});