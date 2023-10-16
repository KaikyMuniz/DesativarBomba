const btnConfirm = document.getElementById('confirm');
btnConfirm.addEventListener('click', function(){
    const planet1 = document.getElementById('planeta1').value;
    const resolution1 = planet1.toUpperCase();

    const planet2 = document.getElementById('planeta2').value;
    const resolution2 = planet2.toUpperCase();

    const planet3 = document.getElementById('planeta3').value;
    const resolution3 = planet3.toUpperCase();

    const planet4 = document.getElementById('planeta4').value;
    const resolution4 = planet4.toUpperCase();

    if(resolution1.trim() === "\u0056\u00CA\u004E\u0055\u0053" ||
    resolution1.trim() === "\u0056\u0045\u004E\u0055\u0053" &&
    resolution2.trim() === "\u004d\u0041\u0052\u0054\u0045" && 
    resolution3.trim() === "\u004A\u0055\u0050\u0049\u0054\u0045\u0052" || 
    resolution3.trim() === "\u004A\u00DA\u0050\u0049\u0054\u0045\u0052" &&
    resolution4.trim() === "\u0053\u0041\u0054\u0055\u0052\u004e\u004f"){
        window.location.href = "\u0073\u0065\u006E\u0068\u0061\u002E\u0068\u0074\u006D\u006C";
    }else{
        window.alert("RESPOSTA INCORRETA!!!");
    }
})

document.addEventListener('contextmenu', e => {
    e.preventDefault();
})
