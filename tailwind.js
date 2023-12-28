
// # CODE START: to control mobile menu's visibility
let mobileButton = document.getElementById("menu_btn");
let navMenu = document.getElementById("nav_menu"); 
let hamburger = document.getElementById("hamburger"); 


mobileButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden')
})

window.addEventListener('resize', () =>{
   navMenu.classList.add('hidden')
})

mobileButton.addEventListener('mouseover', () => {
    hamburger.style.fill='yellow'
})
mobileButton.addEventListener('mouseout', () => {
    hamburger.style.fill='white'
})
// # CODE END: to control mobile menu's visibility

