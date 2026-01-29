// gameState.js
import { Store } from '@tauri-apps/plugin-store';

interface gameState {
  storyData : {
    openingStoryIndex: number;
    branchStack: any[];
    displayHistory: any[];
    currentText: string | null;
  },
  root: 'DAY 01' | 'DAY 02' | 'Ending' | null;
  LoadImageSrc: string;
  savedAt?: string;
}
interface SettingsState {
  bgmVolume: number;
  seVolume: number;
  voiceVolume: number;
  textSpeed: number;
  screenSize: 'window' | 'fullscreen';
}

const initialGameState = {
  storyData : {
    openingStoryIndex: 0,
    branchStack: [],
    displayHistory: [],
  },
  root: null,
  LoadImageSrc: './src/assets/images/background/bushitu_daytime.jpg',
};

const initialSettingsState = {
  bgmVolume: 2,
  seVolume: 5,
  voiceVolume: 5,
  textSpeed: 3,
  screenSize: 'window',
}

export const globalGameState = structuredClone(initialGameState); // 初期化
export const globalSettingState = structuredClone(initialSettingsState); // 初期化

let settingsStoreCache: Store | null = null;
let userDataStoreCache: Store | null = null;

async function getSettingsStore(): Promise<Store> {
  if (!settingsStoreCache) {
    settingsStoreCache = await Store.load('settings.json');

    // 初期値
    const existing = await settingsStoreCache.get<SettingsState>('settings');
    if (!existing) {
      console.log('初期値を設定');
      await settingsStoreCache.set('settings', initialSettingsState);
      await settingsStoreCache.save();
    }
  }
  return settingsStoreCache;
}
async function getUserDataStore(): Promise<Store> {
  if (!userDataStoreCache) {
    userDataStoreCache = await Store.load('gameState.json');

    // 初期値
    const existing = await userDataStoreCache.get<gameState>('gameState');
    if (!existing) {
      await userDataStoreCache.set('gameState', initialGameState);
      await userDataStoreCache.save();
    }
  }
  return userDataStoreCache;
}

export async function saveSettingsData() {
  const store = await getSettingsStore();
  await store.set('settings', globalSettingState);
  await store.save();
}
export async function saveGameData(slotId: number) {
  if (slotId < 1 || slotId > 5) {
    console.error('Slot ID must be between 1 and 5');
    return;
  }
  const store = await getUserDataStore();
  const key = `save_slot_${slotId}`;

  const dataToSave = {
    ...globalGameState,
    savedAt: new Date().toISOString()
  };
  await store.set(key, dataToSave);
  await store.save();
}

export async function loadGameExcerpt(slotId: number): Promise<any> {
  const store = await getUserDataStore();
  const key = `save_slot_${slotId}`;

  const savedData = await store.get<gameState>(key);
  if (savedData) {
    return {
      root: savedData.root,
      savedAt: savedData.savedAt,
      currentText: savedData.storyData.currentText,
      LoadImageSrc: savedData.LoadImageSrc,
    };
  } else {
    console.log(`Slot ${slotId} is empty.`);
    return null;
  }
}
export async function loadGameFromSlot(slotId: number): Promise<boolean> {
  const store = await getUserDataStore();
  const key = `save_slot_${slotId}`;

  const savedData = await store.get<gameState>(key);

  if (savedData) {
    Object.assign(globalGameState, savedData);
    return true;
  } else {
    console.error(`Slot ${slotId} is empty.`);
    return false;
  }
}

export async function applyStore() {
  const settingsStore = await getSettingsStore();
  const storedSettings = await settingsStore.get<SettingsState>('settings');
  if (storedSettings) Object.assign(globalSettingState, storedSettings);
}