// setting.js
import { changeModal, closeModal } from './modules/changeModal.js';
import { globalSettingState, saveSettingsData } from './modules/gameState';
import { bgm, se } from './modules/music';

export function initSetting() {
  // Close Button
  const closeButtonContainer = document.querySelector('.setting-close-button-container') as HTMLElement;
  closeButtonContainer?.addEventListener('click', () => {
    if (document.getElementById('modal-setting')?.style.zIndex === '100') {
      closeModal('setting');
    } else {
      changeModal('top', null, 500);
    }
    se.play("button_close");
  });

  setupRadioGroup(
    'bgm-volume',
    globalSettingState.bgmVolume,
    (value) => {
      globalSettingState.bgmVolume = value;
      saveSettingsData();
      bgm.setVolume(value / 6);
      se.play("button3");
    }
  );
  setupRadioGroup(
    'se-volume',
    globalSettingState.seVolume,
    (value) => {
      globalSettingState.seVolume = value;
      saveSettingsData();
      se.setVolume(value / 6);
      se.play("button3");
    }
  );
  setupRadioGroup(
    'text-speed',
    globalSettingState.textSpeed,
    (value) => {
      globalSettingState.textSpeed = value;
      saveSettingsData();
      se.play("button3");
    }
  );
  // Screen Size
  setupScreenSizeControl();
}

function setupRadioGroup(name: string, currentValue: number, onUpdate: (val: number) => void) {
  const radios = document.querySelectorAll(`input[name="${name}"]`) as NodeListOf<HTMLInputElement>;
  radios.forEach((radio) => {
    // IDから数値を抽出
    const parts = radio.id.split('-');
    const value = parseInt(parts[parts.length - 1], 10);
    // 初期値の適用
    if (value === currentValue) {
      radio.checked = true;
    }
    // イベントリスナ
    radio.addEventListener('change', () => {
      if (radio.checked) {
        onUpdate(value);
      }
    });
  });
  switch (name) {
    case 'bgm-volume':
      bgm.setVolume(currentValue / 6);
      break;
    case 'se-volume':
      se.setVolume(currentValue / 6);
      break;
  }
}

import { getCurrentWindow, LogicalSize } from '@tauri-apps/api/window';

// 画面サイズ
async function setupScreenSizeControl() {
  const appWindow = getCurrentWindow();

  const buttons = document.querySelectorAll('.setting-button-item');
  // HTML構造順: [0] Window, [1] Full Screen
  const windowBtn = buttons[0] as HTMLElement;
  const fullScreenBtn = buttons[1] as HTMLElement;

  if (!windowBtn || !fullScreenBtn) return;

  // UIの更新関数
  const updateUI = (mode: 'window' | 'fullscreen') => {
    if (mode === 'window') {
      windowBtn.classList.add('selected');
      fullScreenBtn.classList.remove('selected');
    } else {
      windowBtn.classList.remove('selected');
      fullScreenBtn.classList.add('selected');
    }
  };

  // 初期状態の適用
  updateUI(globalSettingState.screenSize as 'window' | 'fullscreen');
  if (globalSettingState.screenSize === 'fullscreen') {
    await appWindow.setFullscreen(true);
  }

  // Windowボタンクリック時
  windowBtn.addEventListener('click', async () => {
    globalSettingState.screenSize = 'window';
    saveSettingsData();
    updateUI('window');
    // ウィンドウにする
    const isFullscreen = await appWindow.isFullscreen();
    if (isFullscreen === true) {
      await appWindow.setFullscreen(false);
      await appWindow.setSize(new LogicalSize(800, 500));
      se.play("button3");
    }
  });

  // Full Screenボタンクリック時
  fullScreenBtn.addEventListener('click', async () => {
    globalSettingState.screenSize = 'fullscreen';
    saveSettingsData();
    updateUI('fullscreen');
    // フルスクリーンにする
    const isFullscreen = await appWindow.isFullscreen();
    if (isFullscreen === false) {
      await appWindow.setFullscreen(true);
      se.play("button3");
    }
  });

  // escで解除
  const onKeyDown = async (e: KeyboardEvent) => {
    const key = e.key;
    if (key === 'Escape' || key === 'Esc') {
      const isFullscreen = await appWindow.isFullscreen();
      if (isFullscreen) {
        await appWindow.setFullscreen(false);
        // UI と設定を更新
        globalSettingState.screenSize = 'window';
        saveSettingsData();
        updateUI('window');
        // ウィンドウサイズを復元
        await appWindow.setSize(new LogicalSize(800, 500));
      }
    }
  };
  window.addEventListener('keydown', onKeyDown);
}