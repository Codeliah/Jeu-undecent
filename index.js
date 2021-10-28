//Base variables
var scores, roundScore, playerActive, playing;

//Initialize the game
init();

function init() {
    scores = [0, 0];
    playerActive = 0;
    roundScore = 0;
    playing = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score1').textContent = '0';
    document.getElementById('score2').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-2').textContent = '0';
    document.getElementById('name1').textContent = 'Player 1';
    document.getElementById('name2').textContent = 'Player 2';
    document.querySelector('.player-1-side').classList.remove('winner');
    document.querySelector('.player-2-side').classList.remove('winner');
    document.querySelector('.player-1-side').classList.remove('active');
    document.querySelector('.player-2-side').classList.remove('active');
    document.querySelector('.player-1-side').classList.add('active');
}

