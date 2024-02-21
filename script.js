



const container = document.querySelector('#container');




const content = document.createElement('div');


content.classList.add('content');
content.textContent = '';

container.appendChild(content);

            

            







            
            
            
           
        
const randomNumber = Math.floor(Math.random()*3);
let result;

function getComputerChoice() {
  if(randomNumber == 0) {
    result = 'rock';
  
  } else if(randomNumber == 1) {
    result = 'paper';
  } else {
    result = 'scissors';
  }

  document.getElementById("res").innerHTML = result;
                
                
};
  


  function playRound() {
    document.getElementById("rock").textContent= "rock";
  }
    
  const rock = document.querySelector('#rock')
  rock.addEventListener('click', playRound);
        
  
  
              
  function playRound1() {
    document.getElementById("paper").textContent= "paper";
  }
  
  const paper = document.querySelector('#paper')
  paper.addEventListener('click', playRound1);
  
      
  function playRound2() {
    document.getElementById("scissors").textContent= "scissors";
  }  
  const scissors = document.querySelector('#scissors')
  scissors.addEventListener('click', playRound2);
  



let playerSelection = '';
const computerSelection = getComputerChoice();
let points;


  function displayResult(playerSelection, computerSelection) {
  
    if(playerSelection == "rock" && computerSelection == "paper") {
      points = "You just earned 0 points";
    } else if(playerSelection == "scissors" && computerSelection == "paper") {
      points = "You win! you just reached 5 points";
    } else if(playerSelection == "paper" && computerSelection == "scissors") {
      points = "You lose! scissors beats paper";
    } else if(playerSelection == "scissors" && computerSelection == "rock") {
      points ="You lose! rock beats scissors";
    } else{
      points = "tie";
    }  
    
    
    document.getElementById("score").innerHTML = points;

    
        
    
    
  };
  displayResult();
  



  
  
  
          
  
  
  
  

  

                

                
            

        


            

              

              

            
            
 



 

            
         
            

            

            