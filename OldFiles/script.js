// //Beginning of the Pikmin-Project
let body = document.querySelector("body")

//BACKGROUND STYLING
body.style.backgroundImage = "url(image/thefinaltrialmap.png)"
body.style.backgroundSize = "100vw"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundColor = "black"

//SELECTORS
let divs = document.querySelectorAll(".imgdiv")
const imgDivs = document.querySelectorAll(".imgdiv")
const damagedShip = document.getElementById("damaged-ship")
const repairedShip = document.getElementById("repaired-ship")
const innerPikminNumbers = document.getElementById("#pikmin-numbers")
const olimarsShip = document.querySelector(".i3")
const div5 = document.querySelector(".i5")
const div6 = document.querySelector(".i6")
const div7 = document.querySelector(".i7")
const div8 = document.querySelector(".i8")
const outerPikminNumbers = document.querySelector(".i9")
const modal = document.querySelector(".i10")
const container = document.querySelector(".container")
const nextDayDiv = document.querySelector("#next-day-div")
const nextDayButton = document.querySelector("#next-day")

//SHIP MANIPULATION
repairedShip.style.display = "none";


//MODAL MANIPULATION
modal.style.display = "none"

// PIKMIN COUNTER/PIKMIN MANIPULATION
const pikmin =  {
    redPikmin: {
        numberOf: 20
    },
    element: document.querySelector("#pikmin-numbers"),
    render : function() {
        this.element.innerHTML = 
        `<h3> Pikmin Total</h3> <span id ="red-pikmin">${this.redPikmin.numberOf}`
    }
}
pikmin.render()

//COUNTER FOR DAYS AND MOVING TO THE NEXT DAY
let dayCounter = 0
let shipPartCounter = 6
let dayTimer = document.getElementById("day-timer")
dayTimer.innerHTML = `<p>You have taken ${dayCounter}/6 days!</p>`
dayTimer.class = "save-timer"

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

//DIV EVENTLISTENER FOR LIMITING CLICKS PER ROUND
let divClicks = 0

//BUTTON THAT ADDS TO THE DAY TOTAL AND RANDOMIZES DIVS USING FUNCTION
nextDayButton.addEventListener("click", (e) => {
    divClicks = 0
    randomizeDivsOnce()
    dayCounter += 1
    updateDayTimer()
    console.log(dayCounter)
    nextDayDiv.style.display = "none"
})

//MODAL SETUP FUNCTION
function openModal(shipImageSrc, message) {
    let img = new Image()
    img.src = shipImageSrc
    img.id = "modal-ship-image"
    modal.innerHTML = ""
    modal.appendChild(img)
    modal.insertAdjacentHTML("beforeend", `<p class="olimar-ship-text">${message}</p>`)
    modal.style.display = "block"
}

// INFORMATION MODAL/EVENT LISTENER ABOUT OLIMAR'S SHIP
olimarsShip.addEventListener("click", (e) => {
    if (dayCounter <= 6 && shipPartCounter === 6) {
        repairedShip.style.display = "block";
        damagedShip.style.display = "none";
        openModal("image/ssdolphinrepaired.png", "Congratulations! You've helped the Pikmin save Olimar and get him off of the planet and back home to his wife and kids! You win!");
        console.log(openModal)
    } else if (dayCounter <= 6 && shipPartCounter < 6) {
        openModal("image/ssdolphinbroken.png", "Olimar's Ship. He needs the Pikmins' help to repair it! Make sure to help him out by clicking the buttons around the map!");
        console.log(openModal)
    }
});

//RANDOMIZED DIV IMAGES
const imageArr = [
    "image/armored-cannon-beetle.png", "image/emperor-bulblax.png","image/red-5-pellet.png", "image/red-1-pellet.png", "image/small-bulborb.png", "image/yellow-wollywog.png", "image/shipparts/secret-safe.png", "image/shipparts/chronos-reactor.png", "image/shipparts/ionium-jet.png", "image/shipparts/main-engine.png", "image/shipparts/nova-blaster.png", "image/shipparts/radiation-canopy.png"
] //LENGTH 10

