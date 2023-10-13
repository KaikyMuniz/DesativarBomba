const btnConfirm = document.getElementById('confirm');
btnConfirm.addEventListener('click', function(){
    if(document.getElementById('senha').value === "\u0034\u0031\u0033\u0032"){
        window.location.href = "sucess.html";
    }else{
        window.alert("Senha incorreta");
    }
})