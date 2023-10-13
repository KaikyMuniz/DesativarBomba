document.getElementById("desativarBomba").addEventListener("click", function() {
    document.body.classList.add("ativar-escurecimento");
    setTimeout(function() {
        window.location.href = "html/login.html";
    }, 5000);
});

document.addEventListener('contextmenu', e => {
    e.preventDefault();
  })  
