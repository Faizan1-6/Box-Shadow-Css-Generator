let hor = document.getElementById('hor');
let ver = document.getElementById('ver');
let blur = document.getElementById('blur');
let spread = document.getElementById('spread');
let color = document.getElementById('color');
let main = document.getElementById('main');

function applyShadow() {
    main.style.boxShadow = `${hor.value}px ${ver.value}px ${blur.value}px ${spread.value}px ${color.value}`;
}

hor.addEventListener("input", applyShadow);
ver.addEventListener("input", applyShadow);
blur.addEventListener("input", applyShadow);
spread.addEventListener("input", applyShadow);
color.addEventListener("input", applyShadow);
