const keys = document.querySelectorAll(".key"),
        note = document.querySelector(".playingnote"),
        hint = document.querySelectorAll(".hint")

    function playNote(e){
        console.log(e.keyCode, " is pressed!")
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
        
        if (!key){return}

        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
        audio.currentTime = 0;
        audio.play(); 

        note.innerHTML = key.getAttribute("data-note")
        key.classList.add("playing")
    }

    function removeTransition(e){
        if (e.propertyName !== "transform") return;
        this.classList.remove("playing")
    }

    function hintOn(e, index){
        e.setAttribute("style", "transitioin-delay: " + index * 50 + "ms");
    }

hint.forEach(hintOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);