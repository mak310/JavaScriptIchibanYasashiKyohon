function janken() {
  /* 定数定義 ************************/
  const GU = 1;
  const CHOKI = 2;
  const PA = 3;

  /* 関数定義 ************************/
  function getHumHand() {
    let hum = prompt(
      '半角数字で1~3の数字を入力してください。\n\n' +
      GU + ':グー\n' +
      CHOKI + ':チョキ\n' +
      PA + ':パー'
    );

    hum = parseInt(hum, 10);

    if (hum !== GU && hum !== CHOKI && hum !== PA) {
      return undefined;
    }

    return hum;
  }

  function getComHand() {
    return Math.floor(Math.random() * 3) + 1;
  }

  function getHandName(num) {
    switch (num) {
      case GU:
        return 'グー';
      case CHOKI:
        return 'チョキ';
      case PA:
        return 'パー';
    }
  }

  function getResult(com, hum) {
    if (hum === com) {
      return '結果はあいこでした。';
    } else if (
      (com === GU && hum === PA) ||
      (com === CHOKI && hum === GU) ||
      (com === PA && hum === CHOKI)
    ) {
      return '勝ちました。';
    } else {
      return '負けました。';
    }
  }

  function getResultMsg(com, hum) {
    return getResult(com, hum) +
      ' コンピュータの出した手は「' +
      getHandName(com) +
      '」でした';
  }

  /* 実行する処理 ************************/
  let hum = getHumHand();

  if (hum === undefined) {
    alert('入力値をうまく認識できませんでした。ブラウザを再読込すると、もう一度挑戦できます。');
    return undefined;
  }

  let com = getComHand();

  alert(getResultMsg(com, hum));

  return getResult(com, hum);
}

/* 連勝カウント ************************/
let win = 0;
let isLose = false;

while (!isLose) {
  let result = janken();

  if (result === '結果はあいこでした。') {
    continue;
  }

  if (result === '勝ちました。') {
    win++;
    alert('ただいま[' + win + ']勝でした。');
    continue;
  }

  alert('連勝はストップです。記録は[' + win + ']勝でした。');
  isLose = true;
}