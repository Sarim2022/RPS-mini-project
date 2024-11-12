// computer chose random 

let paper = document.getElementById("ximage0");
let Scissor = document.getElementById("ximage1");
let Rock = document.getElementById("ximage2");


function Computerguess(x){
    let Cthink = Math.floor(Math.random()*3);
    const compthink = Cthink;
    console.log("computer think ",compthink)
    if(compthink === 0)   // paper
    {
        paper.style.border="2px solid red";
        setTimeout(function(){paper.style.border="none";},1*1000);
        console.log("Commputer think paper-0");
        checkscore(compthink,x);

    }else if (compthink === 1)  // scissor
    {
        Scissor.style.border="2px solid red";
        setTimeout(function(){Scissor.style.border="none";},1*1000);
        console.log("Commputer think,scissor-1");
        checkscore(compthink,x);
    
    }else if(compthink === 2){  // 2   // rock
        Rock.style.border="2px solid red";
        setTimeout(function(){Rock.style.border="none";},1*1000);
        console.log("Commputer think rock-2");
        checkscore(compthink,x);
    }
}





let score = document.getElementById("score");
function checkscore(compthink,Uthink){

    if(compthink===Uthink)
    {
        console.log(`your score ${Uthink} computer score ${compthink}`);
        score.innerHTML = "MatchTie";
        score.style.color="red";
        console.log("TIE");
    }
    else if(compthink===0 && Uthink===2)
    {
        
        console.log(`your score ${Uthink} computer score ${compthink}`);
        score.innerHTML = " computer scored ";
        score.style.color="red";
        increasescore(1);
    }
    else if(compthink===1 && Uthink===2)
    {
        
        console.log(`your score ${Uthink} computer score ${compthink}`);
        score.HTML = " You scored ";
        score.style.color="red";
        increasescore(0);
    }
    else if(compthink===2 && Uthink ===0)
    {
        
        console.log(`your score ${Uthink} computer score ${compthink}`);
        score.innerHTML = " You Scored ";
        score.style.color="red";
        increasescore(0);
    }
    else if(compthink===1 && Uthink ===0)
    {
        
        console.log(`your score ${Uthink} computer score ${compthink}`);
        score.innerHTML = "Computer Scored";
        score.style.color="red";
        increasescore(1);
    }
    else if(compthink===2 && Uthink ===1)
    {
        
        console.log(`your score ${Uthink} computer score ${compthink}`);
        score.innerHTML = "Computer Scored";
        score.style.color="red";
        increasescore(1);
    }else if(compthink===0 && Uthink ===1){
        
        console.log(`your score ${Uthink} computer score ${compthink}`);
        score.innerHTML = " You scored";
        score.style.color="red";
        increasescore(0);
    }
}



//somthing iisue  there is because sometimes it increase score somtimes not 
let usertxt = document.getElementById("usertxt");
let computer = document.getElementById("computertxt");
let Us = 0 ;
let Cs = 0 ;
function increasescore(result)  // 0 for userincrease , 1 for computer increaee  
{
    if(result === 0 )
    {
        Us++;
        
        usertxt.innerHTML = Us;
        console.log("increase user score ");
    }
    else if(result===1){
        Cs++;
        computer.innerHTML = Cs;
        
        console.log("increae computer score ");

    }


}

let result = document.getElementById("res");
let reset = document.getElementById("reset");
reset.addEventListener("click",function(){
    Us = 0 ;
    Cs = 0 ;
    usertxt.innerHTML = 0;
    computer.innerHTML = 0;
    result.innerHTML="Score board";
    score.innerHTML="VS";
    score.style.color="black";

})





let finalscore = document.getElementById("fx");
finalscore.addEventListener("click",function()
{
    if(Us>Cs)
    {
        res.innerHTML="You are winner";
    }
    else if(Cs>Us){
        res.innerHTML="You are Losser";

    }else{
        res.innerHTML="Loading Winner...";
      
    }

})





// User choice input 
let Userpaper = document.getElementById("paper");
let userrock = document.getElementById("rock");
let Userscissor = document.getElementById("scissor");

Userpaper.addEventListener("click",function(){
    console.log("user chose : paper-0");
      setTimeout(()=> Computerguess(0),0);
})

Userscissor.addEventListener("click",function(){
    console.log("user chose : scissor-1");
      setTimeout(()=> Computerguess(1),0*1000);
})

userrock.addEventListener("click",function(){
    console.log("user chose : rock-2");
      setTimeout(()=> Computerguess(2),0*1000);
})


