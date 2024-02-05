document.addEventListener('DOMContentLoaded', function() {
    initGame();
});

function initGame() {

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const game = new Game(canvas, ctx);

    game.start();
}