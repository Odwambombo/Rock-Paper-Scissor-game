let computerCount= 0;
let playerCount = 0;

function playRound(){

    for(let i=0; i<5; i++){
    
    while (true) {
    let User = prompt('Enter Rock Paper or Scissor and press enter');
    let playSelection = User.toUpperCase();

    if(playSelection === 'ROCK' || playSelection === 'PAPER' || playSelection === 'SCISSOR'){
       
    Computer = Array('ROCK','PAPER','SCISSOR')
    let computerSelection = Computer[Math.floor(Math.random()*Computer.length)];

    let result = `${playSelection} ${computerSelection}`;
    console.log(result);

    //to check the condition to see if it matches results
    let val = 'ROCK ROCK';
    let val1 = 'ROCK PAPER';
    let val2 = 'ROCK SCISSOR';
    let val3 = 'PAPER PAPER';
    let val4 = 'PAPER ROCK';
    let val5 = 'PAPER SCISSOR';
    let val6 = 'SCISSOR SCISSOR';
    let val7 = 'SCISSOR ROCK';
    let val8 = 'SCISSOR PAPER';

    if(result === val){
        computerCount++;
        playerCount++;
    }
    else if(result === val1){
        computerCount++;
    }
    else if(result === val2){
        playerCount++;
    }
    else if(result === val3){
        playerCount++;
        computerCount++;
    }
    else if(result === val4){
        playerCount++;

    }
    else if(result === val5){
        computerCount++;
    }
    else if(result === val6){
        playerCount++;
        computerCount++;
    }
    else if(result === val7){
        computerCount++;
    }
    else if(result === val8){
       playerCount++;
    }else{
        computerCount++;
    }
    let score =`Player: ${playerCount} Computer: ${computerCount}`;
    console.log(score);

    function Results(){
        if(playerCount === computerCount){
            console.log('Its a Draw!')
         }else if(playerCount > computerCount){
            console.log('Congratulations you the winner!')
         }else{
            console.log('Sorry you lost better Luck next time!')
         }
    } 
    break;  
    } else{
    alert('You entered a wrong value please press enter and try again!');
    } 
}
}
Results();
};




