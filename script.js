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
// const pikminTotalBox = document.getElementById("pikmin-total")
const nextDayOverlay = document.getElementById("next-day-overlay")
const nextDayButton = document.getElementById("next-day-button")
const dayTimer = document.getElementById("day-timer")
// let contentDiv = document.querySelector(".i5")

// //SHOWING DIV IN MIDDLE OF SCREEN FOR INFORMATION ABOUT ITEM CLICKED (NULLIFIED FOR NOW)
// function contentDivShowHide() {
//     if (contentDiv.style.display === "none"){
//         contentDiv.style.display === "block"
//     } else {
//         contentDiv.style.display === "none"
//     }
// }

//DISABLE ELEMENTS DIV/NEXT DAY BUTTON
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

//SEE IF USER CLICKED TWICE ON THE DIV
let clickCounter = 0
itemSelect.addEventListener("click", (e) => {
    clickCounter++
    if (clickCounter === 2){
        nextDayOverlayShow()
        clickCounter = 0
    }
})

//ROUND SETUP
let dayCounter = 0
let shipPartCounter = 0
let monsterCounter = 0
dayTimer.innerHTML = `<p>You have taken ${dayCounter}/6 days!</p>`
dayTimer.class = "save-timer"

nextDayButton.addEventListener("click", (e) => {
    dayCounter++
    updateDayTimer()
    nextDayOverlayHide()
    
    
})

//divrefresh/overlayremoval code


function updateDayTimer() {
    if (dayCounter === 6 && shipPartCounter === 6){
        dayTimer.innerHTML = `<p> Click Olimar's ship to leave the planet! </p>`;
    } else {
        dayTimer.innerHTML = `<p>You have taken ${dayCounter}/6 days!</p>`;
    }
}

function saveDayTimer() {
    localStorage.setItem("dayCounter", dayTimer)
}

// PIKMIN COUNTER/PIKMIN MANIPULATION
const pikmin =  {
    numberOf: 1,
    element: document.querySelector("pikmin-total"),
    render : () => {
        document.querySelector("#pikmin-total").innerHTML = `Total Pikmin: ${pikmin.numberOf}`
    }
}
pikmin.render()

//PLAY AGAIN BUTTON
resetButton.addEventListener("click", (e) => {
    function refreshPage(){
        window.location.reload();
    } 
    refreshPage()
})

//PLAYER SELECTS ITEM, ITEM GETS ADDED TO ARRAY, IF PLAYER HAS 3 MONSTERS THEY LOSE, IF PLAYER HAS 3 SHIP PARTS, THEY WIN
const imageArr = [
    "image/armored-cannon-beetle.png", "image/emperor-bulblax.png", "image/red-1-pellet.png", "image/red-5-pellet.png", "image/small-bulborb.png", "image/yellow-wollywog.png", "image/shipparts/secret-safe.png", "image/shipparts/chronos-reactor.png", "image/shipparts/ionium-jet.png", "image/shipparts/main-engine.png", "image/shipparts/nova-blaster.png", "image/shipparts/radiation-canopy.png"
]

//PICTURE REQUIREMENT HANDLING CONDITIONS
let imageRequirements = {
    "image/armored-cannon-beetle.png": {
        isMonster: true,
        shipPart: false,
        addPikmin: false

    },
    "image/emperor-bulblax.png": {
        isMonster: true, 
        shipPart: false,
        addPikmin: false 

    },
    "image/small-bulborb.png": {
        isMonster: true, 
        shipPart: false,
        addPikmin: false 

    },
    "image/yellow-wollywog.png": {
        isMonster: true,
        shipPart: false,
        addPikmin: false 

    },
    "image/shipparts/secret-safe.png": {
        isMonster: false,
        isShipPart: true,
        addPikmin: false
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
        shipPart: false,
        addPikmin: function () {
            return pikmin.numberOf += 5
        }
    },
    "image/red-1-pellet.png":{
        isMonster: false,
        shipPart: false,
        addPikmin: function () {
            return pikmin.numberOf += 1
        }
    },
}
//ADDS IMAGE TO DIV FOR USER TO CLICK
function imageIteration(){
    let tempImageArr = [...imageArr]
    const random = Math.floor(Math.random() * tempImageArr.length)
    const imgTag = document.createElement(`img`)
    imgTag.setAttribute("src", tempImageArr[random]) 
    //(temp)ImageArr[random]  ENDS UP RETURNING A STRING BECAUSE THE ARRAY ITEM IS A STRING, SO IT'S A VALUD ARG FOR setAttribute()
    imgTag.setAttribute("class", "div-image") 
    itemSelect.appendChild(imgTag)
    //CODE TO REMOVE AN ELEMENT SO IT'S NOT REPEATED ON A ROUND(DAY) IN ANOTHER DIV
    tempImageArr.splice(random, 1)

}
imageIteration()



//RANDOMIZED IMAGES IN THE DIV
let randomizedImage = document.querySelector(".div-image")
let userWinOrLoseArr = []

randomizedImage.addEventListener("click", (e) => {
    let imageSrc = e.target.getAttribute('src');
    let imageKey = imageSrc.replace(window.location.origin + '/', ''); 
    let imageDetails = imageRequirements[imageKey]
    console.log(e) //div-image
    userWinOrLoseArr.push(imageDetails)
    console.log(userWinOrLoseArr) //HAS THE OBJECTS IN IT

    //CHECK IMAGE, INCREMENT COUNTERS ON CLICK
    let isMonster = imageDetails.isMonster
    let isShipPart = imageDetails.isShipPart
    let addPikmin = imageDetails.addPikmin
    if (isMonster === true){
        monsterCounter++
        console.log(monsterCounter) //INCREMENTS MONSTERCOUNTER
    } else if (isShipPart === true){
        shipPartCounter++
        console.log(shipPartCounter)
    } else if (addPikmin){
        addPikmin()
        pikmin.render()
        console.log(pikmin.numberOf) //INCREMENTS PIKMIN TOTAL ON SCREEN
    }
})




