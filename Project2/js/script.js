const burger = document.querySelector('.menu-btn');
const navlist = document.querySelector('.navbar .navlist');

burger.addEventListener("click", () =>{
    navlist.classList.toggle("show");
});
