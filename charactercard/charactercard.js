
const healthDisplay = document.getElementById('health-value');
const levelDisplay = document.getElementById('level-value');
const attackButten = document.getElementById('attack-butten');
const levelUpButten = document.getElementById('levelup-butten');

let health = 999;
let level = 999999999999999999;

attackButten.addEventListener('click', () => {
    if (health > 0) {
        health -= 10;
        healthDisplay.textContent = health;
        
        
        if (health === 0) {
            setTimeout(() => {
                alert('Character Died');
            }, 10);
        }
    }
});

levelUpButten.addEventListener('click', () => {
    if (health > 0) { 
        level += 1;
        health += 5;
        healthDisplay.textContent = health;
        levelDisplay.textContent = level;
    }
});