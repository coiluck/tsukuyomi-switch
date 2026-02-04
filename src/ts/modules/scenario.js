// scenario.js
import { nextDay, MoveBackgroundImage, changeBackgroundImage, shakeBackgroundImage, openBackgroundImage } from './scenarioAction.js';
import { globalGameState } from './gameState';
import { changeCharacterImage, deleteCharacterTatie } from './character';

export const openingScenario = [
  {
    text: '放課後、いつも通り部室のドアを開けると、部員の月原ルカが机の上に様々な道具を並べていた。',
    action: async () => {
      globalGameState.root = 'DAY 01';
      changeBackgroundImage('opening', 'bushitu_daytime.jpg');
    }
  },
  {
    text: '「やっと揃ったよ！」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'base_open', true);
    }
  },
  { text: 'ここはオカルト部の部室。部員は俺たち二人だけだ。' },
  { text: 'ロウソク、奇妙な文様が描かれた布、そして古めかしい本が机の上に並んでいる。' },
  { text: '「はぁ……。なぁルカ、本当にやるのか？ これ」' },
  {
    text: '「当たり前でしょ？ 今日はこの実験のために、わざわざ『古の魔道書（通販）』を取り寄せたんだから！」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'base_close', false);
    }
  },
  {
    text: '彼女は嬉しそうに古い本を指差す。',
    choiceId: 'a01',
  },
  {
    text: '「もう！ いつもそうやって疑うんだから」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'pout', false);
    }
  },
  { text: '「だって、今まで一度も成功してないじゃん」' },
  {
    text: '「うっ...」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'trouble', false);
    }
  },
  { text: '図星を突かれて、ルカは言葉に詰まる。' },
  {
    text: '「で、でも今回は違うよ！ この本、学校の図書室の奥で見つけたんだけど、すっごく古くて本物っぽいの！」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'a', true);
    }
  },
  { text: '「本物っぽい、ね...」' },
  {
    text: '「信じてよ〜。ほら、手伝って？」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'pout', false);
    }
  },
  { text: '「はいはい」' },
  { text: '仕方なく、俺はルカの指示通りに床に円を描いていく。' },
  {
    text: '「そうそう、もうちょっと右！」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'base', true);
    }
  },
  { text: '「こう？」' },
  {
    text: '「完璧！」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'happy', true);
    }
  },
  { text: '数分後、床には複雑な魔法陣のようなものが完成した。' },
  {
    text: '「じゃあ、真ん中に立って」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'base', false);
    }
  },
  { text: '「また俺かよ...」' },
  {
    text: '「だって〜、私がやったら観察できないじゃん」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'perori', false);
    }
  },
  {
    text: 'そう言いながら、ルカは楽しそうに笑う。',
    choiceId: 'a02'
  },
  { text: '俺は諦めて魔法陣の中心に立った。' },
  {
    text: '「オッケー！ それじゃあ始めるよ……」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'base_open', true);
    }
  },
  { text: 'ルカが本を開き、何やら呪文のようなものを読み始める。' },
  { text: '普段のぼんやりした様子とは違い、妙に真剣な横顔だ。' },
  {
    text: '「――汝、理（ことわり）を違え、境界を越えん」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'serious', false);
    }
  },
  { text: 'だが、何も起こらない' },
  { text: '「やっぱりな...」' },
  {
    text: '「ちょ、ちょっと待って！ まだ途中だから！」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'trouble', false);
    }
  },
  { text: 'その時だった。' },
  {
    text: '「うわっ...！」',
    action: async () => {
      shakeBackgroundImage(1000, 8);
    }
  },
  { text: '揺れと共に足元の魔法陣が、突然光り始めた。' },
  {
    text: '「うそ...光ってる！？」',
    speaker: 'ルカ',
    choiceId: 'a03',
    action: async () => {
      changeCharacterImage('ruka', 'surprised', true);
    }
  },
  {
    text: '「あ、あれ～？ 光ったりしないはずなんだけどな～」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'a', false);
    }
  },
  { text: '光はどんどん強くなっていく。' },
  { text: '「やばいって！ ルカ、一回止めろ！」' },
  {
    text: '「ど、どうやって！？」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'surprised', true);
    }
  },
  {
    text: '「っ...！」',
    // flash.mp3を再生する
    // 後で書く
  },
  {
    text: '目を開けていられないほどに眩しい光が部屋中を包み込んだ。',
    action: async () => {
      changeBackgroundImage('opening', 'white.png');
      deleteCharacterTatie();
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  },
  // 2.mdへ
  {
    text: '「大丈夫？」',
    speaker: 'ルカ',
    action: async () => {
      changeBackgroundImage('opening', 'bushitu_daytime.jpg');
      await new Promise(resolve => setTimeout(resolve, 1000));
      changeCharacterImage('ruka', 'base_close', false);
    }
  },
  { text: '恐る恐るルカが声をかける。' },
  { text: '光は完全に消えていた。' },
  { text: '「...う...」' },
  {
    text: '「よかった...無事...って、え？」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'surprised', true);
    }
  },
  { text: 'ルカの目が大きく見開かれる。' },
  { text: '「何だよ...って」' },
  { text: '自分の声に驚く。' },
  {
    text: '高い。明らかに、さっきまでの自分の声じゃない。',
    choiceId: 'b01',
  },
  { text: '慌てて自分の体を見下ろす。' },
  { text: '「...嘘だろ」' },
  { text: '制服がぶかぶかになっている。' },
  { text: '体が一回り小さくなったような感覚。' },
  { text: 'そして、シャツ越しに感じる、今まで無かったはずの『重み』。' },
  { text: '「おい、ルカ...これ...」' },
  {
    text: '「え、えっと...」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'surprised', true);
    }
  },
  { text: 'ルカは完全に固まっている。' },
  { text: '「鏡...鏡ないか！？」' },
  {
    text: '「あ、あるよ！ 待って！」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'a', false);
    }
  },
  { text: 'ルカが慌てて鞄から手鏡を取り出す。' },
  {
    text: '俺はそれを受け取って、恐る恐る自分の顔を覗き込んだ。',
    choiceId: 'b02',
  },
  { text: '鏡に映っているのは、見知らぬ女の子の顔。' },
  { text: 'でも、よく見れば俺の面影がある。' },
  { text: '「マジか...」' },
  {
    text: '「お、女の子に...なってる...」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'a', true);
    }
  },
  { text: '「見りゃわかるよ！」' },
  { text: '声を荒げようとしたが、出てくるのは可愛らしい女の子の声。' },
  { text: '「くそ...声まで...」' },
  {
    text: '「ご、ごめん！ 私、本当にこんなことになるなんて...！」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'trouble', false);
    }
  },
  { text: 'ルカが泣きそうな顔で謝る。' },
  { text: '「いや...ルカのせいじゃ...」' },
  { text: 'まさか通販で効果のある魔導書が売っているなんて...' },
  { text: '固まっている俺の横で、ルカが近づいてくる。' },
  {
    text: '「あ、あの...とりあえず、確認...しよう？」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'blush', false);
    }
  },
  { text: '「確認って...」' },
  {
    text: '「その...本当に、全部...女の子になってるのか...とか...」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'blush_close', true);
    }
  },
  {
    text: 'ルカの顔が真っ赤になる。',
    choiceId: 'b03',
  },
  { text: '俺は意を決して、制服のボタンを外していく。' },
  { text: 'そして...' },
  { text: '「...」' },
  {
    text: '「ど、どう...？」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'base', true);
    }
  },
  { text: '「...完璧に女だ。胸もあるし...あと、その...下も...」' },
  { text: '完全に性別が変わってしまったようだった。' },
  { text: '「これ戻れるんだろうな？ 一生このままとか言わないよな！？」' },
  {
    text: '「あ、そうだった。えっとね……」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'a', false);
    }
  },
  { text: 'ルカは慌てて床に落ちていた古の魔道書（通販）を拾い上げ、ページをめくる。' },
  {
    text: '「えっと……『可逆性の項』……あった。これだ」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'base', false);
    }
  },
  {
    text: '「『満月の夜に、月光を鏡として逆儀式を行えば』いいっぽいよ！」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'base_open', false);
    }
  },
  { text: '「満月……？ 次の満月っていつだ？」' },
  { text: '俺は部室のカレンダーに目をやるが、月の満ち欠けは書かれていないようだった。' },
  { text: 'ルカがスマホを取り出して検索する。' },
  {
    text: '「あ、明日だ！」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'base', true);
    }
  },
  { text: '明日土曜日の夜まで丸一日、この体で過ごさなければいけない。' },
  {
    text: 'ただ、ひと月もある月の満ち欠けの周期から考えると幸運なのかもしれない。',
    choiceId: 'b05',
  },
  {
    text: '窓の外を見ると、空が茜色に染まり始めていた。',
    action: async () => {
      changeBackgroundImage('opening', 'bushitu_evening.jpg');
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  },
  { text: '壁の時計はもうすぐ下校時刻を差しそうだ。' },
  { text: '「日が暮れてきたな...そろそろ帰らないと」' },
  { text: 'ルカが気まずそうに俺の全身を見る。' },
  {
    text: '「そ、その格好で帰るの？」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'a', false);
    }
  },
  { text: '言われて気づく。今の俺は、ぶかぶかの男子制服を着た、見知らぬ女子生徒だ。' },
  { text: 'このまま校門を出れば不審がられるし、何よりこの姿で家に入ったら...。' },
  { text: '「ひなが...妹が、卒倒するかもな」' },
  { text: '頭を抱える俺を見て、ルカがおずおずと提案する。' },
  {
    text: '「ね、ねえ。もし帰るのが難しいなら...」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'blush', false);
    }
  },
  { text: '「ん？」' },
  {
    text: '「う、うち...来る？」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'blush_close', true);
    }
  },
  { text: 'ルカの言葉に、俺は動きを止める。' },
  { text: 'ルカは顔を真っ赤にして、慌てて手を振った。' },
  {
    text: '「変な意味じゃなくて！ その、服も貸せるし！」',
    speaker: 'ルカ',
    action: async () => {
      changeCharacterImage('ruka', 'blush', true);
    }
  },
  { text: '「あー...確かに」' },
  { text: '親は出張中。家には妹のひなが一人。' },
  { text: 'このまま帰って事情を説明するか、今日はルカの好意に甘えて態勢を整えるか。' },
  {
    text: 'どちらにしても、覚悟を決めなきゃいけないようだ。',
    choiceId: 'b06',
  },
  // これ以降のシナリオは選択肢の中で書く
]

