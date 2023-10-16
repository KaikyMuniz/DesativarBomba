const btnConfirm = document.getElementById('confirm');
btnConfirm.addEventListener('click', function(){
    const senha = document.getElementById('senha').value;
    const senhaFormatada = senha.toLowerCase();
    if(senhaFormatada.trim() === "\u006E\u0075\u006D\u0065\u0072\u006F\u0073\u0073\u0061\u006F\u0065\u0078\u0061\u0074\u006F\u0073"){
        window.location.href = "\u0073\u0075\u0063\u0065\u0073\u0073\u002E\u0068\u0074\u006D\u006C";
    }else{
        window.alert("Senha incorreta");
    }
})

document.addEventListener('contextmenu', e => {
    e.preventDefault();
})
