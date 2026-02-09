// music.ts
import { globalGameState } from './gameState';

class BGMController {
  private audio: HTMLAudioElement | null = null;
  private volume: number = 0;
  private FADE_TIME: number = 1000;
  // private fadeInterval: number | null = null;
  private fadePromise: Promise<void> | null = null;

  setVolume(volume: number) {
    this.volume = volume;
    if (this.audio) {
      this.audio.volume = this.volume;
    }
  }

  async play(fileName: string, isLoop: boolean = true) {
    const nextAudio = new Audio(`./src/assets/audio/bgm/${fileName}.mp3`);
    nextAudio.volume = this.volume;
    nextAudio.loop = isLoop;
    nextAudio.load();

    if (this.audio) {
      await this.fadeOut();
    }
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }

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

    if (this.fadePromise) return this.fadePromise;

    this.fadePromise = new Promise<void>((resolve) => {
      const startVolume = this.audio?.volume ?? 0;
      const stepMs = 50;
      const steps = Math.max(1, Math.round(duration / stepMs));
      const fadeStep = startVolume / steps;

      const intervalId = window.setInterval(() => {
        if (!this.audio) {
          window.clearInterval(intervalId);
          // this.fadeInterval = null;
          this.fadePromise = null;
          resolve();
          return;
        }
        if (this.audio.volume > fadeStep) {
          this.audio.volume = Math.max(0, this.audio.volume - fadeStep);
        } else {
          // フェードアウト完了
          this.audio.volume = 0;
          this.audio.pause();

          window.clearInterval(intervalId);
          // this.fadeInterval = null;
          this.fadePromise = null;
          console.log(this.audio, 'fadeOut完了');
          resolve();
        }
      }, stepMs);

      // this.fadeInterval = intervalId as unknown as number;
    });

    return this.fadePromise;
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
    const wavList: string[] = ['button1', 'button2', 'button3', 'button_close', 'day', 'phone_call', 'disable'];
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