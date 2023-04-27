const page = document;
const div = document.querySelector('.follow');
div.classList.remove('follow');
// mousemove tracks mouse movement at all times
// mouseover tranks mouse position only when it enters over an element

page.addEventListener('mousemove',function(e){
    div.classList.add('follow');
    div.style.left = `${e.clientX-125}px`;
    div.style.top = `${e.clientY-150}px`;

    
})

