const darkMode = document.querySelector('.dark-on')
const darkActive = 'dark-active'

darkMode.addEventListener('click', ()=>{
    document.body.classList.toggle(darkActive)
})