//Abandoned project, I let scope creep get to me too fast and too soon.

let body = document.querySelector("body")

//BACKGROUND STYLING
body.style.backgroundImage = "url(image/thefinaltrialmap.png)"
body.style.backgroundSize = "100vw"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundColor = "black"

// let itemSelect = document.querySelector(".i1")
const olimarShip = document.querySelector(".i2")
const resetButton = document.querySelector(".i3")
const olimarBox = document.querySelector(".i4")
const nextDayOverlay = document.getElementById("next-day-overlay")
const nextDayButton = document.getElementById("next-day-button")
const dayTimer = document.getElementById("day-timer")
const playAgainButton = document.getElementById("play-again-button")
let highScoreDiv = document.getElementById("high-scores")
const highScoresShowButton = document.getElementById("high-scores-show-button")
const highScoresCloseButton = document.getElementById("highscoresclosebutton") //I can't figure this out, for some reason removing the hyphens causes the button to work, from js html and css.
const divs = document.querySelectorAll(".i1, .i7, .i6, .i8")
const elemental = document.querySelector(".i8")

// PIKMIN COUNTER/PIKMIN MANIPULATION
let pikmin =  {
    red: 1,
    yellow: 0,
    blue: 0,
    element: document.querySelector("pikmin-total"),
    render : () => {
        document.querySelector("#pikmin-total").innerHTML = `<span id = "red-pikmin">Red</span> Pikmin: ${pikmin.red} <span id = "yellow-pikmin">Yellow</span> Pikmin: ${pikmin.yellow} <span id = "blue-pikmin">Blue</span> Pikmin: ${pikmin.blue}`
    }
}
pikmin.render()

//HIGH SCORE SHOW/CLOSE
function openHighScores() {
    highScoreDiv.style.display = "block"
    highScoresCloseButton.style.display = "block"
}
function closeHighScores(){
    highScoreDiv.style.display = "none"
    highScoresCloseButton.style.display = "none"
}
highScoresShowButton.addEventListener("click", (e) => {
    loadHighScore()
    openHighScores()
})
highScoresCloseButton.addEventListener("click", (e) => {
    closeHighScores()
})

//ASKED ON STACKOVERFLOW FOR THIS
//FUNCTION TO SAVE HIGH SCORES
function saveHighScore() {
    let date = new Date();
    let highScoreDiv = document.getElementById("high-scores"); // Assuming you have a div with the id "highScoreDiv"
    let highScoreNumbers = `Your high score is ${pikmin.numberOf} on ${date}!`;
    let highScoreDivNew = document.createElement("div");
    highScoreDivNew.textContent = highScoreNumbers; // Use textContent to set the text of the new div
    highScoreDiv.appendChild(highScoreDivNew);
    localStorage.setItem("high-score-content", highScoreNumbers); // Store the high score directly as a string
}
  // FUNCTION TO LOAD AND DISPLAY HIGH SCORE FROM LOCALSTORAGE
function loadHighScore() {
    let highScoreDiv = document.getElementById("high-scores");
    let highScoreNumbers = localStorage.getItem("high-score-content"); // Retrieve the high score as a string
    if (highScoreNumbers) {
    let highScoreDivNew = document.createElement("div");
    highScoreDivNew.textContent = highScoreNumbers; // Use textContent to set the text of the new div
    highScoreDiv.appendChild(highScoreDivNew);
    }
}

//SEE IF USER CLICKED TWICE ON THE DIV - CLICKCOUNTER
// divs.forEach((div)=>{
// div.addEventListener("click", (e) => {
//     clickCounter++
//     if (clickCounter === 2){
//         clickCounter = 0
//         nextDayOverlayShow()
//         makeDivsClickable()
//     }
// })
// })

//ROUND SETUP FUNCTIONALITY
let clickCounter = 0
let dayCounter = 0
let shipPartCounter = 0
let monsterCounter = 0
dayTimer.innerHTML = `<p>You have taken ${dayCounter}/6 days!</p>`
dayTimer.class = "save-timer"
function saveDayTimer() {
    localStorage.setItem("dayCounter", dayTimer)
}
function nextDayOverlayShow() {
    if (nextDayOverlay.style.display = "none"){
        nextDayOverlay.style.display = "block"
    }
}
function nextDayOverlayHide(){
    if (nextDayOverlay.style.display = "block"){
        nextDayOverlay.style.display = "none"
    }
}

//END OF ROUNDS/ROUNDS
nextDayButton.addEventListener("click", (e) => {
    dayCounter++
    updateDayTimer() //runs on click of next day button, checks for win/lose conditions
    nextDayOverlayHide()
    randomBgColor()
    if (dayCounter === 6 || monsterCounter >= 3){ //the button was skipping 3, so >=3 makes the condition run
        nextDayButton.style.display = "none"
        nextDayOverlayShow()
        showPlayAgain()
    } else if (dayCounter <= 6 && shipPartCounter  >= 6){
        showPlayAgain()
        nextDayOverlayShow()
    }
})

