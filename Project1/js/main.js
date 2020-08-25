const navbar = document.querySelector("nav");
const burger = document.querySelector(".burger");
const navlist = document.querySelector('.navlist').children;
const logo = document.querySelector('.openup').firstElementChild;

function showNavbar(){
    navbar.classList.toggle("active");
}

burger.addEventListener("click", showNavbar);

for(let i = 0; i < navlist.length; i++){
    navlist[i].addEventListener("click", () =>{
        navbar.classList.remove("active");
    });
}

logo.addEventListener("click", () =>{
    navbar.classList.remove("active");
});
window.addEventListener("mouseup", (e) =>{
    if(e.target.id != "times" && navbar.classList.value == "cf active"){
        navbar.classList.remove("active");
    }
});
