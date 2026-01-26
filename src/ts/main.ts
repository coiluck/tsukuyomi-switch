// main.ts
import { initSetting } from './setting';
import { applyStore } from './modules/gameState';
import { initSaveGame } from './savegame';
import { initLoadGame } from './loadGame.js';

document.addEventListener('DOMContentLoaded', async () => {
  await applyStore();
  initSetting();
  initSaveGame();
  initLoadGame();
});