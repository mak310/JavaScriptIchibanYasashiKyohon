let name = prompt('名前を入力してください');
greet(name);

function greet(name) {
    let message = 'こんにちは';
    alert(message + name);
    return;
}