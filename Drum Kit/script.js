window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio.keyCode);
  audio.play();
  audio.currentTime = 0;
  if (!audio) return;
  key.classList.add('playing');
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', (e)=>{
    if(e.propertyName !== 'transition') return;
    this.classList.remove('playing');
}));

// window.addEventListener("keyup", (e) => {
    
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   
//     // key.classList.remove('playing');
//   //   console.log(k);
//   });
  

//   console.log(k);
// setTimeout(()=>{
    
// }, 0.07)