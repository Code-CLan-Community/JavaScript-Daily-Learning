var main = document.querySelector('.main');
var cursor = document.querySelector('.cursor');

main.addEventListener('mousemove', (dets)=>{
    cursor.style.top = dets.y+5 + "px";
    cursor.style.left = dets.x+5 + "px";
})
