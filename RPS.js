const choices = ["rock","paper", "scissor"]
const ai = () => {
 return choices[Math.floor(Math.random() * choices.length) ]
}
var playerScore = 0;
var aiScore = 0;
var startTime= 10;
var end = "";



const userTurn = (choice) => {
        aiChoice = ai();
        backChoices()
        // document.getElementById("total").innerHTML = '';
        // document.getElementById("end").innerHTML = "";
        const userinput = document.getElementById(choice).value;
        
        play(userinput.toLowerCase(),aiChoice)
        
        // console.log("PLAYER: "+userinput.toLowerCase() + "| AI: " + aiChoice)

        if (confirm("Do you want to continue?") == true) {
            document.getElementById("ai"+aiChoice).style.opacity = '60%' ;
            document.getElementById(choice).style.opacity = '60%' ;
            document.getElementById("playerscore").innerHTML = playerScore;
            document.getElementById("aiscore").innerHTML = aiScore;
          } else {
            var end = 'Thank you for playing!\n';
            if(aiScore > playerScore){
                end += "Overall Score AI wins!";
            }
            else if(aiScore < playerScore){
                end += "Overall Score You wins!";
            } 
            else{
                end += "Overall Score is a Tie!";
            }
            end += "\nPlayer: " + playerScore + "\nAI: " + aiScore;
            alert(end);
            playerScore = 0;
            aiScore = 0;
            location.href = "./intro.html";
          }

}
const play = (playerChoice, aiChoice) => {
    if(playerChoice === aiChoice){
        alert("It's a tie!")
    }
    else if(playerChoice === 'rock' && aiChoice === 'scissor'){
        playerScore++
        alert("You win!")
    }
    else if(playerChoice === 'paper' && aiChoice === 'rock'){
        playerScore++
        alert("You win!")
    } 
    else if(playerChoice === 'scissor' && aiChoice === 'paper'){
        playerScore++
        alert("You win!")
    } 
    else{
        aiScore++
        alert("You lose!")
        
    }
}

const reload = () => {
    if (confirm("Do you want to reset the board?") == true) {
        location.reload();
      } else {
        //nothing
      }
}

function backChoices() {
    for (let i = 0;  i < choices.length; i++){
        document.getElementById(choices[i]).style.opacity = "";
        document.getElementById("ai"+choices[i]).style.opacity = '' ;
    }
}

