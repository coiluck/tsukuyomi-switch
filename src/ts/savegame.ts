// savegame.ts
import { closeModal } from './modules/changeModal.js';

document.querySelector('.savegame-close-button-container')?.addEventListener('click', () => {
  // showModalからしか表示されない
  closeModal('savegame');
});

import { loadGameExcerpt, saveGameData } from './modules/gameState.ts';
import { showConfirmWindow } from './modules/message.ts';
import { initLoadGame } from './loadGame.ts';

export async function initSaveGame() {
  const saveItemConttainer = document.querySelector('.savegame-container') as HTMLElement;
  saveItemConttainer.innerHTML = '';

  for (let slotId = 1; slotId <= 5; slotId++) {
    const saveItem = document.createElement('div');
    saveItem.classList.add('savegame-item');
    const { root, savedAt, currentText, LoadImageSrc } = await loadGameExcerpt(slotId) ||
     { root: "No Data", savedAt: null, currentText: "保存データがありません", LoadImageSrc: null };
    const imageElement = LoadImageSrc ? `<img src="${LoadImageSrc}" class="savegame-item-image">` : '';
    const date = savedAt ? new Date(savedAt).toLocaleString() : null;
    const dateElement = date ? `<p class="savegame-item-text-top-date">${date}</p>` : '';
    saveItem.innerHTML = `
      <div class="savegame-item-image-container">
        ${imageElement}
      </div>
      <div class="savegame-item-text-container">
        <div class="savegame-item-text-top">
          <p>${root}</p>
          ${dateElement}
        </div>
        <div class="savegame-item-text-bottom">
          <p>${currentText}</p>
        </div>
      </div>
    `;
    saveItem.addEventListener('click', () => {
      const allSaveItems = document.querySelectorAll('.savegame-item');
      const hasSelected = Array.from(allSaveItems).some(el =>
        el.classList.contains('selected')
      );
      if (hasSelected) {
        return;
      }
      saveItem.classList.add('selected');
      showConfirmWindow(`スロット ${slotId} にセーブしますか？`, true, {
        onOk: async () => {
          await saveGameData(slotId);
          // 保存後に再描画
          await initSaveGame();
          await initLoadGame();
        },
        onCancel: () => {
          saveItem.classList.remove('selected');
        }
      });
    });

    saveItemConttainer.appendChild(saveItem);
  }
}