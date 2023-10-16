document.getElementById("desativarBomba").addEventListener("click", function() {
    document.body.classList.add("ativar-escurecimento");
    setTimeout(function() {
        window.location.href = "\u0068\u0074\u006D\u006C\u002F\u006C\u006F\u0067\u0069\u006E\u002E\u0068\u0074\u006D\u006C";
    }, 5000);
});

document.addEventListener('contextmenu', e => {
    e.preventDefault();
  })
