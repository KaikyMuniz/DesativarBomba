const btnConfirm = document.getElementById('confirm');
btnConfirm.addEventListener('click', function(){
    const senha = document.getElementById('senha').value;
    const senhaFormatada = senha.toLowerCase();
    if(senhaFormatada.trim() === "\u006E\u0075\u006D\u0065\u0072\u006F\u0073\u0073\u0061\u006F\u0065\u0078\u0061\u0074\u006F\u0073"){
        window.location.href = "sucess.html";
    }else{
        window.alert("Senha incorreta");
    }
})
