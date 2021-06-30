const char = document.getElementById('char');
const block = document.getElementById('obstacle');
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
        block.classList.add('animateobstacle');
    });
    jump();
} 

let checkDead = setInterval(function(){
        let cb = parseInt(window.getComputedStyle(char).getPropertyValue("bottom"));
        let cl = parseInt(window.getComputedStyle(block).getPropertyValue("right"));
        console.log(cl);
        if(cl > 1200 && cl < 1220 && cb === 0){
            block.style.animation = "none";
            block.style.display = "none";
            if(confirm('You lost, try again?')){
                window.location.reload();
            }    
        }
    }, 20);

playGame();