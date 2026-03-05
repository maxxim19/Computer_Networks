const tabButtons = document.querySelectorAll('.tab-button')
const tabPanels = document.querySelectorAll('.tab-panel')

tabButtons.forEach(button => {

button.addEventListener('click', () => {

tabButtons.forEach(btn => btn.classList.remove('active'))
button.classList.add('active')

tabPanels.forEach(panel => panel.classList.remove('active'))

const target = button.getAttribute('data-tab')
document.getElementById(target).classList.add('active')

})

})
