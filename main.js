'use strict'

{
    const touch = document.getElementById('touch');
    const frame = document.getElementById('frame');
    const inframe = document.getElementById('inframe');

    touch.addEventListener('click',()=>{
        touch.classList.add('animate__flipOutX');
        frame.classList.add('animate__flipOutX');
        inframe.classList.add('active')
    });
}
