let navToggleStatus = false;

let menuBtn = document.getElementById('menu');
let getSideBar = document.getElementsByClassName('.nav-sidebar');
let getSidebarUL =document.querySelector ('.nav-sidebar ul')
let getSidebarLinks=document.querySelectorAll ('.nav-sidebar ul li');

console.log(menuBtn);
console.log(getSideBar);

menuBtn.addEventListener ('click', function(){
  console.log('menu is clicked');

  if (navToggleStatus === false) {
    getSidebarUL.style.visibility = 'visible';
    //getSidebarLinks.style.width ='300px';
  
  let arrayLenght = getSidebarLinks.length;
  for (let i=0; i < arrayLenght; i++) {
    getSidebarLinks[i].style.opacity = "0.5";
  }

  navToggleStatus = true;
}
  
  else if (navToggleStatus === true) {
      //getSidebarLinks.style.width ='0px';
  
  let arrayLenght = getSidebarLinks.length;
  for (let i=0; i < arrayLenght; i++) {
    getSidebarLinks[i].style.opacity = "0";
  }
    getSidebarUL.style.visibility = "hidden";
    navToggleStatus = false;
  }
  
})

const redbg = document.getElementById('red');{
  redbg.addEventListener("click", function(){
  document.body.style.backgroundColor = 'red';
  console.log('Red is clicked');
})


const orangebg = document.getElementById('orange');
orangebg.addEventListener('click', function() {
  
    orangebg.classList.add('orange-bg');
    console.log('Orange is clicked');
})}