export const openingChoices = {
  a01: [
    {
      buttonText: '通販かよ！',
      branch: []
    },
    {
      buttonText: 'また怪しげなやつ...',
      branch: []
    },
  ],
  a02: [
    {
      buttonText: 'まあ、どうせ何も起きないだろうし',
      branch: [],
    }
  ],
  a03: [
    {
      buttonText: 'おい、ルカ！',
      branch: [],
    },
    {
      buttonText: 'これが成功なのか！？',
      branch: [],
    },
  ],
  b01: [
    {
      buttonText: 'え...？',
      branch: [],
    },
  ],
  b02: [
    {
      buttonText: '...',
      branch: [],
    },
  ],
  b03: [
    {
      buttonText: '...見なくても分かるよ',
      branch: [
        {
          text: '「で、でも！ ちゃんと確認しないと！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'blush', true);
          }
        },
        { text: '「...はあ」' },
        { text: 'ため息をつく。' },
        { text: '確かに、現実逃避してる場合じゃない。' },
        { text: '「わかった...でも、ルカは後ろ向いててくれ」' },
        {
          text: '「う、うん！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'a', true);
          }
        },
        { text: 'ルカが慌てて背中を向ける。' },
      ],
    },
    {
      buttonText: 'く、来るな変態！',
      branch: [
        {
          text: '「で、でも！ ちゃんと確認しないと！」',
          speaker: 'ルカ',
          choiceId: 'b04',
          action: async () => {
            changeCharacterImage('ruka', 'blush', true);
          }
        }
      ],
    },
  ],
  b04: [
    {
      buttonText: '一人でできるから！',
      branch: [
        { text: '「ならいいけど...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'pout', false);
          }
        },
        { text: 'ルカは残念そうに引き下がる。' },
        { text: 'ただ、まだじっと見られていて脱ぎづらい。' },
        { text: '「ちゃんと後ろ向いててよ！」' },
        {
          text: '「う、うん！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'a', true);
          }
        },
        { text: 'ルカが慌てて背中を向ける。' },
      ],
    },
  ],
  b05: [
    {
      buttonText: '貴重な体験だと思っておくよ',
      branch: [
        {
          text: '「ありがとう...優しいんだね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', true);
          }
        },
        { text: 'ルカの表情が少し明るくなる。' },
        { text: '「そ、そうかな...」' },
        { text: '女の子の姿で照れるのは、何だか変な感じだ。' },
      ],
    },
    {
      buttonText: 'まあ一日だけなら...',
      branch: [
        {
          text: '「う、うん...ごめんね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'trouble', false);
          }
        },
        { text: 'ルカは申し訳なさそうに俯く。' },
        { text: '「別に謝らなくていいって。事故だろ」' },
        {
          text: '「でも...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'trouble', true);
          }
        },
        { text: '「明日には戻れるんだし。な？」' },
        { text: '俺がそう言うと、ルカは少しだけ表情を和らげた。' },
      ],
    },
  ],
  b06: [
    {
      buttonText: '家に帰る',
      branch: [
        { text: '「...やっぱり、家に帰るよ」' },
        { text: '俺はそう答えた。' },
        {
          text: '「え、大丈夫なの？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', true);
          }
        },
        { text: '「妹が一人で待ってるし、それに...」' },
        { text: '自分の胸元を軽くつまんで苦笑する。' },
        { text: '「明日には元に戻れるかもしれないんだろ？ なら、上手く誤魔化して自分の部屋に引きこもるのが一番安全策だ」' },
        {
          text: '「そっか...うん、確かにそうかも」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: 'ルカは少し残念そうに...いや、心配そうに頷いた。' },
        {
          text: '「気をつけてね？ 変な人に連れて行かれないように！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', true);
          }
        },
        { text: '「誰が連れて行くかよ」' },
        { text: '二人は鞄を持ち、部室を出た。 ' },
        { text: '廊下ですれ違う生徒に見られないよう、慎重に廊下を歩く。' },
        { text: 'ぶかぶかのズボンの裾を引きずりながら、そそくさと校舎を出た。' },
        // 3-hina.mdへ
        {
          text: '「...ただいま」',
          action: async () => {
            changeBackgroundImage('opening', 'entrance_evening.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: '恐る恐る玄関の扉を開ける。' },
        { text: 'いつもなら「お帰り」か、あるいは「遅い！」という言葉が飛んでくるはずだ。' },
        { text: '靴を脱いで上がろうとすると、ドタドタと廊下を走る足音が聞こえてきた。' },
        {
          text: '「もう、お兄ちゃん遅い！ 連絡くらいしてよ...ね...」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: 'リビングから顔を出した妹のひなは、腕組みをしてプリプリと怒っていたが――俺の姿を見た瞬間、その動きがピタリと止まった。' },
        {
          text: '「...え？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: 'ひなは目を点にして、俺の顔と、ぶかぶかの制服を交互に見る。' },
        { text: 'そして、玄関の外をキョロキョロと確認してから、警戒心丸出しの声で言った。' },
        {
          text: '「...誰？ お兄ちゃんの制服着て...何してるの？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', true);
          }
        },
        { text: '「あー...いや、その」' },
        {
          text: '「もしかして、お兄ちゃんの彼女...はないか。泥棒？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        { text: 'ひながジリジリと後ずさり、近くにあった掃除機を構える。' },
        { text: '「ま、待て！ 俺だ、お兄ちゃんだよ！」' },
        {
          text: '「はあ？ 何言ってるの？ 声も全然違うし」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        { text: '「いや、これはその...オカルト部の実験で...」' },
        {
          text: '「オカルト部...？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: 'ひなの眉がピクリと動く。' },
        { text: '「変な儀式やったら、失敗してこうなったんだよ！ 明日の満月の夜には戻れるはずだから！」' },
        { text: '俺は必死に説明した。' },
        {
          text: '「なら問題出してあげる。今朝の朝食は？」',
          speaker: 'ひな',
          choiceId: 'c01',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        {
          text: '「じゃあ、私の名前の由来は？」',
          speaker: 'ひな',
          choiceId: 'c02',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        { text: '「3月3日の雛祭りに生まれたから『ひな』。......安直すぎるって、小さい頃よく泣いてたよな」' },
        { text: '俺がそういうと、ひなは振り上げていた掃除機をゆっくりおろした。' },
        {
          text: '「本当に...お兄ちゃん、なの？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: '「ああ。信じてくれ」' },
        { text: '至近距離で顔を覗き込まれる。' },
        { text: 'ひなの大きな瞳が、俺の目をじっと見つめた。' },
        {
          text: '「...確かに。その情けない目つきは、お兄ちゃんかも」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: '「情けないって言うな」' },
        {
          text: '「そっか...へぇ...」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: 'ひなは俺の周りをぐるりと一周すると、少し呆れたようにため息をついた。' },
        {
          text: '「相変わらずバカなことばっかりして...。心配して損した」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        { text: '「悪かったよ...」' },
        {
          text: '「で、元に戻れるの？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', false);
          }
        },
        { text: '「ああ。明日の夜、満月の光を使って逆儀式をすれば戻れるらしい」' },
        {
          text: '「...らしい？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '「多分、な」' },
        {
          text: '「多分って...」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        { text: 'ひなが頭を抱える。' },
        {
          text: '「もう...お兄ちゃんのバカ！ なんでそんな怪しい実験に付き合ってるのよ！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', true);
          }
        },
        { text: '「悪かったって...」' },
        {
          text: '「全然反省してないでしょ！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', true);
          }
        },
        { text: 'ひなが俺の額を指で小突く。' },
        { text: 'その仕草は、いつも通りのひなだ。' },
        { text: '少しだけ、緊張が解けた。' },
        {
          text: '「...とりあえず、お風呂入ってきなよ。そのぶかぶかの制服、変だから」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '「そうだな...」' },
        {
          text: '「後で着替え持ってくから、脱衣所に置いとくね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: '「ああ、助かる」' },
        {
          text: '「...別に、お兄ちゃんのためじゃないからね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        {
          text: 'そう言いながらも、ひなの表情は少し柔らかかった。',
          choiceId: 'c03',
        },
        {
          text: '風呂から上がると、脱衣所にひなが用意してくれた着替えが置いてあった。',
          action: async () => {
            changeBackgroundImage('opening', 'bathroom.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: 'パジャマと...下着。' },
        { text: '「...これも着なきゃいけないのか」' },
        { text: '女物の下着を手に取り、しばし固まる。' },
        { text: 'でも、他に選択肢はない。' },
        { text: '「...仕方ない」' },
        { text: '俺は意を決して、それらを身につけた。' },
        { text: 'パジャマを着て鏡を見ると、そこには完全に女の子が映っていた。' },
        { text: '髪を乾かしながら、ため息をつく。' },
        { text: '明日の夜まで、この体で過ごさなければならない。' },
        { text: '「...頑張るしかないか」' },
        { text: '自分に言い聞かせて、俺はリビングへと向かった。' },
        {
          text: 'リビングに入ると、ひながテーブルに夕食を並べていた。',
          action: async () => {
            changeBackgroundImage('opening', 'living_nighttime_light.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        {
          text: '「あ、出てきた。...髪、ちゃんと乾かした？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: '「一応な」' },
        {
          text: '「嘘。まだ濡れてるじゃん」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: 'ひながじっと俺を見る。' },
        {
          text: '「...座りなさい」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: '「え？」' },
        {
          text: '「いいから座って。...仕方ないでしょ、お兄ちゃんじゃ絶対できないし」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        { text: '言われるままにソファに座ると、ひながタオルとドライヤーを持ってきた。' },
        {
          text: '「ほら、前向いて」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: '「...何する気だ?」' },
        {
          text: '「髪、乾かしてあげるの。そのままじゃ風邪ひくでしょ」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        { text: 'そう言って、ひなは俺の後ろに座った。' },
        { text: 'タオルで優しく髪を拭かれる感覚。続いて、ドライヤーの温かい風が髪に当たる。' },
        { text: '「...」' },
        { text: 'ひなの手つきは、意外なほど丁寧だった。' },
        {
          text: '「...私も昔、お母さんにやってもらったの、覚えてる？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: '不意に、ひながそう聞いてきた。' },
        { text: '「ああ...」' },
        { text: '小さかった頃のひなが、母親に髪を乾かしてもらっていた姿を思い出す。' },
        {
          text: '「...お兄ちゃん」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: '「ん？」' },
        {
          text: '「明日、ちゃんと元に戻ってよね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: 'その言葉には、普段のひなには見せない、小さな不安が滲んでいた。' },
        { text: '「ああ」' },
        { text: '俺はそう答えた。' },
        {
          text: '「...はい、完成」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', true);
          }
        },
        { text: 'ひながドライヤーを止める。' },
        { text: '「ありがとう」' },
        {
          text: '「...ふん。仕方なくやっただけだから」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        { text: 'そう言いながらも、ひなの表情はどこか満足げだった。' },
        {
          text: '「さ、冷めないうちにご飯食べよ」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '「ああ」' },
        { text: '二人でテーブルに向かい合って座る。' },
        { text: 'いつもと同じ光景のはずなのに、何だか少しだけ違って見えた。' },
        {
          text: '「「いただきます」」',
          speaker: '二人',
        },
        { text: '箸を取り、食事を始める。' },
        { text: 'ひなが作った料理は、いつも通り美味しかった。' },
        { text: '「...美味いな」' },
        {
          text: '「...そう」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: 'ひなが少しだけ嬉しそうに笑う。' },
        { text: 'しばらく無言で食事を続けていたが、ふとひなが口を開いた。' },
        {
          text: '「...ねえ、お兄ちゃん」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: '「ん？」' },
        {
          text: '「その姿でも...お兄ちゃんは、お兄ちゃんなんだよね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        {
          text: '真剣な目で、ひなが俺を見つめる。',
          choiceId: 'c04',
        },
        { text: '食事を終え、二人で後片付けをする。' },
        {
          text: '「じゃあ、私は自分の部屋に戻るから」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: '「ああ」' },
        {
          text: '「...おやすみ、お兄ちゃん」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', false);
          }
        },
        { text: '「おやすみ」' },
        {
          text: 'ひなが自分の部屋へと向かっていく。',
          action: async () => {
            deleteCharacterTatie();
          }
        },
        {
          text: '俺も自分の部屋に戻った。',
          action: async () => {
            changeBackgroundImage('opening', 'room_nighttime_light.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: 'ベッドに横になり、天井を見上げる。' },
        { text: '「...長い一日だったな」' },
        { text: '呟きながら、目を閉じる。' },
        { text: '明日の夜には、きっと元に戻れる。' },
        { text: 'そう信じて――俺は眠りについた。' },
        // 4-hina.mdへ
        {
          text: '朝、カーテンの隙間から差し込む光で、俺は目を覚ました。',
          action: async () => {
            nextDay(2, 'city_nighttime.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
            changeBackgroundImage('opening', 'room_daytime.jpg');
            globalGameState.root = 'DAY 02';
          }
        },
        { text: '「...ん」' },
        { text: '寝ぼけた頭で体を起こす。' },
        { text: '顔にかかる長い髪が、昨日の出来事が夢じゃなかったことを思い出させた。' },
        { text: '「...はぁ」' },
        { text: 'ため息をつきながらベッドから降りる。' },
        { text: '鏡を見ると、寝癖のついた女の子が映っていた。' },
        { text: '「...髪、どうすればいいんだ、これ」' },
        { text: '適当に手で梳いてみるが、うまくいかない。' },
        {
          text: 'あきらめてリビングに降りると、先に起きていたひなが口を開いた。',
          action: async () => {
            changeBackgroundImage('opening', 'living_daytime.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        {
          text: '「お兄ちゃん、今日どうするの？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: '「どうするって？」' },
        {
          text: '「だって、満月は今夜でしょ？ それまでずっと家にいるの？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: 'そう言われて、俺は時計を見た。' },
        { text: 'まだ午前中。元に戻れるのは夜だ。' },
        {
          text: '「...そうだな。特に予定もないし」',
          choiceId: 'e01',
        },
      ],
    },
    {
      buttonText: 'ルカの家に泊まる',
      branch: [
        { text: '「...じゃあ、お言葉に甘えてお邪魔しちゃおうかな」' },
        { text: '俺がそう言うと、ルカの顔がぱあっと輝いた。' },
        {
          text: '「ほんと！？ ...あ、いや、えっと。うん、その方が安全だよね！ 緊急事態だし！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'a', true);
          }
        },
        { text: '「ああ。この姿で家に帰ってひなに会う勇気は、正直ないし...このぶかぶかの服じゃ歩きにくいしな」' },
        {
          text: '「よし、じゃあ行こっか。私の家、こっちだから」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', true);
          }
        },
        { text: 'ルカが嬉しそうに手招きする。' },
        { text: '俺たちは並んで学校を出た。' },
        // 3-ruka.mdへ
        {
          text: '「着いたよ。ここ」',
          speaker: 'ルカ',
          action: async () => {
            changeBackgroundImage('opening', 'city_evening.jpg');
            changeCharacterImage('ruka', 'base', true);
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: 'ルカが立ち止まったのは、白い壁の二階建ての一軒家。' },
        { text: '玄関には小さな表札が掛かっている。' },
        { text: '「お邪魔します...」' },
        {
          text: '「うん。ちょっと散らかってるかもだけど」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        {
          text: 'ルカの家の玄関をくぐり、階段を上がった先にある部屋に通される。',
          action: async () => {
            changeBackgroundImage('opening', 'ruka_room_evening.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: 'ルカの部屋は、想像通りというか何というか...本棚にはオカルト雑誌や魔道書の類がぎっしりと詰まっていた。' },
        { text: 'ただ、ベッドカバーがパステルカラーだったり、机の上に可愛いぬいぐるみが置いてあったりと、年頃の女の子らしい一面も見え隠れしている。' },
        {
          text: '「とりあえず、その制服じゃ窮屈だよね。着替え、貸してあげる」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', true);
          }
        },
        { text: 'ルカがタンスをゴソゴソと漁り、薄いピンク色のパジャマを取り出した。' },
        { text: '猫の刺繍が入った可愛らしいものだ。' },
        { text: '「...これ、着るのか」' },
        {
          text: '「だ、だって他にないし！ 私の服だもん」',
          speaker: 'ルカ',
          choiceId: 'd01',
          action: async () => {
            changeCharacterImage('ruka', 'a', true);
          }
        },
        { text: ' 「...ありがとな」' },
        { text: ' 俺はそれを受け取り、ふと立ち尽くす。' },
        {
          text: '「？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'ルカが不思議そうに首を傾げる。' },
        { text: '「いや、着替えるから...その、向こう向いててくれよ」' },
        {
          text: '「あ、そっか...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: 'ルカはきょとんとした後、少し悪戯っぽく笑った。' },
        {
          text: '「もう体は女の子なんだし、気にしなくていいのに」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'doya', true);
          }
        },
        { text: '「中身は男なんだよ！ 恥じらいを持たせろ！」' },
        {
          text: '「はいはい」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        {
          text: 'ルカが部屋を出ていく。',
          action: async () => {
            deleteCharacterTatie();
          }
        },
        { text: '俺はぶかぶかの制服を脱ぎ、パジャマに袖を通した。' },
        { text: '生地が柔らかく、肌触りがいい。' },
        { text: 'サイズはぴったりだった。' },
        { text: '「着替えたぞ」 ' },
        {
          text: 'ルカが部屋に戻ってくる。',
          action: async () => {
            changeCharacterImage('ruka', 'base', true);
          }
        },
        { text: 'いつの間にかルカも部屋着に着替えていた。' },
        { text: '少しゆったりとしたTシャツにショートパンツ姿。' },
        { text: '普段の制服姿とは違う無防備な格好に、俺は思わず目を逸らす。' },
        {
          text: '「あ...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: '俺を見て、ルカが小さく声を漏らした。' },
        { text: '「ど、どうした？」' },
        {
          text: '「ううん...似合ってるなって」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', false);
          }
        },
        { text: '「...そうか」' },
        { text: '何だか照れくさくて、俺は視線を逸らした。' },
        {
          text: '「さて、と。もう遅いし、寝よっか」',
          speaker: 'ルカ',
          action: async () => {
            changeBackgroundImage('opening', 'ruka_room_nighttime_light.jpg'); // このままでいい
            changeCharacterImage('ruka', 'base', true);
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: 'ルカがベッドをポンポンと叩く。' },
        { text: '部屋にあるベッドは一つだけ' },
        { text: 'シングルサイズだ。' },
        { text: '「...どこで寝ればいい？」' },
        {
          text: '「え？ ここだけど」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'ルカが当たり前のようにベッドを指差す。' },
        { text: '俺は冷や汗をかいた。' },
        { text: '確かに、外見は完全に女の子だ。' },
        {
          text: 'でも、中身は男のままで...。',
          choiceId: 'd02',
        },
        { text: '俺がそう言って床に座ろうとすると、ルカがむっとした顔で遮った。 ' },
        {
          text: '「ダメ！ お客さんを床で寝かせるわけにはいかないよ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'pout', true);
          }
        },
        { text: '「でもベッド一つしかないし...」' },
        {
          text: '「それに...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'ルカが少し俯いて、上目遣いに俺を見る。 ' },
        {
          text: '「...今日は、その。私のせいでこんなことになっちゃったし...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'trouble', false);
          }
        },
        { text: 'しおらしい態度でそう言われると、断りづらい。' },
        { text: '「...何もしないなら、いいけど」' },
        {
          text: '「何もしないよ！ 何するつもりなの！？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'a', true);
          }
        },
        { text: '「いや、俺がじゃなくて...いや、何でもない」' },
        { text: '結局、俺は折れるしかなかった。' },
        {
          text: '「...電気、消すね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', true);
          }
        },
        {
          text: '部屋が暗闇に包まれる。',
          action: async () => {
            changeBackgroundImage('opening', 'ruka_room_nighttime.jpg'); // ここは変える
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: '俺たちは一つのベッドに並んで横になった。' },
        { text: '狭い。少し動くだけで、隣にいるルカの体温が伝わってくる。' },
        { text: 'シャンプーの甘い香りが鼻をくすぐり、心臓が早鐘を打っていた。 ' },
        {
          text: '「...ねえ、ごめんね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'それは、昼間よりもずっと真剣なトーンだった。' },
        {
          text: '「私が変な実験に付き合わせちゃったから...本当に戻れなかったらどうしようって、怖くて」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'trouble', false);
          }
        },
        { text: 'ルカの声が微かに震えている。' },
        {
          text: '布団の中で、ルカの手が俺のパジャマの袖をぎゅっと掴んだのが分かった。',
          choiceId: 'd03',
        },
        {
          text: 'やがて、ルカの寝息が聞こえ始める。',
          action: async () => {
            deleteCharacterTatie();
          }
        },
        { text: '俺も目を閉じた。' },
        { text: '明日の夜には、きっと元に戻れる。' },
        { text: 'そう信じて――。' },
        {
          text: '翌朝。顔に当たる柔らかい日差しと、何かの重みで目が覚めた。',
          action: async () => {
            nextDay(2, 'bushitu_nighttime.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
            changeBackgroundImage('opening', 'white.png');
            globalGameState.root = 'DAY 02';
          }
        },
        {
          text: '「ん...」',
          action: async () => {
            // あとでfadeなしの切り替えにする
            changeBackgroundImage('opening', 'ruka_room_daytime.jpg');
            openBackgroundImage();
          }
        },
        {
          text: '目を開けると、視界いっぱいにルカの寝顔があった。',
          action: async () => {
            changeCharacterImage('ruka', 'sleeping', false);
          }
        },
        { text: '「うわっ！？」' },
        { text: '飛び起きようとして、体が動かないことに気づく。' },
        { text: 'ルカが俺の体に腕を回し、抱き枕のようにして眠っていたのだ。' },
        { text: '規則正しい寝息が首筋にかかる。 柔らかい感触と温もりが全身を包んでいて――' },
        { text: '（ち、近い...！） ' },
        { text: '昨晩は背中合わせだったはずなのに、いつの間にこんな体勢に...。' },
        {
          text: '「...んぅ...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'waking', false);
          }
        },
        { text: 'ルカが身じろぎをして、ゆっくりと目を開けた。' },
        { text: 'ぼんやりとした瞳が俺を捉える。' },
        {
          text: '「...あ、おはよぉ...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'waking_open', true);
          }
        },
        { text: '「お、おはよう...」' },
        {
          text: '「...ふわぁ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'waking', false);
          }
        },
        { text: 'ルカはあくびをして、しばらくしてから今の状況に気づいたらしい。' },
        { text: 'ぱちくりと瞬きをして、自分の腕が俺に回されているのを確認し――' },
        {
          text: '「～～っ！？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'blush_close', true);
          }
        },
        { text: 'バッと勢いよく飛び退いた。' },
        {
          text: '「ご、ごめん！ 私、寝相悪くて...！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'blush', false);
          }
        },
        { text: '「い、いや...気にしてない...けど' },
        { text: 'お互いに顔を見合わせ、気まずい沈黙が流れる。' },
        {
          text: '「...あ、朝ごはん！ 作るね！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'blush', true);
          }
        },
        {
          text: 'ルカは逃げるようにベッドから降りていった。',
          action: async () => {
            deleteCharacterTatie();
          }
        },
        { text: 'しばらくして、リビングからトーストの焼けるいい匂いが漂ってきた。' },
        { text: '洗面所で顔を洗い、鏡を見る。' },
        { text: 'そこには寝癖のついた美少女――今の俺が映っていた。' },
        { text: '「...やっぱり夢じゃないよな」' },
        { text: '自分の頬をつねってみる。...痛い。' },
        {
          text: 'ため息をついてリビングに戻ると、ルカがテーブルに朝食を並べていた。',
          action: async () => {
            changeBackgroundImage('opening', 'living_daytime.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        {
          text: '「簡単なものだけど...どうぞ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: '「ありがとう。いただきます' },
        { text: '二人で食べ始めようとした時、俺のスマホが鳴った。' },
        { text: '着信画面には「ひな」の文字。' },
        { text: '「...妹からだ」' },
        {
          text: '「出ないの？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: '「...出るか」' },
        { text: '電話に出ると、すぐにひなの声が響いた。' },
        {
          text: '『お兄ちゃん！？ 今どこにいるの！』',
          speaker: 'ひな',
        },
        { text: 'スピーカーにしなくても聞こえるほどの大声が響く。' },
        {
          text: '『昨日帰ってこないし、連絡もないし！』',
          speaker: 'ひな',
        },
        { text: '怒気を含んだ声。予想通りだ。' },
        {
          text: '「あー...えっと」',
          choiceId: 'f01',
        },
        { text: '朝食を食べ終えて、二人でリビングのソファに座る。' },
        {
          text: '「今日、どうする？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'ルカが聞いてくる。' },
        { text: '「どうするって？」' },
        {
          text: '「だって、満月は夜でしょ？ それまで時間あるし」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', true);
          }
        },
        { text: '俺は少し考える。' },
        { text: '妹のひなは昨日帰らなかったことで怒っていた。' },
        { text: '今日も遅くなれば、さらに機嫌を損ねるだろう。' },
        {
          text: 'でも、ルカと一緒にいれば...この不安な状況も少しは紛れる気がする。',
          choiceId: 'f02',
        },
      ],
    },
  ],
  c01: [
    {
      buttonText: '味噌汁としょうが焼き',
      branch: [
        { text: '「味噌汁としょうが焼きだったよ」' },
        { text: 'ひなはうなずく。' },
      ],
    },
    {
      buttonText: 'サーロインステーキ',
      branch: [
        { text: '「サーロインステーキだったね」' },
        {
          text: '「なわけないでしょ、朝からパーティーするわけないじゃん！ やっぱり偽物でしょ！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', true);
          }
        },
        { text: '「じょ、冗談だって！」' },
      ],
    }
  ],
  c02: [
    {
      buttonText: 'ひな祭り',
      branch: [],
    },
  ],
  c03: [
    {
      buttonText: 'ありがとな',
      branch: [
        {
          text: '「...っ」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', true);
          }
        },
        { text: 'ひなが顔を赤らめて、ぷいっと顔を背ける。' },
        {
          text: '「だ、だから！ お兄ちゃんのためじゃなくて、家が汚れるのが嫌なだけだから！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'blush', true);
          }
        },
        { text: '「はいはい」' },
        {
          text: '「もう！ 早くお風呂入ってきなさいよ！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', true);
          }
        },
        {
          text: 'ひなに押されるようにして、俺は風呂場へと向かった。',
          action: async () => {
            deleteCharacterTatie();
          }
        },
      ],
    },
    {
      buttonText: '素直じゃないな',
      branch: [
        {
          text: '「う、うるさい、いいから早く入ってきなさいよ！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', true);
          }
        },
        { text: 'ひなが頬を膨らませる。' },
        { text: 'その反応が可愛くて、少し笑ってしまった。' },
        {
          text: '「わ、笑わないでよ！ その顔で笑われると...変な感じ！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'blush', true);
          }
        },
        { text: '「悪い悪い」' },
        {
          text: '俺は慌てて謝り、風呂場に入った。',
          action: async () => {
            deleteCharacterTatie();
          }
        },
      ],
    }
  ],
  c04: [
    {
      buttonText: '当たり前だろ',
      branch: [
        {
          text: '「...そっか」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: 'ひながほっとしたように笑った。' },
        {
          text: '「うん。そうだよね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: '「どうした、急に」' },
        {
          text: '「ううん。ちょっと...確認したかっただけ」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: 'ひなは俯いて、箸を動かし始めた。' },
        { text: 'その横顔は、どこか安心したようにも見えた。' },
      ],
    },
    {
      buttonText: '不安か？',
      branch: [
        {
          text: '「...ちょっとね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: 'ひなが正直に頷く。' },
        {
          text: '「だって、見た目が全然違うから...本当にお兄ちゃんなのかなって」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: '「中身は変わってないよ」' },
        {
          text: '「...うん。分かってる」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: 'ひなが小さく笑う。' },
      ],
    }
  ],
  d01: [
    {
      buttonText: '...わかった',
      branch: [
        {
          text: '「ごめんね、これしかなくって...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'trouble', false);
          }
        },
        { text: 'ルカが申し訳なさそうに言う。' },
        { text: '「いや、貸してくれるだけありがたいよ」' },
        {
          text: '「そう言ってくれると助かる...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
      ],
    },
    {
      buttonText: '可愛すぎないか...？',
      branch: [
        {
          text: '「え、そうかな？ 普通だと思うけど...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'ルカは首を傾げる。' },
        { text: '「まあ...仕方ないか」' },
      ],
    },
  ],
  d02: [
    {
      buttonText: '俺は床で寝るよ',
      branch: [],
    },
  ],
  d03: [
    {
      buttonText: '大丈夫、きっと戻れるよ',
      branch: [
        {
          text: '「...うん」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'a', true);
          }
        },
        { text: 'ルカの声が少し明るくなる。' },
        { text: '「ルカがちゃんと調べてくれたんだろ？ なら信じてる」' },
        {
          text: '「...ありがとう」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: '握られていた袖が、少しだけ強く引かれた気がした。' },
        { text: '暗闇の中、ルカの表情は見えないけれど。' },
        { text: '「明日の夜、一緒に頑張ろう」' },
        {
          text: '「...うん。一緒に、ね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', true);
          }
        },
        { text: 'ルカの声が、いつもより柔らかく聞こえた。' },
      ],
    },
    {
      buttonText: 'ルカのせいじゃないって',
      branch: [
        {
          text: '「でも...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'trouble', true);
          }
        },
        { text: '「俺が付き合うって決めたんだから。それに...」' },
        { text: '少し考えて、俺は続けた。' },
        { text: '「...ルカが一緒に解決しようとしてくれてるから、心強いよ」' },
        {
          text: '「...っ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'blush_close', false);
          }
        },
        { text: 'ルカが小さく息を呑む音が聞こえた。' },
        {
          text: '「本当に...？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'a', false);
          }
        },
        { text: '「ああ。一人だったら、もっとパニックになってたと思う」' },
        { text: 'しばらく沈黙が続いた後、ルカがぽつりと呟く。' },
        {
          text: '「...優しいんだね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: '「そうか？」' },
        {
          text: '「うん...だから、絶対に元に戻してみせるから」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', true);
          }
        },
        { text: 'パジャマの袖を掴む手に、力が込められる。' },
        { text: '「...信じてる」' },
        { text: '俺がそう答えると、ルカは小さく「うん」と返した。' },
        { text: 'その声は、さっきまでの不安げな調子とは違って、どこか決意に満ちていた。' },
      ],
    },
  ],
  e01: [
    {
      buttonText: 'ゲームでもするか',
      branch: [
        {
          text: '「...じゃあ、私も付き合ってあげる」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', true);
          }
        },
        { text: 'ひなが少し嬉しそうに言う。' },
        { text: '「いいのか？」' },
        {
          text: '「別に暇だし。それに...」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '「それに？」' },
        {
          text: '「...一人にしとくと、また変なことしそうだから」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', false);
          }
        },
        { text: '「しないよ」' },
        {
          text: '「信用できない」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        { text: '俺は苦笑する。' },
        {
          text: '「じゃあ、準備してくるから。お兄ちゃんは先にリビング行ってて」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        {
          text: '「おう」',
          action: async () => {
            deleteCharacterTatie();
          }
        },
        // 6.mdへ
        {
          text: '数分後、ひながリビングに戻ってきた。',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        {
          text: '手には二つのゲームコントローラーを持っている。',
          choiceId: 'h01',
        },
      ],
    },
    {
      buttonText: '外、出てみようかな',
      branch: [
        {
          text: '「え...その姿で？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: '「どうせ今夜には戻るんだし。せっかくだから、ちょっと散歩くらい」' },
        {
          text: '「...本当に大丈夫？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', false);
          }
        },
        { text: '「多分な」' },
        {
          text: '「...気をつけてよね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: 'ひなが心配そうに俺を見る。' },
        { text: '「ああ」' },
        {
          text: '軽く手を振って、俺は家を出た。',
          action: async () => {
            deleteCharacterTatie();
          }
        },
        // 7.mdへ
        { text: '「...ふぅ」' },
        {
          text: '玄関のドアが閉まった瞬間、俺は小さく息を吐いた。',
          action: async () => {
            changeBackgroundImage('opening', 'city2_daytime.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: '外の空気は澄んでいて気持ちいいが、今の俺には別の緊張感がある。' },
        { text: '「やっぱり、見られてる気がする...」' },
        { text: 'ひなが貸してくれたワンピースは、思ったより似合っている気がする。' },
        { text: '「これなら目立たないから」と渡されたが、男の俺からすれば、この格好自体が異常事態だ。' },
        { text: '通り過ぎる人の視線が、やけに刺さる気がする。' },
        { text: '「早く戻ろうかな...」' },
        { text: '弱気になりかけた時、前方に見覚えのある後ろ姿を見つけた。' },
        { text: '「...ルカ？」' },
        { text: '声をかけると、その人物がビクリと肩を震わせて振り返った。' },
        {
          text: '「は、はいっ！ 勧誘なら結構です...って」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'a', true);
          }
        },
        { text: 'ルカは俺の顔を見て、きょとんとした表情になる。' },
        {
          text: '「えっと...どちら様でしたっけ？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: '「俺だよ、俺。分からないか？」' },
        {
          text: '「え...その口調...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'a', false);
          }
        },
        { text: 'ルカが目を見開き、俺の周りをぐるぐると回り始める。' },
        {
          text: '「えええっ！？ こんなところで！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'surprised', true);
          }
        },
        { text: '「な、なんだよ」' },
        {
          text: '「だ、だって！ その格好！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'a', false);
          }
        },
        { text: 'ルカが俺のワンピース姿を指差して、目を輝かせる。' },
        {
          text: '「すっごく似合ってる！ 儚げな美少女って感じ！」',
          speaker: 'ルカ',
          choiceId: 'i01',
          action: async () => {
            changeCharacterImage('ruka', 'happy', true);
          }
        },
        {
          text: '「でも、どうしたの？ 家で大人しくしてるんじゃなかったっけ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: '「ひなが心配性でな...息抜きにちょっと散歩だ」' },
        {
          text: '「そっか。ひなちゃん、優しいね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: 'ルカは微笑ましそうに言うと、持っていたトートバッグを持ち直した。' },
        { text: '中から、何やら怪しげな香草の匂いが漂ってくる。' },
        { text: '「ルカこそ、何してるんだ？」' },
        {
          text: '「え？ ああ、これ？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'ルカはバッグの中身をチラリと見せた。' },
        { text: '大量のロウソク、塩、そして得体の知れない乾燥した草。' },
        {
          text: '「今夜の儀式の準備！ 満月の夜にしか手に入らないアイテムが必要で、隣町の専門店まで行ってたの」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: '「専門店なんてあるのかよ...」' },
        {
          text: '「あるよ！ 『魔術堂』っていう路地裏のお店」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', true);
          }
        },
        { text: 'ルカは得意げに胸を張る。' },
        {
          text: '「これで準備は万端。絶対に元に戻せるから」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', false);
          }
        },
        { text: 'その言葉に、俺は安堵と同時に、少しだけ申し訳なさを感じた。' },
        { text: '「...悪いな、ルカ。俺のために走り回らせて」' },
        {
          text: '「ううん。私が巻き込んじゃったんだし、これくらい当然だよ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: 'ルカは首を横に振る。' },
        {
          text: '「それに...私の実験のせいでもあるけど...ちょっとだけ楽しいし」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', true);
          }
        },
        { text: '「楽しいって...」' },
        {
          text: '「あ、いや！ 観察対象として興味深いっていうか！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'a', true);
          }
        },
        { text: 'ルカが慌てて誤魔化す。' },
        { text: 'その様子がおかしくて、俺は思わず笑ってしまった。' },
        { text: '「...はは」' },
        {
          text: '「あ、笑った」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: '「笑うだろ、そりゃ」' },
        { text: 'ルカもつられて笑う。' },
        { text: '街角で二人で笑い合う。' },
        { text: '奇妙な状況だが、不思議と居心地は悪くなかった。' },
        { text: 'ふと、空を見上げた。' },
        { text: '青空の向こうに、夜には満月が昇る。' },
        {
          text: '「...ねえ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'ルカが俺の袖を軽く引く。' },
        {
          text: '「少し、付き合ってくれる？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: '「ん？」' },
        {
          text: '「せっかく会えたしさ、あそこのカフェ行こ？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', false);
          }
        },
        {
          text: '二人でカフェに入り、窓際の席に座った。',
          action: async () => {
            changeBackgroundImage('opening', 'kissaten_daytime.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: 'ルカはミルクティー、俺はアイスコーヒーを注文する。' },
        {
          text: '「...そういえば」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'ルカがカップを両手で包みながら言った。' },
        {
          text: '「女の子になってみて、どう？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', true);
          }
        },
        { text: '「どうって...」' },
        {
          text: '「大変だった？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: '「まあ...色々とな」' },
        { text: '髪のこと、服のこと、体のこと。' },
        { text: '一日だけでも、女の子として生きるのは想像以上に大変だった。' },
        { text: '「でも...」' },
        {
          text: '「でも？」',
          speaker: 'ルカ',
          choiceId: 'i02',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: 'ルカが少し驚いたような顔をする。' },
        { text: '「ひなが優しくしてくれたし、こうやってルカとも話せたし」' },
        {
          text: '「...そっか」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', false);
          }
        },
        { text: 'ルカが嬉しそうに笑う。' },
        { text: 'しばらく他愛のない話をしながら、二人で時間を過ごした。' },
        {
          text: '気づけば、窓の外の日差しが少しずつ傾き始めている。',
          action: async () => {
            // 後で書く -> fadeなしの切り替えにする
            changeBackgroundImage('opening', 'kissaten_evening.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        {
          text: '「...そろそろ、時間だね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'ルカがスマホを見ながら言った。' },
        {
          text: '「今夜、月が昇るのは8時過ぎ。それまでに準備を整えないと」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: '「...ああ」' },
        {
          text: '「どこで儀式する？ 私の家？ それとも...」',
          speaker: 'ルカ',
          choiceId: 'i03',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
      ],
    }
  ],
  f01: [
    {
      buttonText: '友達の家に泊まった',
      branch: [
        { text: '「と、友達の家だよ。急に泊まることになってさ」' },
        { text: '俺はとっさに嘘をついた。' },
        {
          text: '『友達？ 男友達？』',
          speaker: 'ひな',
        },
        { text: '「え？ ああ、まあ...」' },
        {
          text: '『...ふーん。お兄ちゃんに、急に泊まりに行くような仲のいい男友達なんていたっけ？』',
          speaker: 'ひな',
        },
        { text: '「うっ...」' },
        { text: '痛いところを突かれる。' },
        {
          text: '『まあいいけど...。今日は帰ってくるんだよね？』',
          speaker: 'ひな',
        },
        { text: '「うん」' },
        { text: 'そういうと、ひなは不機嫌そうに電話を切った。' },
        { text: '「...怒ってるな」' },
        {
          text: '「そりゃそうだよ。心配したんだよ、きっと」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'ルカが苦笑する。' },
      ],
    },
    {
      buttonText: 'ルカの家だ',
      branch: [
        {
          text: '『...え？』',
          speaker: 'ひな',
        },
        { text: '一瞬の沈黙。' },
        {
          text: '『ルカって...オカルト部の月原さん？』',
          speaker: 'ひな',
        },
        { text: '「ああ」' },
        {
          text: '『女の子の家に！？ お兄ちゃん何してるの！？』',
          speaker: 'ひな',
        },
        { text: '「いや、これには事情が...」' },
        {
          text: '『事情って何よ！ 説明しなさいよ！』',
          speaker: 'ひな',
        },
        { text: '完全に怒っている。' },
        { text: '「あとで説明するから」' },
        {
          text: '『絶対だからね！ 今日は帰ってくるんでしょうね！？』',
          speaker: 'ひな',
        },
        { text: '「わ、わかった」' },
        {
          text: '『もう！』',
          speaker: 'ひな',
        },
        { text: 'ぷつりと電話が切れた。' },
        { text: '「...完全に怒らせちゃったな」' },
        {
          text: '「そうだね...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'trouble', false);
          }
        },
        { text: 'ルカが申し訳なさそうに笑った。' },
      ],
    }
  ],
  f02: [
    {
      buttonText: 'ルカともう1日過ごす',
      branch: [
        {
          text: '「よし、なら今日一日は私が責任持ってお世話するから！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'perori', false);
          }
        },
        { text: 'ルカは胸を張って言う。' },
        { text: '何だか微笑ましくて、俺は小さく笑った。' },
        { text: '「じゃあ、お言葉に甘えるよ」' },
        {
          text: '「うん、任せて！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', true);
          }
        },
        { text: 'ルカは嬉しそうに立ち上がった。' },
        {
          text: '「じゃあ、お出かけしよっか！ その格好じゃ外出られないし、私の服貸してあげる！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: '「...マジで外出るのか」' },
        {
          text: '「せっかくの休日だもん。部屋に籠ってるのもったいないよ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', false);
          }
        },
        { text: '確かに、一日中部屋にいても気が滅入るだけかもしれない。' },
        { text: '「わかった。じゃあ、頼むよ」' },
        { text: '俺がそう答えると、ルカは嬉しそうにタンスを開け始めた。' },
        { text: 'その後、ルカがいくつかの服を選んでくれて――' },
        { text: '白いブラウスに膝丈のスカート、カーディガンという組み合わせ。' },
        {
          text: '「これ、私のお気に入りなんだ。似合うと思うよ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: '「...そうか」' },
        { text: '着替えを終えて鏡を見ると、そこにはごく普通の女子高生が映っていた。' },
        {
          text: '「うん、やっぱり可愛い！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', true);
          }
        },
        { text: 'ルカが満足そうに頷く。' },
        { text: '「可愛いって言うな...」' },
        {
          text: '「でも本当だもん」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: '二人で外に出る準備を整え、ルカの家を後にした。' },
        // 8.mdへ
        {
          text: '「どこ行く？」',
          speaker: 'ルカ',
          action: async () => {
            changeBackgroundImage('opening', 'city2_daytime.jpg');
            changeCharacterImage('ruka', 'base_close', false);
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        {
          text: '外に出て、ルカが聞いてくる。',
          choiceId: 'j01',
        },
        { text: '普段なら何てことない場所も、この姿で歩くと全てが新鮮に感じる。' },
        {
          text: 'しばらく歩いた後、公園のベンチに座って休憩する。',
          action: async () => {
            changeBackgroundImage('opening', 'park_evening.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: '「もう夕方か...」' },
        { text: '西の空が、少しずつ茜色に染まり始めていた。' },
        {
          text: '「うん...そろそろ、準備しないとね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: 'ルカが時計を見る。' },
        { text: '「満月は、今夜だもんな」' },
        {
          text: '「...怖い？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: '「まあ...少しは」' },
        { text: '正直に答えた。' },
        { text: '元に戻れなかったらどうしよう、という不安はある。' },
        {
          text: 'でも――',
          choiceId: 'j03',
        },
        { text: '「でも、ルカが一緒だから...大丈夫だと思う」' },
        {
          text: '「...！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'a', false);
          }
        },
        { text: 'ルカが驚いたように目を見開く。' },
        { text: 'そして、すぐに柔らかく微笑んだ。' },
        {
          text: '「うん。一緒に、頑張ろう」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', true);
          }
        },
        { text: '「ああ」' },
        { text: '二人でベンチを立ち上がる。' },
        { text: 'これから、満月の夜。' },
        { text: '元に戻るための、最後の儀式が待っている。' },
        {
          text: '「じゃあ、帰ろっか」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: '「ああ」' },
        { text: '夕焼けの中、二人で歩き出した。' },
        // 9-ruka.mdへ
      ],
    },
    {
      buttonText: '家に帰る',
      branch: [
        { text: '「...やっぱり、家に帰るよ。妹が一人で待ってるし、昨日も帰らなかったから...」' },
        {
          text: '「うん、分かる。ひなちゃん、心配してるよね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', true);
          }
        },
        { text: 'ルカが優しく頷く。' },
        {
          text: '「なら、夜は私が家に行こうか？ 道具は全部持って行くから」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: '「いいのか？」' },
        {
          text: '「当たり前だよ。私のせいでこうなったんだし、最後まで責任持つから」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: 'ルカが力強く頷く。' },
        { text: '「ありがとう。じゃあ、準備するよ」' },
        { text: '着替えを終え、昨日のぶかぶかの制服に戻る。' },
        { text: '「...やっぱりこれ、目立つよな」' },
        {
          text: '「うーん...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'ルカが少し考えて、自分のパーカーを手渡してくれた。' },
        {
          text: '「これ着て行けば？ 少しはマシになるかも」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: '「いいのか？」' },
        {
          text: '「うん。夜、返してくれればいいから」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: '「...ありがとう」' },
        { text: 'パーカーを羽織り、フードを被る。' },
        { text: '少しはごまかせるだろう。' },
        { text: '玄関で、ルカが見送ってくれた。' },
        {
          text: '「気をつけてね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: '「ああ。夜、待ってるから」' },
        { text: 'ルカが手を振る。' },
        {
          text: '俺もそれに応えて、ルカの家を後にした。',
          action: async () => {
            deleteCharacterTatie();
          }
        },
        {
          text: '家までの道のりは、思ったより長く感じた。',
          action: async () => {
            changeBackgroundImage('opening', 'city_daytime.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: 'この格好で歩くのは、やはり落ち着かない。' },
        { text: '途中、何人かとすれ違ったが、幸い誰も気に留める様子はなかった。' },
        // 5.mdへ
        { text: '家の前まで来ると、玄関のドアが開いた。' },
        {
          text: '「お兄ちゃん！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: 'ひなが飛び出してくる。' },
        {
          text: '「遅い！ 昨日帰ってこないし、今朝も電話に出ないし...」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        { text: 'そこでひなの言葉が止まる。' },
        { text: '俺の姿を見て、目を丸くした。' },
        {
          text: '「...誰？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '「あー...その、俺だよ」' },
        {
          text: '「え？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', false);
          }
        },
        { text: 'ひなが首を傾げる。' },
        { text: '「俺。お兄ちゃん」' },
        {
          text: '「...は？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '数秒の沈黙。' },
        { text: 'そして――' },
        {
          text: '「...ええええ！？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', true);
          }
        },
        { text: 'ひなの悲鳴が響き渡った。' },
        {
          text: 'リビングのソファに並んで座る。',
          action: async () => {
            changeBackgroundImage('opening', 'living_daytime.jpg');
            deleteCharacterTatie();
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: 'ひなは何度も俺の顔を凝視しては、信じられないという顔をしている。' },
        {
          text: '「つまり...お兄ちゃんが、女の子に...？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: '「ああ」' },
        { text: 'しばらく沈黙が続いた後、ひなが深くため息をついた。' },
        {
          text: '「...はぁ。お兄ちゃんらしいっていうか、なんていうか」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', false);
          }
        },
        { text: '「悪かったよ」' },
        {
          text: '「謝られても困るんだけど...」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        { text: 'ひなが俺の周りをぐるりと一周する。' },
        {
          text: '「...本当に女の子になってる」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '「見ての通り」' },
        {
          text: '「その格好、ルカさんの？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: '「ああ。借りてきた」' },
        {
          text: '「ふーん...」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', false);
          }
        },
        { text: 'ひなが何か言いたげな表情をするが、それ以上は何も言わなかった。' },
        { text: 'ひながじっと俺を見つめる。' },
        { text: 'その視線が、何だか居心地悪い。' },
        { text: '「...何だよ」' },
        {
          text: '「いや...可愛いなって」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: '「言うな」' },
        {
          text: '「だって本当のことじゃん」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: 'ひながクスッと笑う。' },
        { text: 'その笑顔を見て、少しだけ安心した。' },
        {
          text: '「で、いつ戻れるの？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: '「今夜。満月の光を浴びて儀式をすれば、元に戻れるはず」' },
        {
          text: '「...はず？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '「多分、大丈夫だと思う」' },
        {
          text: '「心配だなあ...」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', false);
          }
        },
        { text: 'ひなが不安そうに眉を寄せる。' },
        { text: '「大丈夫だって。ルカがちゃんと調べてくれたから」' },
        {
          text: '「...そっか」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', true);
          }
        },
        { text: 'ひなが小さく頷いた。' },
        {
          text: '「それまで、どうするの？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '「んー...特に予定もないし」' },
        {
          text: '「じゃあ...」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: 'ひなが少し考えてから、顔を上げた。' },
        {
          text: '「一緒にゲームでもする？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: '「え？」' },
        {
          text: '「だって、暇なんでしょ？ それに...」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: 'ひなが少し照れくさそうに視線を逸らす。' },
        {
          text: '「...せっかく帰ってきたんだし」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'blush', false);
          }
        },
        { text: 'その言葉に、思わず笑ってしまった。' },
        { text: '「わかった。付き合ってやるよ」' },
        {
          text: '「やった！ じゃあ、準備してくるね！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        {
          text: 'ひなが嬉しそうに立ち上がり、自分の部屋へ駆けていった。',
          action: async () => {
            deleteCharacterTatie();
          }
        },
        { text: '残された俺は、ソファに体を預けた。' },
        { text: '妹に受け入れてもらえて、少しほっとした。' },
        { text: '今夜までの時間を、ひなと過ごすのも悪くない。' },
        { text: 'そう思いながら、俺はひなが戻ってくるのを待った。' },
        // 6.mdへ
        {
          text: '数分後、ひながリビングに戻ってきた。',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        {
          text: '手には二つのゲームコントローラーを持っている。',
          choiceId: 'h01',
        },
      ],
    },
  ],
  h01: [
    {
      buttonText: '何やるんだ？',
      branch: [
        {
          text: '「お兄ちゃんが好きなやつでいいよ」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: 'ひながテレビの前に座り込み、ゲーム機の電源を入れる。' },
        { text: '「じゃあ、あの対戦ゲームとか？」' },
        {
          text: '「いいよ。...容赦しないからね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: '「その台詞、いつも負けてるお前が言うか？」' },
        {
          text: '「う、うるさい！ 今日は違うもん！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', true);
          }
        },
        { text: 'ひなが頬を膨らませる。' },
        { text: 'その仕草は、小さい頃から変わらない。' },
        { text: 'ゲームが始まり、二人でコントローラーを握る。' },
        { text: 'いつもと同じはずの光景なのに、何だか少しだけ違和感がある。' },
        {
          text: '「...お兄ちゃん、その姿だとなんか変な感じ」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: 'ひながちらりと俺を見る。' },
        { text: '「そうか？」' },
        {
          text: '「うん。...でも仕草は、やっぱりお兄ちゃんだね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', false);
          }
        },
        { text: '「当たり前だろ」' },
        { text: '試合が始まる。' },
        { text: '最初は互角だったが、徐々にひなが押し始めた。' },
        {
          text: '「あれ？ お兄ちゃん、弱くなった？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: '「...体が小さくなったせいで、コントローラーの感覚が違うんだよ」' },
        {
          text: '「言い訳ー」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', true);
          }
        },
        { text: 'ひながニヤリと笑う。' },
        { text: 'そして、最後の一撃。' },
        {
          text: '「勝った！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: 'ひなが両手を上げて喜ぶ。' },
        { text: '「くっ...もう一回」' },
        {
          text: '「いいよ。何回でも相手してあげる」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: 'その後、何度か対戦を繰り返した。' },
        { text: '何度もやると次第に間隔を取り戻していき、俺がひなを圧倒していく。' },
        {
          text: '「あー！ ずるい！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', true);
          }
        },
        { text: '「ずるくない。お前が下手なだけ」' },
        {
          text: '「むー...！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', false);
          }
        },
        { text: 'ひなが真剣な顔でコントローラーを握りしめる。' },
        { text: 'その表情が可笑しくて、少し笑ってしまった。' },
        {
          text: '「笑わないでよ！ ...あ、また負けた！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', true);
          }
        },
        { text: '「もう一回やるか？」' },
        {
          text: '「当たり前でしょ！ 今度は勝つんだから！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'confused', true);
          }
        },
        { text: '何度も何度も対戦を繰り返す。' },
        {
          text: '「...はぁ」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: 'ひながため息をついてコントローラーを置いた。' },
        { text: '「疲れたか？」' },
        {
          text: '「ちょっとね...」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: 'ひながソファに体を預ける。' },
        {
          text: '「...お腹空いたね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: 'ふいに、ひながそう言った。' },
        { text: '時計を見ると、もう昼過ぎになっている。' },
        { text: '「昼飯、作るか？」' },
        {
          text: '「...お兄ちゃん、その姿で料理できるの？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', true);
          }
        },
        { text: '「体が変わっても、腕は同じだろ」' },
        {
          text: '「そうだけど...」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: 'ひなが少し心配そうに俺を見る。' },
        { text: '「大丈夫だって。一緒に作ろうぜ」' },
        {
          text: '「...うん」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: '二人でキッチンに立つ。' },
        { text: '「何作る？」' },
        {
          text: '「んー...パスタとかどう？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', false);
          }
        },
        { text: '「いいな。じゃあ、ひなは野菜切ってくれ」' },
        {
          text: '「はーい」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', true);
          }
        },
        { text: 'ひなが冷蔵庫から野菜を取り出す。' },
        { text: '俺はパスタを茹でる準備を始めた。' },
        {
          text: '「...ねえ、お兄ちゃん」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '「ん？」' },
        {
          text: '「その姿だと、なんか...妹みたい」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: '包丁を動かしながら、ひながそう言った。' },
        { text: '「は？」' },
        {
          text: '「だって、見た目私より小さいし...可愛いし」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: '「可愛いって言うな」' },
        {
          text: '「事実じゃん」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: 'ひながクスクスと笑う。' },
        { text: 'その笑顔を見て、少しだけ緊張が解けた気がした。' },
        { text: '「...まあ、今日だけだけどな」' },
        {
          text: '「そうだね。...今日だけ」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: 'ひなが小さく繰り返す。' },
        { text: '料理を作りながら、他愛もない会話を続ける。' },
        { text: 'いつもより、ひなは饒舌だった。' },
        {
          text: '「はい、完成！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: 'ひなが皿にパスタを盛り付ける。' },
        { text: '「お、美味そうだな」' },
        {
          text: '「当たり前でしょ。私が作ったんだから」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '「俺も作ったし...」' },
        {
          text: '「細かいことは気にしないの！」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', false);
          }
        },
        { text: '二人でテーブルに向かい合って座る。' },
        {
          text: '「「いただきます」」',
          speaker: '二人',
        },
        { text: '食事をしながら、ふとひなが口を開いた。' },
        {
          text: '「...ねえ、お兄ちゃん」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '「ん？」' },
        {
          text: '「女の子になって...何か変わった？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: '「変わったって？」' },
        {
          text: '「その...気持ちとか、感じ方とか」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        {
          text: '真剣な目で、ひなが俺を見つめる。',
          choiceId: 'h02',
        },
        { text: '食事を終え、二人で後片付けをする。' },
        {
          text: '「「ごちそうさま」」',
          speaker: '二人',
        },
        { text: 'ひながふざけて大げさにお辞儀をする。' },
        {
          text: '「...ねえ、お兄ちゃん」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: '「ん？」' },
        {
          text: '「今日、一日一緒にいてくれてありがと」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'blush', false);
          }
        },
        { text: '「別に、他に予定もないし」' },
        {
          text: '「...ふん。素直じゃないんだから」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'jitome', true);
          }
        },
        { text: 'ひなが少しだけ嬉しそうに笑う。' },
        { text: '窓の外を見ると、空が少しずつ暗くなり始めていた。' },
        { text: '「...もうすぐ夜だな」' },
        {
          text: '「うん」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', false);
          }
        },
        { text: 'ひなの声が、少しだけ寂しそうに聞こえた。' },
        { text: '「大丈夫。すぐに元に戻れるから」' },
        {
          text: '「...うん。そうだよね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: 'ひなが小さく頷く。' },
        { text: 'その時、玄関のチャイムが鳴った。' },
        {
          text: '「あ、ルカさんだ」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: 'ひなが立ち上がり、玄関へと向かう。' },
        {
          text: '「こんばんは、ひなちゃん」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', true);
          }
        },
        {
          text: '「こんばんは。お兄ちゃん、ルカさん来たよ」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', true);
          }
        },
        { text: 'ルカが大きなバッグを持って入ってきた。' },
        {
          text: '「準備、始めるね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: 'ルカがバッグから儀式の道具を取り出し始める。' },
        { text: '俺とひなは、その様子をじっと見守っていた。' },
        // 9-hina.mdへ
      ],
    },
  ],
  h02: [
    {
      buttonText: '体は変わっても、中身は同じだよ',
      branch: [
        {
          text: '「...そっか」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', true);
          }
        },
        { text: 'ひながほっとしたように笑った。' },
        {
          text: '「良かった。お兄ちゃんは、お兄ちゃんのままなんだね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', false);
          }
        },
        { text: '「当たり前だろ」' },
        {
          text: '「うん...そうだよね」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: 'ひなが安心したように、パスタを食べ始めた。' },
      ],
    },
    {
      buttonText: '...ちょっとだけ、世界が違って見える',
      branch: [
        {
          text: '「え？」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_close', true);
          }
        },
        { text: '「なんていうか...視線の高さとか、体の感覚とか。いつもと違うんだ」' },
        {
          text: '「...そっか」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal', false);
          }
        },
        { text: 'ひなが少し考え込むような表情をする。' },
        { text: '「でも、中身は変わってないから」' },
        {
          text: '「うん。分かってる」',
          speaker: 'ひな',
          action: async () => {
            changeCharacterImage('hina', 'nomal_open', false);
          }
        },
        { text: 'ひなが小さく笑った。' },
      ],
    }
  ],
  i01: [
    {
      buttonText: '嬉しくない感想をありがとう',
      branch: [
        { text: 'ため息をつく俺を見て、ルカはくすくすと笑った。' },
      ],
    },
    {
      buttonText: '...やめてくれ、恥ずかしい',
      branch: [
        {
          text: '「あ、照れてる？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'doya', true);
          }
        },
        { text: '「照れてない！」' },
      ],
    }
  ],
  i02: [
    {
      buttonText: '悪くはなかった、かな',
      branch: [],
    }
  ],
  i03: [
    {
      buttonText: 'ルカの家',
      branch: [
        {
          text: '「分かった。じゃあ、一緒に行こ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: 'ルカが立ち上がる。' },
        { text: '俺も席を立ち、二人で店を出た。' },
        // 9-ruka.mdへ
      ],
    },
    {
      buttonText: 'うちでやろう',
      branch: [
        { text: '「ひなにも見届けてもらいたい」' },
        {
          text: '「...うん。そうだね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: 'ルカが優しく微笑む。' },
        {
          text: '「じゃあ、準備して向かうね」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: '「ああ。待ってる」' },
        // 9-hina.mdへ
      ],
    }
  ],
  j01: [
    {
      buttonText: '任せる',
      branch: [
        { text: '「ルカに任せるよ」' },
        {
          text: '「じゃあ...商店街、行こっか！ 美味しいクレープ屋さんがあるの」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', true);
          }
        },
        { text: '「クレープか...」' },
        {
          text: '「ダメ？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: '「いや、別に」' },
        { text: '二人で並んで歩く。' },
        { text: 'スカートの裾が風に揺れる感覚が妙に新鮮で、思わず裾を押さえてしまう。' },
        {
          text: '「大丈夫？ 慣れない？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', true);
          }
        },
        { text: '「ああ...慣れないけど、何とか」' },
        {
          text: '「ふふ、可愛いよ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'doya', false);
          }
        },
        { text: '「だから、可愛いって言うな...」' },
        { text: 'またからかわれた。' },
        { text: 'でも、ルカの笑顔は悪意がなくて...むしろ、楽しそうだ。' },
        {
          text: '商店街に着くと、ルカが目当てのクレープ屋に案内してくれた。',
          action: async () => {
            changeBackgroundImage('opening', 'kissaten_daytime.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        {
          text: '「何にする？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', true);
          }
        },
        { text: '「えっと...」' },
        { text: 'メニューを見ても、どれがいいのか分からない。' },
        {
          text: '「迷ってるなら、これオススメだよ。イチゴとチョコの」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: '「じゃあ、それで」' },
        { text: '注文を済ませ、二人でベンチに座る。' },
        { text: 'クレープを受け取って、一口食べる。' },
        { text: '「...美味い」' },
        {
          text: '「でしょ？ ここ、私の行きつけなの」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', true);
          }
        },
        { text: 'ルカも嬉しそうにクレープを頬張る。' },
        { text: '少しクリームが口の端についていて、思わず吹き出しそうになった。' },
        {
          text: '「どうしたの？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: '「いや...口、ついてるぞ」' },
        {
          text: '「え？ ...あ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'blush', false);
          }
        },
        { text: 'ルカは慌ててハンカチで拭う。' },
        { text: 'その仕草がどこか可愛らしくて、俺は視線を逸らした。' },
        { text: 'その後も、ルカに連れられて本屋やゲームセンターを回った。' },
      ],
    },
    {
      buttonText: '本屋',
      branch: [
        { text: '「本屋とか...どうかな」' },
        {
          text: '「あ、いいね！ 駅前に大きい書店があるんだ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: 'ルカが嬉しそうに頷く。' },
        { text: '二人で並んで歩く。' },
        { text: 'スカートの裾が風に揺れる感覚が妙に新鮮で、思わず裾を押さえてしまう。' },
        {
          text: '「大丈夫？ 慣れない？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: '「ああ...慣れないけど、何とか」' },
        {
          text: '「ふふ、可愛い」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'doya', false);
          }
        },
        { text: '「だから、可愛いって言うな...」' },
        {
          text: '本屋に着くと、ルカは真っ先にオカルトコーナーに向かった。',
          action: async () => {
            changeBackgroundImage('opening', 'bookstore.jpg');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: '「やっぱりそこか...」' },
        {
          text: '「当たり前でしょ？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', true);
          }
        },
        { text: 'ルカは楽しそうに本を手に取り始める。' },
        {
          text: '「ほら、これ見て！ 『満月の魔術と儀式』だって！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', false);
          }
        },
        { text: '「...今さらだけど、参考になるのか？」' },
        {
          text: '「なるかもよ？ 今夜の儀式のヒントがあるかもしれないし」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: '真剣な顔で本をめくるルカを見て、俺は小さく笑った。' },
        {
          text: '「何？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: '「いや...ルカらしいなって」' },
        {
          text: '「...それ、褒めてる？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'pout', false);
          }
        },
        { text: '「まあ、そんなとこ」' },
        {
          text: 'ルカは少し照れたように笑って、また本に視線を戻した。',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'しばらくして、俺も適当に本を手に取る。' },
        { text: '小説のコーナーで何冊か見ていると、ルカが近づいてきた。' },
        {
          text: '「何読んでるの？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: '「いや、特に...」' },
        {
          text: '「ふーん。意外と小説とか読むんだ」',
          speaker: 'ルカ',
          choiceId: 'j02',
          action: async () => {
            changeCharacterImage('ruka', 'base_close', false);
          }
        },
        { text: 'そんな他愛ない会話をしながら、二人で本屋を回った。' },
        { text: 'その後も、ルカに連れられてクレープ屋やゲームセンターを回った。' },
      ],
    },
    {
      buttonText: 'ゲームセンター',
      branch: [
        { text: '「ゲームセンターとか、どう？」' },
        {
          text: '「ゲーセン？ いいね、行こっか！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', false);
          }
        },
        { text: 'ルカが元気よく歩き出す。' },
        {
          text: '二人で店内に入ると、電子音と喧騒が耳に飛び込んできた。',
          action: async () => {
            changeBackgroundImage('opening', 'gamecenter.png');
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        },
        { text: '「うわ、結構混んでるな...」' },
        {
          text: '「休日だもんね。あ、見て見て！ あれ可愛くない？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', true);
          }
        },
        { text: 'ルカが指差したのは、クレーンゲーム機の中に積まれた、丸々とした猫のぬいぐるみだった。' },
        { text: 'ルカのパジャマにも猫の刺繍があったし、猫が好きなのだろう。' },
        { text: '「取ってみようか？」' },
        {
          text: '「えっ、いいの？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'a', false);
          }
        },
        { text: '「任せとけって」' },
        { text: '俺は袖をまくり、コインを投入した。' },
        { text: '狙いを定めて、ボタンを押す。' },
        { text: 'アームが下りていき、ぬいぐるみを掴む――が、持ち上がった瞬間にぽろりと落ちてしまった。' },
        {
          text: '「あーっ！ 惜しい！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'surprised', false);
          }
        },
        { text: '「くそっ、もう一回だ！」' },
        { text: '俺はムキになってコインを追加投入する。' },
        { text: 'しかし、二回、三回とやっても、ぬいぐるみは出口の手前で転がるばかり。' },
        { text: '「...あれ？ おかしいな」' },
        {
          text: '「ぷっ...」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'doya', false);
          }
        },
        { text: '隣でルカが吹き出す気配がした。' },
        { text: '「わ、笑うなよ！ 次こそは...」' },
        {
          text: '「はいはい、交代。ちょっとどいてみて？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', true);
          }
        },
        { text: '「え？」' },
        { text: 'ルカが俺の体を押しのけ、操作盤の前に立つ。' },
        {
          text: '「よく見ててね？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: 'ルカは慣れた手つきでレバーを操作し、迷いなくボタンを押した。' },
        { text: 'ウィーン、とアームが動き、絶妙な角度でぬいぐるみのタグと足の隙間に爪を引っ掛ける。' },
        { text: '「え、まさか...」' },
        { text: 'ぬいぐるみはそのまま持ち上がり、出口へと運ばれていく。' },
        { text: 'ゴトン！' },
        {
          text: '「はい、取れた！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'perori', false);
          }
        },
        { text: 'ルカが取り出し口からぬいぐるみを引っ張り出し、ドヤ顔で掲げた。' },
        { text: '「うそだろ...」' },
        {
          text: '「クレーンゲームは得意なのです！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'perori', true);
          }
        },
        { text: 'ルカは悪戯っぽく舌を出して笑うと、そのぬいぐるみを俺に差し出した。' },
        {
          text: '「ほら」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base', false);
          }
        },
        { text: '「え...くれるのか？」' },
        {
          text: '「うん。頑張ってくれたお礼」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'happy', false);
          }
        },
        { text: '「俺、何もしてないけど...」' },
        {
          text: '「気持ちが嬉しかったから、いいの！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'blush', true);
          }
        },
        { text: 'ルカは強引に俺の胸にぬいぐるみを押し付ける。' },
        {
          text: '「大事にしてね？」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', false);
          }
        },
        { text: '「...ああ、ありがとう」' },
        { text: '俺は複雑な気持ちで、ルカが取ってくれたぬいぐるみを抱きしめた。' },
        {
          text: '「ふふ、似合うよ」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'doya', false);
          }
        },
        { text: '「うるさい...」' },
        { text: 'ルカの余裕には、どうやっても勝てそうになかった。' },
        {
          text: '「次はこのゲームやろ！」',
          speaker: 'ルカ',
          action: async () => {
            changeCharacterImage('ruka', 'base_open', true);
          }
        },
        { text: '「お、おう...」' },
        { text: 'その後も、ルカに連れられてクレープ屋や本屋を回った。' },
      ],
    }
  ],
  j02: [
    {
      buttonText: 'まあ、たまに',
      branch: [],
    },
    {
      buttonText: '意外とってなんだよ...',
      branch: [],
    }
  ],
  j03: [
    {
      buttonText: '大丈夫',
      branch: [],
    }
  ],
};