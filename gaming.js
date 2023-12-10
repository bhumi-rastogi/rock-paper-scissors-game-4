var kagaz=document.querySelector("#p");
var pathar=document.querySelector
("#r");
var kacchi=document.querySelector("#s");

var hand=document.querySelector("#hand")

const box=document.querySelectorAll("#box")
const hand1=document.querySelector("#hand-one");

var com=document.querySelector("cp-hand")
var score1=document.querySelector("#part-1");
var score2=document.querySelector("#part-2");


var csscore=0;
var psscore=0;
score1.textContent=psscore;
score2.textContent=csscore;

var c=document.querySelector("#cp-hand")

var won=document.querySelector("#win")
var wwon=document.querySelector("#win")
var pa=document.querySelector("#again")

function randomi(){
    operators=Math.round(Math.floor(Math.random()*3));
    if (operators===1){
        c.src="./assets/"+kagaz.id+"-hand.png"
    }
    if (operators===2){
        c.src="./assets/"+pathar.id+"-hand.png"
    }

    if (operators===0){
            c.src="./assets/"+kacchi.id+"-hand.png"
    }
}
randomi()

var playerChoice=""
box.forEach((img) => {
    img.onclick=(e)=>{
        if(e.target.matches("img")){
        // console.log(e.target.id)
        hand.src="./assets/"+(e.target.id)+"-hand.png";
        if(e.target.id === "pathar"){
            playerChoice ="pathar";
        }else if(e.target.id === "kagaz"){
            playerChoice ="kagaz";
        }else if(e.target.id === "kacchis"){
            playerChoice ="kacchis";
        }
        random()
        }

console.log(playerChoice);
if(playerChoice==="kagaz"){
    console.log(playerChoice)
    if(operators===2){
        psscore=psscore+1
        score1.textContent=psscore;
        

    }
    else if (operators===0){
        csscore=csscore+1
        score2.textContent=csscore;
    }
}else if(playerChoice==="pathar"){
    if(operators===1){
        csscore=csscore+1
        score2.textContent=csscore;
    }
    else if (operators===0){
        psscore=psscore+1
        score1.textContent=psscore;
    }
}else if(playerChoice==="kacchis"){
    if(operators===2){
        csscore=csscore+1
        score2.textContent=csscore;
    }
    else if (operators===1){
        psscore=psscore+1
        score1.textContent=psscore;
    }
}
if(psscore===5){
    var btn=document.querySelector(".button");
    won.style.visibility="visible"
    wwon.innerHTML="Won"
    pa.style.visibility="visible"
    for (var i = 0; i < btn.length; i++) {
        btn[i].style.visibility = "hidden";
    }
}else if(csscore===5){
    var btn=document.querySelector(".button");
    won.style.visibility="visible"
    wwon.innerHTML="Lose"
    pa.style.visibility="visible"
    for (var i = 0; i < btn.length; i++) {
        btn[i].style.visibility = "hidden";
    }
}

}
    
})

console.log(psscore)
console.log(csscore)



pa.onclick=()=>{
    location.href="./index.html"
}
