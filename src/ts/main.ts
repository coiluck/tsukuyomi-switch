// main.ts
import { initSetting } from './setting';
import { applyStore } from './modules/gameState';

document.addEventListener('DOMContentLoaded', async () => {
  await applyStore();
  initSetting();
});