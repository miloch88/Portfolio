const gameSummary = {
    numbers: 0,
    wins: 0,
    losts: 0,
    drwas: 0
}

const game = {
    playerHand: '',
    aiHand: ''
}

const hands = [...document.querySelectorAll('.select img')];

handSelection = (e) => {
    game.playerHand = e.target.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    e.target.style.boxShadow = '0 0 0 4px green';
}

computerChoice = () => {
    return hands[Math.floor(Math.random() * 3)].dataset.option;
}

checkResult = (player, ai) => {
    if (player === ai) {
        return 'draw'
    } else if ((player === 'paper' && ai === 'stone') || (player === 'stone' && ai === 'scissors') || (player === 'scissors' && ai === 'paper')) {
        return 'win'
    } else
        return 'lost'
}

publishResult = (player, ai, result) => {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers; 

    if(result === 'win'){
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = 'You';
        document.querySelector('[data-summary="who-win"]').style.color = 'green';
    }else if(result === 'lost'){
        document.querySelector('p.losses span').textContent = ++gameSummary.losts;
        document.querySelector('[data-summary="who-win"]').textContent = 'Computer';
        document.querySelector('[data-summary="who-win"]').style.color = 'red';
    }else{
        document.querySelector('p.draws span').textContent = ++gameSummary.drwas;
        document.querySelector('[data-summary="who-win"]').textContent = 'Draw';
        document.querySelector('[data-summary="who-win"]').style.color = 'gray';
    }
}

endGame = () =>{
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = '';
    game.playerHand = '';
}

startGame = () => {
    if (!game.playerHand) return alert('Wybierz dłoń!!!');
    game.aiHand = computerChoice();

    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
}

hands.forEach(img => img.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame);