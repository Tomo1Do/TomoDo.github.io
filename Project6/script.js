const lightboxCont = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-img");
const counter = document.querySelector('.lightbox-counter');
const lightboxText = document.querySelector(".lightbox-text");
const btn = document.querySelectorAll(".btn");
const portfolioItems = document.querySelector(".grid").children;
let index;
let imgSrc;

for(let i = 0; i<portfolioItems.length; i++){
    portfolioItems[i].addEventListener("click", () => {
        index = i;
        lightbox();
        changeImage();
    });
}

function next(){
    if(index==portfolioItems.length-1){
        index = 0;
    }
    else{
        index++;
    }
    changeImage();
}

function back(){
    if(index==0){
        index = portfolioItems.length-1;
    }
    else{
        index--;
    }
    changeImage();
}

function lightbox(){
    lightboxCont.classList.toggle("open");
}

function changeImage(){
    imgSrc = portfolioItems[index].querySelector("img").getAttribute("src");
    lightboxImage.src = imgSrc;
    counter.innerHTML = (index +1) + " of " + portfolioItems.length;
    lightboxText.innerHTML =  portfolioItems[index].querySelector("span").innerHTML;
}

lightboxCont.addEventListener("click",(e) => {
    if(e.target !== lightboxImage && e.target !== btn[0] && e.target !== btn[1] && e.target !== lightboxText && e.target !== counter){
        lightbox();
    }
});