let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"] 


let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress',function(){
   if(started == false){
    console.log("Game is started");
    started = true
    levelUp();


   }

});

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(()=>{
        btn.classList.remove("userflash")
    },150)
}
function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(()=>{
        btn.classList.remove("flash")
    },150)
}
let maxLevel = 0;
function levelUp(){
    userSeq=[]
    level++;
    h2.innerText = `Level ${level}`;

    let ran = Math.floor(Math.random()*3);
    let randColor = btns[ran]

    let ranBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor)
    gameFlash(ranBtn);
    if(level > maxLevel) maxLevel = level;
    console.log(maxLevel)
    console.log(level)
    let p1 = document.createElement('p')
    p1.innerHTML = `Max level : ${maxLevel}`
    h2.appendChild(p1)
}


function checkAns(idx){

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start again `
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";

        },150)
        reset();
    }
}
function btnPress(){
    let btn = this;
    userFlash(btn);
   userColor = btn.getAttribute("id");
   userSeq.push(userColor)
   checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener('click',btnPress)
}

function reset(){
    started = false;
    gameSeq  = []
    userSeq = []
    level = 0;

}