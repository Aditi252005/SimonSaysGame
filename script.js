let gameseq=[];
let userseq=[];
let btns=["pink", "purple", "blue", "grren"];
let started = false;
let level=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress", function(){
    if(started==false){
       console.log("game started"); 
       started=true;
    }
    levelup();
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 200);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);

}

function levelup(){
    userseq=[]     /*very imp step */ 
    level++;
    h3.innerText=`Level ${level}`;

    let randIdx= Math.floor(Math.random() *3);
    let randcol=btns[randIdx];
    let randbtn= document.querySelector(`.${randcol}`);
    gameseq.push(randcol);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans(idx){
   
    if(userseq[idx]===gameseq[idx]) {
        if(userseq.length==gameseq.length){
            setTimeout(levelup , 1000);
        }
    }
    else{
       h3.innerHTML= `Game over! Your Score was <b>${level}</b> <br> Press any to start`; 
       document.querySelector("body").style.backgroundColor="red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
       },150);
       reset();
    } 
}

function btnpress(){
    let btn=this;
    userflash(btn);
    let usercol= btn.getAttribute("id");
    userseq.push(usercol);
    console.log(userseq);
    checkans(userseq.length-1);
}
let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress); 
}


function reset(){
    level=0;
    started=false;
    userseq=[];
    gameseq=[];
}