// gameState.js
const initialState = {
  storyData : {
    openingStoryIndex: 0,
    branchStack: [],
    displayHistory: [],
  },
  gameData: {
    root: null,
    girlPoint: 0,
  },
  LoadImageSrc: './src/assets/images/background/nightsky.png',
};

const initialSetting = {
  bgmVolume: 2,
  seVolume: 5,
  voiceVolume: 5,
  textSpeed: 3,
  screenSize: 'window',
}

export const globalGameState = structuredClone(initialState); // 初期化
export const globalSetting = structuredClone(initialSetting); // 初期化

export function resetGlobalState() {
  const freshState = structuredClone(initialState);
  Object.keys(freshState).forEach((key) => {
    globalGameState[key] = freshState[key];
  });
}

export function setGlobalGameState(newState) {
  Object.keys(newState).forEach((key) => {
    globalGameState[key] = newState[key];
  });
}