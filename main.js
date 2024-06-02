
const hamburger = document.getElementById('hamburger');
const close = document.getElementById('close');

const nav = document.getElementById('nav');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('hidden');
    close.classList.toggle('hidden');
    nav.style.display = 'block';
});

close.addEventListener('click', ()=>{
    hamburger.classList.toggle('hidden');
    close.classList.toggle('hidden');
    nav.style.display = 'none';
});

const light =document.querySelectorAll('light');
const dark =document.querySelectorAll('dark');