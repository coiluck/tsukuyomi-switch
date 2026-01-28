// loadGame.js
import { changeModal, closeModal } from './modules/changeModal.js';

document.querySelector('.loadgame-close-button-container')?.addEventListener('click', () => {
  if (document.getElementById('modal-loadgame')?.style.zIndex === '100') {
    closeModal('loadgame');
  } else {
    changeModal('top', null, 500);
  }
});

import { loadGameExcerpt, loadGameFromSlot } from './modules/gameState.ts';
import { showConfirmWindow } from './modules/message.ts';
import { restoreGameFromGlobalState } from './opening.js';

export async function initLoadGame() {
  const loadItemContainer = document.querySelector('.loadgame-container') as HTMLElement;
  loadItemContainer.innerHTML = '';
  for (let slotId = 1; slotId <= 5; slotId++) {
    const loadItem = document.createElement('div');
    loadItem.classList.add('loadgame-item'); // CSSクラス名は適宜調整してください（savegame-itemを流用する場合もあります）

    // スロットのデータを取得
    // データがない場合は null が返ってくる想定
    const excerpt = await loadGameExcerpt(slotId);

    // 表示用のデータ準備
    const { root, savedAt, currentText, LoadImageSrc } = excerpt ||
      { root: "No Data", savedAt: null, currentText: "No Data", LoadImageSrc: null };

    const hasData = !!excerpt; // データが存在するかどうか

    const imageElement = LoadImageSrc ? `<img src="${LoadImageSrc}" class="loadgame-item-image">` : '';
    const date = savedAt ? new Date(savedAt).toLocaleString() : null;
    const dateElement = date ? `<p class="loadgame-item-text-top-date">${date}</p>` : '';

    loadItem.innerHTML = `
      <div class="loadgame-item-image-container">
        ${imageElement}
      </div>
      <div class="loadgame-item-text-container">
        <div class="loadgame-item-text-top">
          <p>${root}</p>
          ${dateElement}
        </div>
        <div class="loadgame-item-text-bottom">
          <p>${currentText}</p>
        </div>
      </div>
    `;

    // データがある場合
    if (hasData) {
      loadItem.addEventListener('click', () => {
        const allLoadItems = document.querySelectorAll('.loadgame-item');
        const hasSelected = Array.from(allLoadItems).some(el =>
          el.classList.contains('selected')
        );
        if (hasSelected) {
          return;
        }
        loadItem.classList.add('selected');
        showConfirmWindow(`スロット ${slotId} をロードしますか？<br>現在の進行状況は失われます。`, true, {
          onOk: async () => {
            const success = await loadGameFromSlot(slotId);
            if (success) {
              closeModal('loadgame');
              await restoreGameFromGlobalState();
              changeModal('opening', null, 500);
            }
            loadItem.classList.remove('selected');
          },
          onCancel: () => {
            loadItem.classList.remove('selected');
          }
        });
      });
    }
    loadItemContainer.appendChild(loadItem);
  }
}