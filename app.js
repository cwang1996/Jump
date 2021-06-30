const char = document.getElementById('dino');
const cactus = document.getElementById('cactus');
const bg = document.getElementById('game');
const button = document.querySelector('.btn-start');

function jump() {
    document.body.onkeyup = function(e) {
        if(char.classList != "animatejump") {
            if(e.code == "Space") {
                char.classList.add("animatejump");
            }
            setTimeout(function(){
                char.classList.remove("animatejump");
            }, 500)
        }
    }
}

function playGame() {
    button.addEventListener('click', function(){
        cactus.classList.add('animateobstacle');
        bg.classList.add('animatebg');
    });
    jump();
} 

let checkDead = setInterval(function(){
        let cb = parseInt(window.getComputedStyle(char).getPropertyValue("bottom"));
        let cl = parseInt(window.getComputedStyle(cactus).getPropertyValue("right"));
        console.log(cl);
        if(cl > 1200 && cl < 1220 && cb === 0){
            cactus.style.animation = "none";
            cactus.style.display = "none";
            if(confirm('You lost, try again?')){
                window.location.reload();
            }    
        }
    }, 20);

playGame();
