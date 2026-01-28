// scenario.js
import { nextDay, MoveBackgroundImage, changeBackgroundImage, shakeBackgroundImage, openBackgroundImage } from './scenarioAction.js';
import { globalGameState } from './gameState';

export const openingScenario = [
  {
    text: "――ここは、どこ?",
    speaker: "？？？",
    action: async () => {
      globalGameState.root = 'DAY 01';
    }
  },
  { text: "目を開けると、わたしは暗闇の中にいた。" },
  { text: "そして――" },
  { text: "わたしは、落ちていく。" },
  { text: "星空の中を、どこまでも、どこまでも。" },
  {
    text: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
    speaker: 'ココネ',
    action: async () => {
      nextDay(1, 'room_nighttime.jpg');
      changeBackgroundImage('opening', 'room_daytime.jpg');
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
  },
  {
    text: 'bbb',
    action: async () => {
      nextDay(2, 'room_nighttime.jpg');
      await console.log('bbb');
      openBackgroundImage();
    }
  },
  { text: 'ccc' },
  {
    text: 'ddddddddddddddddddddddddddd',
    action: async () => {
      nextDay(3, 'room_nighttime.jpg');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  },
  { text: 'eeeeeeeeeeeeeeeeeeeeeeeeeee' },
]

export const openingChoices = {
  test: [
    {
      buttonText: '選択肢A',
      branch: [
        { text: 'a-1' },
        { text: 'a-2' },
      ],
    },
    {
      buttonText: '選択肢B',
      branch: [
        {
          text: 'b-1',
          choiceId: 'test2',
        },
        { text: 'b-2' },
        { text: 'b-3' },
      ],
    },
  ],
  test2: [
    {
      buttonText: '選択肢A-2',
      branch: [
        { text: 'a-2-1' },
        { text: 'a-2-2' },
      ],
    },
    {
      buttonText: '選択肢B-2',
      branch: [
        { text: 'b-2-1' },
        { text: 'b-2-2' },
      ],
    },
  ],
};