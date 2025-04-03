const password = "lose5kgs"; 

function checkPassword() {
    let userInput = prompt("パスワードを入力してください。");
    if (userInput !== password) {
        alert("パスワードが違います。");
        window.location.href = "https://datachai-rei.github.io/gohan_dousuru/gohan_dousuru_error.html"; 
    }
}

checkPassword();
