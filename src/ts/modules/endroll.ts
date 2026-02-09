// endroll.ts
interface EndrollData {
  title: string;
  content: string[];
}
const endrollData: EndrollData[] = [
  {
    title: 'シナリオ',
    content: ['coiluck']
  },
  {
    title: 'プログラム',
    content: ['coiluck']
  },
  {
    title: 'デザイン',
    content: ['coiluck']
  },
  {
    title: 'BGM',
    content: ['EigHt', 'にゃるぱかBGM工房', 'ねむいぬ', 'のすたるじっくBGM庫', 'ふぁいの音楽置き場', 'モナカの音楽室']
  },
  {
    title: 'SE',
    content: ['Artlist', 'OtoLogic', '効果音ラボ']
  },
  {
    title: '背景画像',
    content: ['みんちりえ']
  },
  {
    title: 'UIアイコン',
    content: ['coiluck', 'Font Awesome', 'イラストAC']
  },
]

import { changeModal } from './changeModal.js';
import { bgm } from './music';

const BGM_LENGTH = 194; // sec
const SKIP_AVAILABLE_TIME = 7; // sec

function initEndroll() {
  bgm.fadeOut(750);
  const skipButton = document.querySelector('.endroll-skip-button-container') as HTMLElement;
  skipButton.style.display = 'none';
  skipButton.classList.remove('fade-in');
  const endrollContainer = document.querySelector('#modal-endroll .endroll-container') as HTMLElement;
  endrollContainer.innerHTML = '';
  endrollContainer.classList.remove('active');

  // 最初隠すためのアイテム
  endrollContainer.innerHTML += `
    <div class="endroll-spacer"></div>
  `;
  // ロゴ
  endrollContainer.innerHTML += `
    <div class="endroll-logo-container">
      <img src="./src/assets/images/title.png" class="endroll-logo-image">
    </div>
  `
  // クレジット
  endrollData.forEach(item => {
    const endrollItem = document.createElement('div');
    endrollItem.classList.add('endroll-section');
    endrollItem.innerHTML = `
      <p class="endroll-item-title">${item.title}</p>
      <div class="endroll-item-content">
        ${item.content
          .map(content => `<p>${content}</p>`)
          .join('')}
      </div>
    `;
    endrollContainer.appendChild(endrollItem);
  });
  // Endroll BGM
  endrollContainer.innerHTML += `
    <div class="endroll-bgm-container">
      <p class="endroll-item-title">エンドロールBGM</p>
      <div class="endroll-item-content">
        <p>EigHt - 「いつも心の中に！」</p>
      </div>
    </div>
  `;
  // 最後隠すためのアイテム
  endrollContainer.innerHTML += `
    <div class="endroll-spacer"></div>
  `;
  // 最後のテキスト
  endrollContainer.innerHTML += `
    <p class="endroll-last-text">
      Thanks for playing!
    </p>
  `
}

export async function startEndroll() {
  initEndroll();
  await new Promise(resolve => setTimeout(resolve, 750));
  bgm.play('itsumokokorononakani', false);
  const endrollContainer = document.querySelector('#modal-endroll .endroll-container') as HTMLElement;
  endrollContainer.classList.add('active');
  await new Promise(resolve => setTimeout(resolve, SKIP_AVAILABLE_TIME * 1000));
  const skipButton = document.querySelector('.endroll-skip-button-container') as HTMLElement;
  skipButton.style.display = 'block';
  skipButton.classList.add('fade-in');
  const endrollModal = document.getElementById('modal-endroll') as HTMLElement;
  endrollModal.addEventListener('click', exitEndroll);
  setTimeout(() => {
    exitEndroll();
  }, BGM_LENGTH * 1000);
}


function exitEndroll() {
  const endrollModal = document.getElementById('modal-endroll') as HTMLElement;
  endrollModal.removeEventListener('click', exitEndroll);
  bgm.fadeOut();
  changeModal('top', null, 1500);
}