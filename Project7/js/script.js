const slides = document.querySelector('.slider').children;
const controlLeft = document.querySelector('.control-left');
const controlRight = document.querySelector('.control-right');
const indicator = document.querySelector('.indicators');
let index = 0;

controlLeft.addEventListener("click", () =>{
    back();
    resetTimer()
});

controlRight.addEventListener("click", () =>{
    next();
    resetTimer();
});

//Create circle indicators
function createIndicators(){
    for(let i = 0; i < slides.length; i++){
        const div = document.createElement("div");
        div.innerHTML = i + 1;
        div.setAttribute("onclick", "indicateSlide(this)");
        div.id = i + 1;
        if(i==0){
            div.className = "active";
        }
        indicator.appendChild(div);
    }
}

createIndicators();

//
function indicateSlide(element){
    index =element.id - 1;
    changeSlide();
    UpdateCircleIndicator();
    resetTimer();
}

//Update Circle Indicator
function UpdateCircleIndicator(){
    for(let i = 0; i< indicator.children.length; i++){
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}

function next(){
    if(index == slides.length-1){
        index = 0;
    }
    else{
        index++;
    }
    changeSlide();
    UpdateCircleIndicator()
}

function back(){
    if(index == 0){
        index = slides.length-1;
    }
    else{
        index--;
    }
    changeSlide();
    UpdateCircleIndicator()
}

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(next, 8000);
}

function changeSlide(){
    for(let i=0; i<slides.length; i++){
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}



let timer = setInterval(next, 8000);