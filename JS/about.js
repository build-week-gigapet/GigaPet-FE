const letters = document.querySelectorAll('.intro h1 span');

letters.forEach(letter=>letter.addEventListener('mouseover', ()=>{
  letter.classList.add('bounceDown');
  letter.addEventListener('animationend',()=>{
    letter.classList.remove('bounceDown');
  });
}));