let budget = prompt('所持金を数字で入力してください');
budget = parseFloat(budget);

let isHungry = confirm('おなかは空いていますか？');

if (budget >= 1500 && isHungry) {
    alert('ピザを注文しました');
} else if (budget >= 500 ){
    alert ('ポテトを注文しました');
} else {
    alert('節約、節約...')
}
