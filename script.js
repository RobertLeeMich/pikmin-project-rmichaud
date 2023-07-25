//Beginning of the Pikmin-Project
const body = document.querySelector("body")

//RANDOMIZED IMAGES ARRAY
const imageArr = ["image/armored-cannon-beetle.jpeg", "image/blue-1-pellet.png", "image/blue-5-pellet.png", "image/emperor-bulblax.jpeg","image/red-5-pellet.png", "image/red-1-pellet.png", "image/small-bulborb.png", "image/yellow-1-pellet.png", "image/yellow-5-pellet.png", "image/yellow-wollywog.png"]

//BACKGROUND STYLING
body.style.backgroundImage = "url(image/thefinaltrialmap.png)"
body.style.backgroundSize = "100vw"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundColor = "black"

//SELECTORS
const fireDiv = document.querySelector(".i1")
const waterDiv = document.querySelector(".i2")
const olimarsShip = document.querySelector(".i3")
const electricDiv = document.querySelector(".i4")
const div4 = document.querySelector(".i5")
const div6 = document.querySelector(".i6")
const div7 = document.querySelector(".i7")
const div8 = document.querySelector(".i8")
const outerModal = document.querySelector(".i10")
const disableButton = document.querySelector("#disabling-div")

//SHIP MANIPULATION
const damagedShip = document.getElementById("damaged-ship")
const repairedShip = document.getElementById("repaired-ship")
repairedShip.style.display = "none" //Flip this later when ship is repaired

//MODAL MANIPULATION
const modal = document.getElementById("modal")
outerModal.style.display = "none" //setting the modal to not display anything before a click
let selectedPicItem = document.getElementById("selected-picture-item")

document.addEventListener("click", (e)=>{
    if (outerModal.style.display === "block"){
        outerModal.style.display = "none"
        disableButton.style.display = "none"
        modal.innerHTML = ""
    }
    })

//PIKMIN COUNTER/PIKMIN MANIPULATION
const outerPikminNumbers = document.querySelector(".i9")
const innerPikminNumbers = document.querySelector("#pikmin-numbers")
let redPikmin = document.querySelector("#red-pikmin")
let yellowPikmin = document.querySelector("#yellow-pikmin")
let bluePikmin = document.querySelector("#blue-pikmin")
let totalPikmin = 0;
totalPikmin += redPikmin + yellowPikmin + bluePikmin 

const TotalNumPikmin =  {
    redPikmin: 1,
    yellowPikmin: 0,
    bluePikmin: 0,
    element: document.querySelector("#pikmin-numbers"),
    render : () => {
        TotalNumPikmin.element.innerHTML = 
        `<h3> Total Number of Pikmin </h3> ${redPikmin} ${yellowPikmin} ${bluePikmin}`
    }
}

// function test() {
//     redPikmin++
//     yellowPikmin++
//     bluePikmin++
// }

// function updatePikmin() {
    
//     innerPikminNumbers.appendChild(TotalNumPikmin)
//     TotalNumPikmin.render()
//     test()
// }
// updatePikmin()

//COUNTER FOR DAYS AND OTHER CONDITIONALS
let dayCounter = 0

//INFORMATION MODAL/EVENTLISTENER ABOUT OLIMAR'S SHIP
olimarsShip.addEventListener("click", (e) => {
    e.stopPropagation()
    outerModal.style.display = "block"
    let img = new Image()
    img.src = "image/ssdolphinrepaired.png"
    img.style.width = "8em"
    img.style.height = "12.2em"

    //OLIMARSSHIP REPAIRED/FIXED
    if (dayCounter === 6) {
        modal.appendChild(img)
        modal.insertAdjacentHTML("beforeend", "<p class = \"olimar-ship-text\" >Congratulations! You've helped the Pikmin save Olimar and get him off of the planet and back home to his wife and kids! Press the button below to watch him blast off!</p>")
        disableButton.style.display = "block"
        damagedShip.style.display = "none"
        repairedShip.style.display = "block"
        //insert video & video button
    } else {
        outerModal.style.display = "block"
        img.src = "image/ssdolphinbroken.png"
        img.style.width = "8em"
        img.style.height = "12.1em"
        modal.appendChild(img)
        disableButton.style.display = "block"
        damagedShip.style.display = "block"
        repairedShip.style.display = "none"
        modal.insertAdjacentHTML("afterbegin", "<p class = \"olimar-ship-text\" >Olimar's Ship. He needs the Pikmin's help to repair it! Make sure to help him out by clicking the buttons around the map!</p>")
    }
})