//PLAY AGAIN FUNCTIONALITY
function showPlayAgain(){
    playAgainButton.style.display = "block"
}
function hidePlayAgain (){
    playAgainButton.style.display = "none"
}
playAgainButton.addEventListener("click", (e) => {
    window.location.reload()
})
hidePlayAgain()

//LOSE/WIN CONDITIONS
function updateDayTimer() {
    if (dayCounter >= 6 || monsterCounter >= 3){ //the button was skipping 3, so >=3 makes the condition run
        dayTimer.innerHTML = `<p>You Lose! Click the Play Again button below to try again!</p>`
        showPlayAgain()
    } else if ((dayCounter >= 6 && monsterCounter <=3) || shipPartCounter >= 6){
        nextDayButton.style.display = "none"
        dayTimer.innerHTML = `<p> You win! Your high score: ${pikmin.numberOf} </p>`
        saveHighScore()
        showPlayAgain()
        } else {
        dayTimer.innerHTML = `<p>You have taken ${dayCounter}/6 days!</p>`
        hidePlayAgain()
    }
}

//PICTURE REQUIREMENT HANDLING CONDITIONS
let imageRequirements = {
    "image/armored-cannon-beetle.png": {
        isMonster: true,
        shipPart: false,
        addPikmin: false,
        removePikmin: function() {
            if (pikmin.numberOf > 10){
                pikmin.numberOf -= 5
            } else {
                return
            }
        }
    },
    "image/emperor-bulblax.png": {
        isMonster: true, 
        shipPart: false,
        addPikmin: false,
        removePikmin: function() {
            if (pikmin.numberOf > 10){
                pikmin.numberOf -= 5
            } else {
                return
            }
        }
    },
    "image/small-bulborb.png": {
        isMonster: true, 
        shipPart: false,
        addPikmin: false,
        removePikmin: function() {
            if (pikmin.numberOf > 5){
                pikmin.numberOf -= 3
            } else {
                return
            }
        } 
    },
    "image/yellow-wollywog.png": {
        isMonster: true,
        shipPart: false,
        addPikmin: false,
        removePikmin: function() {
            if (pikmin.numberOf > 5){
                pikmin.numberOf -= 3
            } else {
                return
            }
        } 
    },
    "image/shipparts/secret-safe.png": {
        isMonster: false,
        isShipPart: true,
        addPikmin: false,
    }, 
    "image/shipparts/chronos-reactor.png":{
        isMonster: false,
        isShipPart: true,
        addPikmin: false
    },
    "image/shipparts/ionium-jet.png":{
        isMonster: false,
        isShipPart: true,
        addPikmin: false
    },
    "image/shipparts/main-engine.png":{
        isMonster: false,
        isShipPart: true,
        addPikmin: false
    },
    "image/shipparts/nova-blaster.png":{
        isMonster: false,
        isShipPart: true,
        addPikmin: false
    },
    "image/shipparts/radiation-canopy.png":{
        isMonster: false,
        isShipPart: true,
        addPikmin: false
    },
    "image/red-5-pellet.png":{
        isMonster: false,
        isShipPart: false,
        addPikmin: function () {
            return pikmin.red += 5
        }
    },
    "image/red-1-pellet.png":{
        isMonster: false,
        isShipPart: false,
        addPikmin: function () {
            return pikmin.red += 1
        }
    },
}

//ARRAY THE IMAGEITERATION FUNCTION PULLS FROM
const imageArr = [
    "image/armored-cannon-beetle.png", "image/emperor-bulblax.png", "image/red-1-pellet.png", "image/red-5-pellet.png", "image/small-bulborb.png", "image/yellow-wollywog.png", "image/shipparts/secret-safe.png", "image/shipparts/chronos-reactor.png", "image/shipparts/ionium-jet.png", "image/shipparts/main-engine.png", "image/shipparts/nova-blaster.png", "image/shipparts/radiation-canopy.png"
]

//CODE TO RANDOMIZE THE ELEMENTS AND ADD THEM TO EACH DIV
function randomizeDivsOnce(tempImageArr) {
    //HAVE TO USE TEMP ARRAY TO REFRESH FOR EACH ROUND
    divs.forEach(div => {
        while (div.firstChild){
            div.firstChild.remove()
        }
    const random = Math.floor(Math.random() * tempImageArr.length)
    const imgTag = document.createElement(`img`)
    imgTag.setAttribute("src", tempImageArr[random]) 
    //(temp)ImageArr[random] ends up returning a string because the array item is a string so it's a valid arg for setAttribute
    imgTag.setAttribute("class", "div-image") 
    div.appendChild(imgTag)
    //CODE TO REMOVE AN ELEMENT SO IT'S NOT REPEATED ON A ROUND(DAY) IN ANOTHER DIV
    tempImageArr.splice(random, 1)  
})
}
let tempImageArr = [...imageArr]
randomizeDivsOnce(tempImageArr)

