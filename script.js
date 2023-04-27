let dice1 = Math.trunc(Math.random() * 6);
let dice2 = Math.trunc(Math.random() * 6);
let img1 = document.getElementsByClassName("img1")[0];
let img2 = document.getElementsByClassName("img2")[0];
let h1 = document.getElementsByTagName("h1")[0]








window.onload = function(){
    if(dice1 > dice2){
        h1.innerHTML = "Player 1 Is the winner"
    }else if(dice1 == dice2){
        h1.innerHTML = "Draw"

    }else if(dice1 < dice2){
        h1.innerHTML = "Player 2 Is the winner"

    }
}

function img(num,img){

    

    img.setAttribute("src",`/../images/dice${num}.png`)

}

img(dice1,img1);
img(dice2,img2);