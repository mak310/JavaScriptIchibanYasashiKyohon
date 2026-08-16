function janken () {
/* 変数定義 ********************/
// ジャンケンの手の番号を設定
const GU    = 1;
const CHOKI = 2;
const PA    = 3;

/* 関数定義 **********************/
// 人間に手を入力してもらう機能
function getHumHand() {
    let hum = prompt('半角数字で1～3の数字を入力してください。\n\n' + GU + ':グー\n' + CHOKI + ':チョキ\n' + PA + ':パー');
hum = parseInt(hum, 10);
if (hum !== GU && hum !== CHOKI && hum !== PA) {
    return undefined;
} else {
    return hum;
}
}

//コンピュータの手を決める
function getComHand() {
    return Math.floor(Math.random() * 3) + 1;
}

// コンピュータの手の名前
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

// 結果の判定
function getResult (com, hum) {
    if (hum === com) {
        return '結果はあいこでした。';
    } else if ((com === GU && hum === PA) || (com === CHOKI && hum === GU) || (com === PA && hum === CHOKI)) {
        return '勝ちました。';
    } else {
        return '負けました。';
    }
}

// 最終的な結果の表示
function getResultMsg(com, hum) {
    return getResult(com, hum) + '。コンピュータの出した手は[' + getHandName(com) + ']でした。';
}

/* 実行する処理 ********************/
let hum = getHumHand();
if (!hum) {
    alert('入力値をうまく認識できませんでした。ブラウザを再読み込みすると、もう一度挑戦できます。');
} else {
    let com = getComHand();
    alert(getResultMsg(com, hum));
}
}

janken();