//CODE TO RANDOMIZE THE ELEMENTS AND ADD THEM TO EACH DIV
function randomizeDivsOnce() {
    //HAVE TO USE TEMP ARRAY TO REFRESH FOR EACH ROUND
    let tempImageArr = [...imageArr]
    divs.forEach(div => {
        while (div.firstChild){
            div.firstChild.remove()
        }
    const random = Math.floor(Math.random() * tempImageArr.length)
    const imgTag = document.createElement(`img`)
    imgTag.setAttribute("src", tempImageArr[random]) 
    //(temp)ImageArr[random]  ENDS UP RETURNING A STRING BECAUSE THE ARRAY ITEM IS A STRING, SO IT'S A VALUD ARG FOR setAttribute()
    imgTag.setAttribute("class", "div-image") 
    div.appendChild(imgTag)
    //CODE TO REMOVE AN ELEMENT SO IT'S NOT REPEATED ON A ROUND(DAY) IN ANOTHER DIV
    tempImageArr.splice(random, 1)
})
}
randomizeDivsOnce()

//PICTURE REQUIREMENT HANDLING CONDITIONS
const imageRequirements = {
    "image/armored-cannon-beetle.png": {
        pikmin: 10,
        notEnough: `Sorry, you don't have enough Pikmin to fight this!`,
        positiveMessage:`You killed the Armored Cannon Beetle and got 7 Pikmin!`,
        givePikmin: 7,
        killPikmin: true,
        monsterSize: "large"
    },
    "image/emperor-bulblax.png": {
        pikmin: 10,
        notEnough: `Sorry, you don't have enough Pikmin to fight this!`,
        positiveMessage:`You killed the Emperor Bulblax and got 7 Pikmin!`,
        givePikmin: 7,
        killPikmin: true,
        monsterSize: "large"
    },
    "image/red-1-pellet.png": {
        pikmin: 1,
        positiveMessage:`You got 1 Pikmin!`,
        givePikmin: 1,
        killPikmin: false,
        monsterSize: false
    },
    "image/red-5-pellet.png": {
        pikmin: 5,
        notEnough: `Sorry, you don't have enough Pikmin to carry this!`,
        positiveMessage:`You got 5 Pikmin!`,
        givePikmin: 5,
        killPikmin: false,
        monsterSize: false
    },
    "image/small-bulborb.png": {
        pikmin: 4,
        notEnough: `Sorry, you don't have enough Pikmin to fight this!`,
        positiveMessage:`You killed the Small Bulborb and got 7 Pikmin!`,
        givePikmin: 7,
        killPikmin: true,
        monsterSize: "small"
    },
    "image/yellow-wollywog.png": {
        pikmin: 10,
        notEnough: `Sorry, you don't have enough Pikmin to fight this!`,
        positiveMessage:`You killed the Armored Cannon Beetle and got 7 Pikmin!`,
        givePikmin: 7,
        killPikmin: true,
        monsterSize: "small"
    },
    "image/shipparts/secret-safe.png": {
        pikmin: 2,
        notEnough: `Sorry, you don't have enough Pikmin to fight this!`,
        positiveMessage:`You killed the Armored Cannon Beetle and got 7 Pikmin!`,
        givePikmin: 7,
        killPikmin: false,
        monsterSize: false
    }, 
    "image/shipparts/chronos-reactor.png":{
        pikmin: 4,
        notEnough: `Sorry, you don't have enough Pikmin to carry this!`,
        positiveMessage: false,
        givePikmin: 7,
        killPikmin: false,
        monsterSize: false
    },
    "image/shipparts/ionium-jet.png":{
        pikmin: 6,
        notEnough: `Sorry, you don't have enough Pikmin to carry this!`,
        positiveMessage: false,
        givePikmin: 7,
        killPikmin: false,
        monsterSize: false
    },
    "image/shipparts/main-engine.png":{
        pikmin: 8,
        notEnough: `Sorry, you don't have enough Pikmin to carry this!`,
        positiveMessage: false,
        givePikmin: 7,
        killPikmin: false,
        monsterSize: false
    },
    "image/shipparts/nova-blaster.png":{
        pikmin: 10,
        notEnough: `Sorry, you don't have enough Pikmin to carry this!`,
        positiveMessage: false,
        givePikmin: 7,
        killPikmin: false,
        monsterSize: false
    },
    "image/shipparts/radiation-canopy.png":{
        pikmin: 12,
        notEnough: `Sorry, you don't have enough Pikmin to carry this!`,
        positiveMessage: false,
        givePikmin: 7,
        killPikmin: false,
        monsterSize: false
    }
}