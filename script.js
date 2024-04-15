function ToggleMode(){
    const html = document.documentElement;

    const img = document.querySelector(".Profile img");



    if(html.classList.contains('ligth')){
        html.classList.remove('ligth');
        img.setAttribute("src", "./assets/avatar.png");
    }
    else{
        html.classList.add('ligth');
        img.setAttribute("src", "./assets/avatar-light.png");


    }
}