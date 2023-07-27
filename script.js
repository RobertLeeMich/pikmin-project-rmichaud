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
const pikminTotal = document.getElementById("pikmin-total")
const nextDayOverlay = document.getElementById("next-day-overlay")
const nextDayButton = document.getElementById("next-day-button")
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
function nextDayOverlayShowHide() {
    if (nextDayOverlay.style.display = "none"){
        nextDayOverlay.style.display = "block"
    }
}

//ROUND SETUP
let dayCounter = 0
let shipPartCounter = 0

nextDayButton.addEventListener("click", (e) => {
    daycounter++
})



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
    "image/armored-cannon-beetle.png", "image/emperor-bulblax.png", "image/small-bulborb.png", "image/yellow-wollywog.png", "image/shipparts/secret-safe.png", "image/shipparts/chronos-reactor.png", "image/shipparts/ionium-jet.png", "image/shipparts/main-engine.png", "image/shipparts/nova-blaster.png", "image/shipparts/radiation-canopy.png"
]

//PICTURE REQUIREMENT HANDLING CONDITIONS
const imageRequirements = {
    "image/armored-cannon-beetle.png": {
        isMonster: true, //DEFINE MONSTER BY THIS PROPERTY
        shipPart: false 

    },
    "image/emperor-bulblax.png": {
        isMonster: true, //DEFINE MONSTER BY THIS PROPERTY
        shipPart: false 

    },
    "image/small-bulborb.png": {
        isMonster: true, //DEFINE MONSTER BY THIS PROPERTY
        shipPart: false 

    },
    "image/yellow-wollywog.png": {
        isMonster: true, //DEFINE MONSTER BY THIS PROPERTY
        shipPart: false 

    },
    "image/shipparts/secret-safe.png": {
        isMonster: false,
        shipPart: true //DEFINE SHIP PART BY THIS PROPERTY
    }, 
    "image/shipparts/chronos-reactor.png":{
        isMonster: false,
        shipPart: true
    },
    "image/shipparts/ionium-jet.png":{
        isMonster: false,
        shipPart: true
    },
    "image/shipparts/main-engine.png":{
        isMonster: false,
        shipPart: true
    },
    "image/shipparts/nova-blaster.png":{
        isMonster: false,
        shipPart: true
    },
    "image/shipparts/radiation-canopy.png":{
        isMonster: false,
        shipPart: true
    }
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

//SEE IF USER CLICKED TWICE ON THE DIV
let clickCounter = 0
itemSelect.addEventListener("click", (e) => {
    clickCounter++
    if (clickCounter === 2){
        nextDayOverlayShowHide()
    }
})


//RANDOMIZED IMAGES IN THE DIV
let randomizedImage = document.querySelector(".div-image")
let userWinOrLoseArr = []

randomizedImage.addEventListener("click", (e) => {
    let imageSrc = e.target.getAttribute('src');
    let imageKey = imageSrc.replace(window.location.origin + '/', ''); 
    let imageDetails = imageRequirements[imageKey]
    console.log(e) //div-image
    userWinOrLoseArr.push(imageDetails)
    console.log(userWinOrLoseArr) //has the objects in it
})


