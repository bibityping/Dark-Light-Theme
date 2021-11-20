const toggle = document.getElementById('toggle')
const body = document.body

toggle.addEventListener('change', toggleTheme)

function toggleTheme() {
    if(this.checked) {
        body.classList.add('dark')
    } else {
         body.classList.remove('dark')
    }
    
}