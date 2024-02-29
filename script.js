const container = document.querySelector('#container');
const content = document.createElement('div');

content.classList.add('content');
content.textContent = '';

container.appendChild(content);


function getComputerChoice() {
  let result;
  const randomNumber = Math.floor(Math.random()*3);
  if(randomNumber == 0) {
    result = 'rock';
  } else if(randomNumber == 1) {
    result = 'paper';
  } else {
    result = 'scissors';
  }

  document.getElementById("res").innerHTML = result;
                
return result;   
};


function playRock() {
  let playerSelection ='rock';
  const computerSelection =getComputerChoice();
  document.getElementById("rock").textContent= "rock";
  displayResult(playerSelection, computerSelection);
}
const rock = document.querySelector('#rock')
rock.addEventListener('click', playRock);
      


function playPaper() {
  let playerSelection ='paper';
  const computerSelection =getComputerChoice();
  document.getElementById("paper").textContent= "paper";
  displayResult(playerSelection, computerSelection);
}
const paper = document.querySelector('#paper')
paper.addEventListener('click', playPaper);

    
function playScissors() {
  let playerSelection ='scissors';
  const computerSelection =getComputerChoice();
  document.getElementById("scissors").textContent= "scissors";
  displayResult(playerSelection, computerSelection);
}  
const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', playScissors);







  
  
  function displayResult(playerSelection, computerSelection) {
    let points;
    
    if(playerSelection == "rock" && computerSelection == "paper") {
      points = "You just earned 0 points";
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
      points = "You just reached 2 points";
    } else if(playerSelection == "rock" && computerSelection == "scissors") {
      points = "You just earned 2 points";
    } else if(playerSelection == "paper" && computerSelection == "rock") {
      points ="You won!! you just earned 5 points!!!";
    } else if(playerSelection == "paper" && computerSelection == "paper") {
      points ="Tie";
    } else if(playerSelection == "rock" && computerSelection == "rock") {
      points ="Tie";
    } else if(playerSelection == "scissors" && computerSelection == "scissors") {
      points ="Tie";
    } else{
      points = "Start Again";
    }  
    
    


    
        
    
    document.getElementById("score").innerHTML = points;

  };
  



  
  
  
          
  
  
  
  

  

                

                
            

        


            

              

              

            
            
 



 

            
         
            

            

          