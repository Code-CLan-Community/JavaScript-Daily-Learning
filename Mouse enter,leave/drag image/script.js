const boxes =  document.querySelectorAll('.box');
const image = document.querySelector('.image');

boxes.forEach(box => {
    box.addEventListener('dragover', (event)=>{
        event.preventDefault(); // stops to referesh whole page
        box.style.border = "2px dashed #000";
    })
    box.addEventListener('drop', (event)=>{
        event.preventDefault();
        box.appendChild(image);// add child to the parent
    })
});



