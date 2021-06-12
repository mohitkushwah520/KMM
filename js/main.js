let cursor = document.querySelector('.mouse')
window.addEventListener('mousemove',(e)=>{
    let x = e.clientX
    let y = e.clientY
    cursor.style.left = `${x}px`
    cursor.style.top = `${y}px`
})