//RANDOMIZE ELEMENTAL DIV COLORS
function randomBgColor(){
    const randomColor = Math.floor(Math.random() * (4-1) + 1)
    if (randomColor === 1){
        elemental.classList.add("red-bg")
        elemental.classList.remove("yellow-bg")
        elemental.classList.remove("blue-bg")
    } else if (randomColor === 2){
        elemental.classList.add("yellow-bg")
        elemental.classList.remove("blue-bg")
        elemental.classList.remove("red-bg")
    } else if (randomColor === 3){
        elemental.classList.add("blue-bg")
        elemental.classList.remove("red-bg")
        elemental.classList.remove("yellow-bg")
    }
}

//MAKING ELEMENTAL UNCLICKABLE UNTIL IT'S CLICKED ON AFTER CHECKING FOR PIKMIN TYPE
function elementalUnclickable(){
    elemental.addEventListener("click", (e) => {
        elemental.setAttribute("pointer-events", "none")
    })
    
}

function elementalClickable() {
    if (pikmin.red >= 1 || pikmin.yellow >= 1 || pikmin.blue >= 1) {
        elemental.style.pointerEvents = 'auto';
    } else {
        elemental.style.pointerEvents = 'none';
    }
}


elementalUnclickable()
//RANDOMIZED IMAGES IN THE DIV EVENT LISTENER + REMOVING CLICKS ON A DIV UNTIL NEXT ROUND
function handleDivClick(e) {
    console.log(`Blue Pikmin: ${pikmin.blue}`)
    if (e.target.tagName === "IMG"){
        let imageSrc = e.target.getAttribute('src');
        console.log("imageSrc:", imageSrc);
        let imageKey = imageSrc.replace(window.location.origin + '/', ''); 
        let imageDetails = imageRequirements[imageKey]
        console.log("imageKey:", imageKey);
        let tempImageArr = [...imageArr]
        randomizeDivsOnce(tempImageArr)

        //ACTIVATES THE ADDPIKMIN PROPERTY OF THE IMAGES FROM THE OBJECT LIST
        // if (imageDetails.addPikmin){
        //     imageDetails.addPikmin()
        //     pikmin.render()
        // }

        //REMOVES THE EVENTLISTENER AND OVERLAYS AN IMAGE SAYING THE DIV IS UNCLICKABLE
        e.currentTarget.removeEventListener("click", handleDivClick)
        e.currentTarget.classList.add("unclickable")
        e.currentTarget.classList.add("unclickable-no")

    //CHECK IMAGE, INCREMENT COUNTERS ON CLICK FOR FAILSTATE OR WINSTATE
        let isAMonster = imageDetails.isMonster
        let isAShipPart = imageDetails.isShipPart
        let addPikmin = imageDetails.addPikmin
        let removePikmin = imageDetails.removePikmin
        if (isAMonster && removePikmin){
            monsterCounter++
            console.log(monsterCounter)
            removePikmin()
            pikmin.render()
        } else if (isAShipPart){
            shipPartCounter++
            console.log(shipPartCounter)
        } else if (addPikmin){
            addPikmin()
            pikmin.render()
        }
        console.log("imageDetails:", imageDetails);

        // INCREMENT CLICK COUNTER AND CHECK FOR NEXT DAY
        clickCounter++;
        if (clickCounter === 2) {
            clickCounter = 0;
            nextDayOverlayShow();
            makeDivsClickable();
        }

        //EVENT LISTENER FOR COMPARING IF USER HAS COLORED PIKMIN OR NOT

        elemental.addEventListener("click", (e) => {
            console.log(`Blue Pikmin: ${pikmin.blue}`)
            let currentClass = "";
            if (elemental.classList.contains("red-bg")) currentClass = "red";
            if (elemental.classList.contains("yellow-bg")) currentClass = "yellow";
            if (elemental.classList.contains("blue-bg")) currentClass = "blue";
            
            if (pikmin[currentClass] >= 1) {
                if (isAMonster && removePikmin) {
                    monsterCounter++;
                    console.log(monsterCounter);
                    removePikmin();
                    pikmin.render();
                } else if (isAShipPart) {
                    shipPartCounter++;
                    console.log(shipPartCounter);
                } else if (addPikmin) {
                    addPikmin();
                    pikmin.render();
                }
            } else {
                return;
            }
        });
        

    //     //REMOVING CLICK LISTENER AND ADDING UNCLICKABLE CLASS
    // e.currentTarget.removeEventListener("click", handleDivClick);
    // e.currentTarget.classList.add("unclickable");

    }
}
//RUNNING randomBgColor ON FIRST LOAD, AFTER THIS THE ROUND BUTTON HANDLER HANDLES THIS 
randomBgColor()

//ADDING THE EVENTLISTENER BACK TO THE DIVS FOR THE NEXT ROUND
function makeDivsClickable(){
divs.forEach(div => {
    div.addEventListener("click", handleDivClick)
    div.classList.remove("unclickable")
    div.classList.remove("unclickable-no")
    elementalClickable()
})
}
makeDivsClickable()
