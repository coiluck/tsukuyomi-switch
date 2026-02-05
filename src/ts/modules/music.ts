// music.ts
import { globalGameState } from './gameState';

class BGMController {
  private audio: HTMLAudioElement | null = null;
  private volume: number = 0;
  private FADE_TIME: number = 1000;
  private fadeInterval: number | null = null;

  setVolume(volume: number) {
    this.volume = volume;
    if (this.audio) {
      this.audio.volume = this.volume;
    }
  }

  async play(fileName: string) {
    // 新しいやつの事前読み込み
    const nextAudio = new Audio(`./src/assets/audio/bgm/${fileName}.mp3`);
    nextAudio.volume = this.volume;
    nextAudio.loop = true;
    nextAudio.load();
    // 古い
    if (this.audio) {
      await this.fadeOut();
    }
    // 新しい
    this.audio = nextAudio;
    this.audio.play().catch((e) => {
      console.warn('再生に失敗しました:', e);
    });
    globalGameState.LastBGM = fileName;
  }

  async fadeOut(duration: number = this.FADE_TIME) {
    if (!this.audio) {
      console.warn('再生中の音楽がありません');
      return Promise.resolve();
    }
    return new Promise<void>((resolve) => {
      const startVolume = this.audio?.volume || 0;
      const fadeStep = startVolume / (duration / 50);
      this.fadeInterval = setInterval(() => {
        if (!this.audio) {
          if (this.fadeInterval) clearInterval(this.fadeInterval);
          resolve();
          return;
        } else if (this.audio.volume > fadeStep) {
          this.audio.volume = Math.max(0, this.audio.volume - fadeStep);
        } else {
          // フェードアウト完了
          this.audio.volume = 0;
          this.audio.pause();

          if (this.fadeInterval) clearInterval(this.fadeInterval);
          this.fadeInterval = null;

          resolve();
        }
      }, 50);
    });
  }
}

const bgm = new BGMController();
export { bgm };

class SEController {
  private audio: HTMLAudioElement | null = null;
  private volume: number = 0;

  setVolume(volume: number) {
    this.volume = volume;
    if (this.audio) {
      this.audio.volume = this.volume;
    }
  }

  async play(fileName: string) {
    const wavList: string[] = ['button1', 'button2', 'button3', 'day', 'phone_call'];
    const extension = wavList.includes(fileName) ? '.wav' : '.mp3';

    this.audio = new Audio(`./src/assets/audio/se/${fileName}${extension}`);
    this.audio.volume = this.volume;
    this.audio.play().catch((e) => {
      console.warn('再生に失敗しました:', e);
    });
  }
}

const se = new SEController();
export { se };