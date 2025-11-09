'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent= 'Correct Number😀';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=20;
// console.log(document.querySelector('.guess').value);
let Secretnumber= Math.trunc(Math.random()*20)+1;
let score= 20;
let highScore=0;

const displayMessage= function(message){
    document.querySelector('.message').textContent=message;
}
//btn check is two classes since btn is more generic we use check for specificity;
document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage("🚫 NO NUMBER!");
    }
    else if(Secretnumber===guess){
        displayMessage('🥳 You Guessed it Right!');
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';//have to specify value in a string;
        document.querySelector('.number').textContent=Secretnumber;

        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }
    else if(guess!==Secretnumber){
        if(score>1){
            displayMessage(guess>Secretnumber?'Guess Too High':'Guess Too Low');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            displayMessage('You lost the game!');
            document.querySelector('.score').textContent=0;
        }
    }
    // else if(Secretnumber<guess){
    //     if(score>1){
    //         displayMessage('Guess Too High');
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         displayMessage('You lost the game!');
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
    // else if(guess<Secretnumber){
    //     if(score>1){
    //         displayMessage('Guess Too Low');
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         displayMessage('You lost the game!');
    //         document.querySelector('.score').textContent=0;
    //     }
        
    // }
});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    Secretnumber= Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width='15rem';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value='';
});