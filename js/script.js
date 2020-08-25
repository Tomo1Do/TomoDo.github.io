
const navList = document.querySelector(".navlist").children;
const content = document.querySelector(".content").children;
let index = 0;

const themeChange = document.querySelector('.switch');
const change = document.querySelector('#cbox');

let theme = localStorage.getItem('theme');

if(theme == null){
    setTheme(false);
}
else{
    setTheme(theme);
}


themeChange.addEventListener("change", function(){
    let mode = change.checked;
    setTheme(mode);
});

function setTheme(mode){
    if(mode == true || mode == 'true'){
        document.getElementById('theme-mode').href = 'css/dark.css';
        change.checked = true;
    }
    if(mode == false || mode == 'false'){
        document.getElementById('theme-mode').href = '';
    }

    localStorage.setItem('theme', mode);
}




for(let i = 0; i < navList.length; i++){
    navList[i].addEventListener("click", () => {
        index = i;
        changePage(index);
    });
}

function changePage(index){
    for(let i = 0; i < navList.length; i++){
        navList[i].classList.remove('active');
        navList[index].classList.add('active');

        content[i].classList.remove('active');
        content[index].classList.add('active');
    }
}