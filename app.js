//Base variables
var score, currentScore, activePlayer, playing;
var diceDOM = document.querySelector('.dice');

var newGame = document.querySelector('.btn-new');
var rollDice = document.querySelector('.btn-roll');
var hold = document.querySelector('.btn-hold');
newGame.addEventListener('click', reset);
rollDice.addEventListener('click', rollDice);
hold.addEventListener('click', hold);

//Initialize the game
init();

function init() {
    score = currentScore = activePlayer = 0;
    playing = true;
    score.textContent = '0';
    currentScore.textContent = '0';
    // score2.textContent = '0';
    // currentScore2.textContent = '0';
 
}


//Roll the dice
function rollDice () {
    if (playing) {
        var dice = Math.floor(Math.random() * 6) + 1;
        diceDOM.style.display = 'block';
        diceDOM.src = `images/dice-${number}.png`;
        //var dice = diceImg.indexOf(diceImg[number]) + 1;

        //Update and add score to roundScore if it's not  1
        if (dice !== 1) {
            currentScore += dice;
            //activePlayer === 0 ? currentScore1.textContent = currentScore : currentScore2.textContent = currentScore;
            document.querySelector(`currentScore-${activePlayer}`).textContent = currentScore;
        } else {
            nextPlayer();
        }
    }
});


//Check if the player won after this round
function holdDice () {
    if (playing) {
        score[activePlayer] += currentScore;
        document.querySelector(`#score${activePlayer}`).textContent = score;

        var winningScore = 100;

        if (score[activePlayer] >= winningScore) {
            document.querySelector(`#name${activePlayer}`).textContent = 'Winner !!!';
            document.getElementById('dice').style.display = 'none';
            document.querySelector(`.player-${activePlayer}-side`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-side`).classList.remove('active');
            playing = false;
        } else {
            nextPlayer();
        }
    }
});

//Start new game or reset
document.querySelector('.btn-new').addEventListener('click', init);

//New player functions
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';

    document.querySelector('.player-1-side').classList.toggle('active');
    document.querySelector('.player-2-side').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}