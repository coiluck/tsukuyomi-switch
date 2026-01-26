// setting.js
import { changeModal, closeModal } from './modules/changeModal.js';
import { globalSettingState, saveSettingsData } from './modules/gameState';

export function initSetting() {
  // Close Button
  const closeButtonContainer = document.querySelector('.setting-close-button-container') as HTMLElement;
  closeButtonContainer?.addEventListener('click', () => {
    if (document.getElementById('modal-setting')?.style.zIndex === '100') {
      closeModal('setting');
    } else {
      changeModal('top', null, 500);
    }
  });

  setupRadioGroup(
    'bgm-volume',
    globalSettingState.bgmVolume,
    (value) => {
      globalSettingState.bgmVolume = value;
      saveSettingsData();
    }
  );
  setupRadioGroup(
    'se-volume',
    globalSettingState.seVolume,
    (value) => {
      globalSettingState.seVolume = value;
      saveSettingsData();
    }
  );
  setupRadioGroup(
    'cv-volume',
    globalSettingState.voiceVolume,
    (value) => {
      globalSettingState.voiceVolume = value;
      saveSettingsData();
    }
  );
  setupRadioGroup(
    'text-speed',
    globalSettingState.textSpeed,
    (value) => {
      globalSettingState.textSpeed = value;
      saveSettingsData();
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
}

/**
 * 画面サイズ変更ボタンの制御
 */
function setupScreenSizeControl() {
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

  // Windowボタンクリック時
  windowBtn.addEventListener('click', () => {
    globalSettingState.screenSize = 'window';
    saveSettingsData();
    updateUI('window');
    // TauriのAPIを使ってウィンドウ化する処理をここに追加
    // appWindow.setFullscreen(false);
  });

  // Full Screenボタンクリック時
  fullScreenBtn.addEventListener('click', () => {
    globalSettingState.screenSize = 'fullscreen';
    saveSettingsData();
    updateUI('fullscreen');
    // TauriのAPIを使ってフルスクリーン化する処理をここに追加
    // appWindow.setFullscreen(true);
  });
}