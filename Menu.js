let menu = document.getElementById("Enlaces-ul");
let button = document.getElementById("Menu-btn");

button.addEventListener("click", ()=>{
    menu.classList.toggle("active");
    if(menu.className.includes("active")){
        button.src = "Multi/close_window_64px.png";
    }
    else{
        button.src ="Multi/menu_128px.png";
    }
});
