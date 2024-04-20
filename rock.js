let user=0;
let computer=0;


const choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

const userscore=document.querySelector("#user-score");
const computerscore=document.querySelector("#comp-score");

const equal=() =>{
    msg.innerText="Draw,Both are same";
   
};


const randomcomputer=() =>{     //random colors generated by computer
    const op=["rock","paper","scissor"];
    const rand=Math.floor(Math.random()*3);
    //console.log(rand)
    return op[rand];
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
      user++;
      msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
      userscore.innerText=user;
      
    } else {
      computer++;
       computerscore.innerText = computer;
      msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
      
    }
  };




const game = (userChoice) => {
    //Generate computer choice
    const compChoice = randomcomputer();
  
    if (userChoice === compChoice) {
      //Draw Game
      equal();
    } else {
      let userWin = true;
      if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
      } else if (userChoice === "paper") {
        //rock, scissors
        userWin = compChoice === "scissor" ? false : true;
      } else {
        //rock, paper
        userWin = compChoice === "rock" ? false : true;
      }
      showWinner(userWin, userChoice, compChoice);
    }
  };
  

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
          game(userChoice);
    });
    
});