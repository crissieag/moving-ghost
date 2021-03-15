let ghost = document.getElementById("main-ghost");
let message = document.getElementById("message");
let hide = document.getElementById("hide");


document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {        
        ghost.style.transform += `translateX(40px)`; 
        message.innerHTML = "to the right!";
        message.style.color = "#031d44";
        hide.style.display = "none";
    } else if (event.key === 'a') {  
        ghost.style.transform += `translateX(-40px)`; 
        message.innerHTML = "to the left!";
        message.style.color ="#264653";
        hide.style.display = "none";
    } else if (event.key === 'w') { 
        ghost.style.transform += `translateY(-40px)`; 
        message.innerHTML = "going up!";
        message.style.color = "#0c335a";
        hide.style.display = "none";
    } if (event.key === 's') {
        ghost.style.transform += `translateY(40px)`; 
        message.innerHTML = "going  down :(";
        message.style.color = "#0b3159";
        hide.style.display = "none";
    }

});


