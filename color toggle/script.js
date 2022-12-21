const navToggleStatus = false;

const menuBtn = document.getElementById('menu');
const getSideBar = document.getElementsByClassName('.nav-sidebar');
const getSidebarUL =document.querySelector ('.nav-sidebar ul')
const getSidebarLinks=document.querySelectorAll ('.nav-sidebar li)');

console.log(menuBtn);
console.log(getSideBar);

menuBtn.addEventListener ('click', function(){
  console.log('menu is clicked');
  if (navToggleStatus === false) {
    getSidebarUL.style.visibility = 'visible';
  }
})