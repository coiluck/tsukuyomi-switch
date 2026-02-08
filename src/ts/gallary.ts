// gallary.js
import { changeModal, closeModal } from './modules/changeModal.js';
import { se } from './modules/music.js';

document.querySelector('.gallary-close-button-container')?.addEventListener('click', () => {
  if (document.getElementById('modal-loadgame')?.style.zIndex === '100') {
    closeModal('gallary');
    changeModal('ending', null, 500);
  } else {
    changeModal('top', null, 500);
  }
  se.play("button_close");
});

interface CollectionData {
  id: number;
  title: string;
  description: string;
  icon: string;
}
const collectionData: CollectionData[] = [
  // ruka
  {
    id: 1,
    title: '次なる実験対象',
    description: '元の姿に戻り、ルカの実験に付き合わされる毎日になった。',
    icon: './src/assets/images/collection/ruka_success.png',
  },
  {
    id: 2,
    title: '実験継続！',
    description: '儀式に失敗し、ルカと2週間の共同生活が始まった。',
    icon: './src/assets/images/collection/ruka_failed.png',
  },
  // hina
  {
    id: 3,
    title: 'おかえり、お兄ちゃん',
    description: '元の姿に戻り、ひなに温かく迎えられた。',
    icon: './src/assets/images/collection/hina_success.png',
  },
  {
    id: 4,
    title: '期間限定の『お姉ちゃん』',
    description: '儀式に失敗し、ひなの髪を結う練習を始めた。',
    icon: './src/assets/images/collection/hina_failed.png',
  },
]

import { globalSettingState, saveSettingsData } from './modules/gameState';

export function initGallary() {
  const gallaryContainer = document.querySelector('.gallary-container') as HTMLElement;

  collectionData.forEach(item => {
    const gallaryItem = document.createElement('div');
    gallaryItem.classList.add('gallary-item');
    gallaryItem.setAttribute('data-id', item.id.toString());
    if (globalSettingState.ending.includes(item.id)) {
      gallaryItem.innerHTML = `
        <div class="gallary-item-image-container">
          <img src="${item.icon}" class="gallary-item-image">
        </div>
        <div class="gallary-item-text-container">
          <p class="gallary-item-text-title">${item.title}</p>
          <p class="gallary-item-text-description">${item.description}</p>
        </div>
      `;
    } else {
      gallaryItem.classList.add('locked');
      gallaryItem.innerHTML = `
        <div class="gallary-item-image-container locked">
          <img src="./src/assets/images/collection/locked.svg" class="gallary-item-image locked">
        </div>
        <div class="gallary-item-text-container">
          <p class="gallary-item-text-title">？？？</p>
          <p class="gallary-item-text-description">未達成のエンディングです</p>
        </div>
      `;
    }
    gallaryContainer.appendChild(gallaryItem);
  });
}

export function gallaryAchieved(id: number) {
  const item = collectionData.find(d => d.id === id);
  if (!item) return;

  const gallaryItem = document.querySelector(`.gallary-item[data-id="${id}"]`) as HTMLElement;
  if (!gallaryItem) return;

  if (!gallaryItem.classList.contains('locked')) return;

  gallaryItem.classList.remove('locked');

  gallaryItem.innerHTML = `
    <div class="gallary-item-image-container">
      <img src="${item.icon}" class="gallary-item-image animate-stamp">
    </div>
    <div class="gallary-item-text-container animate-text">
      <p class="gallary-item-text-title">${item.title}</p>
      <p class="gallary-item-text-description">${item.description}</p>
    </div>
  `;

  if (!globalSettingState.ending.includes(id)) {
    globalSettingState.ending.push(id);
    saveSettingsData();
  }
}