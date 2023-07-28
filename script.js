let body = document.querySelector("body")

//BACKGROUND STYLING
body.style.backgroundImage = "url(image/thefinaltrialmap.png)"
body.style.backgroundSize = "100vw"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundColor = "black"

let itemSelect = document.querySelector(".i1")
const olimarShip = document.querySelector(".i2")
const resetButton = document.querySelector(".i3")
const olimarBox = document.querySelector(".i4")
const nextDayOverlay = document.getElementById("next-day-overlay")
const nextDayButton = document.getElementById("next-day-button")
const dayTimer = document.getElementById("day-timer")
const playAgainButton = document.getElementById("play-again-button")
let highScoreDiv = document.getElementById("high-scores")
const highScoreShowButton = document.getElementById("high-scores-show-button")
const highScoreCloseButton = document.getElementById("high-scores-close-button")
// let contentDiv = document.querySelector(".i5")

// //SHOWING DIV IN MIDDLE OF SCREEN FOR INFORMATION ABOUT ITEM CLICKED (NULLIFIED FOR NOW)
// function contentDivShowHide() {
//     if (contentDiv.style.display === "none"){
//         contentDiv.style.display === "block"
//     } else {
//         contentDiv.style.display === "none"
//     }
// }

// PIKMIN COUNTER/PIKMIN MANIPULATION
let pikmin =  {
    numberOf: 1,
    element: document.querySelector("pikmin-total"),
    render : () => {
        document.querySelector("#pikmin-total").innerHTML = `Total Pikmin: ${pikmin.numberOf}`
    }
}
pikmin.render()

//HIGH SCORES
function openHighScores() {
    highScoreDiv.style.display = "flex"
    highScoreCloseButton.style.display = "block"
}
function closeHighScores(){
    highScoreDiv.style.display = "none"
    highScoreCloseButton.style.display = "none"
}
highScoreShowButton.addEventListener("click", (e) => {
    loadHighScore()
    openHighScores()
})
highScoreCloseButton.addEventListener("click", (e) => {
    closeHighScores()
})

//figure out how to insert elements into the high score div and save the elements

//ASKED ON STACKOVERFLOW FOR THIS
 // Function to save high score
// Function to save high score
function saveHighScore() {
    let date = new Date();
    let highScoreDiv = document.getElementById("high-scores"); // Assuming you have a div with the id "highScoreDiv"
    let highScoreNumbers = `Your high score is ${pikmin.numberOf} on ${date}!`;
  
    let highScoreDivNew = document.createElement("div");
    highScoreDivNew.textContent = highScoreNumbers; // Use textContent to set the text of the new div
  
    highScoreDiv.appendChild(highScoreDivNew);
    localStorage.setItem("high-score-content", highScoreNumbers); // Store the high score directly as a string
  }
  
  // Function to load and display high score from localStorage
  function loadHighScore() {
    let highScoreDiv = document.getElementById("high-scores");
    let highScoreNumbers = localStorage.getItem("high-score-content"); // Retrieve the high score as a string
    if (highScoreNumbers) {
      let highScoreDivNew = document.createElement("div");
      highScoreDivNew.textContent = highScoreNumbers; // Use textContent to set the text of the new div
      highScoreDiv.appendChild(highScoreDivNew);
    }
  }

//SEE IF USER CLICKED TWICE ON THE DIV
let clickCounter = 0
itemSelect.addEventListener("click", (e) => {
    clickCounter++
    if (clickCounter === 2){
        clickCounter = 0
        nextDayOverlayShow()
    }
})

//ROUND SETUP FUNCTIONALITY
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

nextDayButton.addEventListener("click", (e) => {
    dayCounter++
    updateDayTimer() //runs on click of next day button, checks for win/lose conditions
    nextDayOverlayHide()
    if (dayCounter === 6 || monsterCounter >= 3){ //the button was skipping 3, so >=3 makes the condition run
        nextDayButton.style.display = "none"
        nextDayOverlayShow()
        showPlayAgain()
    } else if (dayCounter <= 6 && shipPartCounter  >= 3){
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
    } else if ((dayCounter >= 6 && monsterCounter <=3) || shipPartCounter >= 3){
        nextDayButton.style.display = "none"
        dayTimer.innerHTML = `<p> You win! Your high score: ${pikmin.numberOf} </p>`
        saveHighScore()
        showPlayAgain()
        } else {
        dayTimer.innerHTML = `<p>You have taken ${dayCounter}/6 days!</p>`
        hidePlayAgain()
    }
}
//PLAYER SELECTS ITEM, ITEM GETS ADDED TO ARRAY, IF PLAYER HAS 3 MONSTERS THEY LOSE, IF PLAYER HAS 3 SHIP PARTS, THEY WIN
const imageArr = [
    "image/armored-cannon-beetle.png", "image/emperor-bulblax.png", "image/red-1-pellet.png", "image/red-5-pellet.png", "image/small-bulborb.png", "image/yellow-wollywog.png", "image/shipparts/secret-safe.png", "image/shipparts/chronos-reactor.png", "image/shipparts/ionium-jet.png", "image/shipparts/main-engine.png", "image/shipparts/nova-blaster.png", "image/shipparts/radiation-canopy.png"
]

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
            return pikmin.numberOf += 5
        }
    },
    "image/red-1-pellet.png":{
        isMonster: false,
        isShipPart: false,
        addPikmin: function () {
            return pikmin.numberOf += 1
        }
    },
}
//ADDS IMAGE TO DIV FOR USER TO CLICK
let tempImageArr = [...imageArr]
if (tempImageArr)
function imageIteration(){
    const random = Math.floor(Math.random() * tempImageArr.length)
    const imgTag = document.createElement(`img`)
    imgTag.setAttribute("src", tempImageArr[random]) 
    //(temp)ImageArr[random]  ENDS UP RETURNING A STRING BECAUSE THE ARRAY ITEM IS A STRING, SO IT'S A VALUD ARG FOR setAttribute()
    imgTag.setAttribute("class", "div-image") 

    //REMOVE OLD IMAGE
    let oImage = document.querySelector(".div-image")
    if (oImage){
        oImage.remove()
    }

    itemSelect.appendChild(imgTag)
    //CODE TO REMOVE AN ELEMENT SO IT'S NOT REPEATED ON A ROUND(DAY) IN ANOTHER DIV
    tempImageArr.splice(random, 1)

}
imageIteration()

//HAVE TO ADD EVENTLISTENER BACK TO THE NEW IMAGE AFTER THE IMAGE CYCLES OUT

//RANDOMIZED IMAGES IN THE DIV
itemSelect.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG"){
        let imageSrc = e.target.getAttribute('src');
        let imageKey = imageSrc.replace(window.location.origin + '/', ''); 
        let imageDetails = imageRequirements[imageKey]
        console.log(e) //div-image

    //CHECK IMAGE, INCREMENT COUNTERS ON CLICK FOR FAILSTATE OR 
        let isAMonster = imageDetails.isMonster
        let isAShipPart = imageDetails.isShipPart
        let addPikmin = imageDetails.addPikmin
        let removePikmin = imageDetails.removePikmin
        if (isAMonster && removePikmin){
            monsterCounter++
            removePikmin()
            pikmin.render()
        } else if (isAShipPart){
            shipPartCounter++
            console.log(shipPartCounter)
        } else if (addPikmin){
            addPikmin()
            pikmin.render()
        }
    imageIteration()
    }



})