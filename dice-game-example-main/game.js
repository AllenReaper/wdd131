

const dieImages = document.querySelectorAll("#gameboard img");

document.getElementById("rollButton").addEventListener("click", (event) => {
    
    dieImages.forEach((Image) => {
        if(isDieUnlocked(Image)) {
            Image.src = "assets/die_rolling.gif";
            
        };
    });

    setTimeout(() => {

        dieImages.forEach((Image) => {
            if(isDieUnlocked(Image)) {
                Image.src = "assets/white_dice_" + (Math.floor (Math.random() * 6) + 1) + ".gif";
                
            }
        });
    }, 2000);


});

function isDieUnlocked(dieImage) {
    const checkboxes = document.querySelectorAll("#gameboard input");

    const unchecked = Array.from(checkboxes)
                            .filter(checkbox => !checkbox.checked);
    return unchecked.find(checkbox => checkbox.className === dieImage.className);
}