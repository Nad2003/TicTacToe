// console.log("welcome to tic tac to");

// let music=new Audio("Music.mp3");
// let music=new Audio("Music.mp3"); this is for adding music
// let gameOver=new Audio("music.mp3");
let turn ="X";
// function to change turn 
let isgameOver=false;
const changeTurn=()=>{

    return turn==="X"?"0":"X";
}


// / to check win
const checkwin=()=>{
    let boxtext=document.getElementsByClassName("BoxText");
 let win=[
        [0, 1, 2, 5 ,5 ,0],
        [3, 4, 5, 5, 15 ,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135]
 ]


 win.forEach(e=>{
    if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[1]].innerText===boxtext[e[2]].innerText)&&(boxtext[e[0]].innerText!=='')){
        document.querySelector('.info').innerText=boxtext[e[0]].innerText + "   Won  "
        isgameOver=true;

        document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        document.querySelector(".line").style.width = "20vw";
    }
 })
}
// main logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(element=>{
    let boxtext =element.querySelector('.BoxText');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText ===''){
            boxtext.innerText=turn;
            turn=changeTurn();
            changeTurn();
            checkwin();
           if(!isgameOver){
            document.getElementsByClassName("info")[0].innerText= " Turn for   " + turn;
           }
        }
    })
})


reset.addEventListener('click',()=>{
    let boxtexts =document.querySelectorAll('.BoxText');
    Array.from(boxtexts).forEach(element=>{
        element.innerText="";
    });
    turn = "X";
    document.querySelector(".line").style.width = "0vw";
   
        isgameOver=false;
        document.getElementsByClassName("Info")[0].innerText= " Turn for   " + turn;


})