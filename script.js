let user_score=0;
let comp_score=0;

let user_scorepara=document.querySelector("#user-score");
let comp_scorepara=document.querySelector("#comp-score");


let msg=document.querySelector('#msg');
const choices=document.querySelectorAll(".choice");

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        let userChoice=choice.getAttribute('id');
        playGame(userChoice)
    })
})

let compChoice = ()=>{
    let cho=['Rock','Paper','scissor'];
    let indx=Math.floor(Math.random()*3);
    return cho[indx];

}

let playGame = (userChoice)=>{
    const comChoice=compChoice();
    if(comChoice==userChoice){
        console.log("draw the game");
        msg.innerText   ="draw the game";
        msg.style.backgroundColor="grey";
    
    }
    else if(comChoice=="Rock"  && userChoice=="Scissor"){
        console.log("com is win");
        msg.innerText   ="com is win";
        msg.style.backgroundColor="red";
        comp_score++;
        comp_scorepara.innerText=comp_score;

    }
    else if(comChoice=="Scissor"  && userChoice=="Rock"){
        console.log("you win!");
        msg.innerText   ="you win!";
        msg.style.backgroundColor="green";
        user_score++;
        user_scorepara.innerText=user_score;
    }
    else if(comChoice=="Rock"  && userChoice=="Paper"){
        console.log("you win!");
        msg.innerText   ="you win!";
        msg.style.backgroundColor="green";
        user_score++;
        user_scorepara.innerText=user_score;
    }
    else if(comChoice=="Paper"  && userChoice=="Rock"){
        console.log("comp win!");
        msg.innerText   ="comp win!";
        msg.style.backgroundColor="red";
        comp_score++;
        comp_scorepara.innerText=comp_score;
    }
    else if(comChoice=="Paper"  && userChoice=="Scissor"){
        console.log("you win!");
        msg.innerText   ="you win!";
        msg.style.backgroundColor="green";
        user_score++;
        user_scorepara.innerText=user_score;
    }
    else if(comChoice=="Scissor"  && userChoice=="Paper"){
        console.log("comp win!");
        msg.innerText   ="comp win!";
        msg.style.backgroundColor="red";
        comp_score++;
        comp_scorepara.innerText=comp_score;
    }

}