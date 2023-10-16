const text = "Seja bem vindo(a) ao projeto name"; 
const element = document.getElementById("typing-effect");

element.textContent = "";

function typeWriter(text, i) {
    if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(function() {
        typeWriter(text, i);
        }, 100);
    }
}

typeWriter(text, 0);

const btnSubmit = document.getElementById('submit');

btnSubmit.addEventListener('click', function() {
    const username = document.getElementById('user').value;
    const username_correct = username.toUpperCase();
    if (username_correct.trim() === "\x45\x55\x52\x45\x4b\x41") {
        window.location.href = "enigma.html";
    } else {
        window.alert('ERROR');
    }
});

document.addEventListener('contextmenu', e => {
    e.preventDefault();
})
