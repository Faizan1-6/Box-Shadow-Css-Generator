let hor = document.getElementById('hor');
let ver = document.getElementById('ver');
let blur = document.getElementById('blur');
let spread = document.getElementById('spread');
let color = document.getElementById('color');
let opacity = document.getElementById('opacity');
let main = document.getElementById('main');

function applyShadow() {
    main.style.boxShadow = `${hor.value}px ${ver.value}px ${blur.value}px ${spread.value}px rgba(0,0,0,${opacity.value/100})`;
}

// har input par alag event listener
hor.addEventListener("input", applyShadow);
ver.addEventListener("input", applyShadow);
blur.addEventListener("input", applyShadow);
spread.addEventListener("input", applyShadow);
color.addEventListener("input", applyShadow);
opacity.addEventListener("input", applyShadow);
