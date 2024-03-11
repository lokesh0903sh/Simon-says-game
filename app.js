// let gameSeq = [];
// let userSeq = [];

// let btns  = ["yellow", "green", "red", "purple"];
// let started = false;
// let level = 0;

// let h3 = document.querySelector("h3");
// document.addEventListener("keypress", function(){
//     if(started == false){
//         console.log("game is started");
//         started = true;
//         levelUp();
//     }
// });

// function gameFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },250);
// }

// function userFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");
//     },250);
// }

// function levelUp(){
//     userSeq = [];
//     level++;
//     h3.innerText = `Level ${level}`;

//     let randIndex = Math.floor(Math.random()*3);
//     let randColor = btns[randIndex];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     gameFlash(randBtn);
// }
// function checkAns(idx){
//     if(gameSeq[idx] === userSeq[idx]){
//         if(userSeq.length == gameSeq.length){
//             setTimeout(levelUp, 1000)
//         }   
//     }
//     else{
//          h3.innerText = `Game over!! press any key to start game`;
//          reset();
//     }
// }
// function btnpress(){
//     let btn = this;
//     userFlash(btn);

//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);
//     checkAns(userSeq.length-1);
// }

// let allBtns = document.querySelectorAll(".btn");
// for(btn of allBtns){
//     btn.addEventListener("click", btnpress)
// }

// function reset(){
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
//     started = false;
// }



let gameSeq = []
let userSeq = []
let highestScore = 0;

let started = false;
let btns = ["red","yellow","green","purple"];
let level = 0;

let h3 = document.querySelector("h3");
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randidx = Math.floor(Math.random()*3);
    let randColor = btns[randidx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp, 1000);
        }
    }
    else{
        let score = level;
        if(highestScore <= score){
            highestScore = score;
            let highscore = document.querySelector(".score");
            highscore.innerHTML = `Highest Score : ${score}`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){
                document.querySelector("body").style.backgroundColor = "white";
            },150)
        }
        h3.innerHTML = `Game over!! your score is <b>${level}</b>. <br> please enter any key to restart.`
        reset();
    }
}

function btnpress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1)
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnpress)
}

function reset(){
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;
}