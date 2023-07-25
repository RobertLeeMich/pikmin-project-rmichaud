const body = document.querySelector("body")
//Beginning of the Pikmin-Project
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
const pikminNumbers = document.querySelector(".i9")
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

//RANDOMIZING IMAGES SET-UP
const imageArr = ["image/armored-cannon-beetle.jpeg", "image/blue-1-pellet.png", "image/blue-5-pellet.png", "image/emperor-bulblax.jpeg","image/red-5-pellet.png", "image/red-1-pellet.png", "image/small-bulborb.png", "image/yellow-1-pellet.png", "image/yellow-5-pellet.png", "image/yellow-wollywog.png"]

//COUNTER FOR DAYS AND OTHER CONDITIONALS
let dayCounter = 6
//INFORMATION MODAL/EVENTLISTENER ABOUT OLIMAR'S SHIP
damagedShip.addEventListener("click", () => {
    outerModal.style.display = "block"
    let img = new Image()
    img.src = "image/ssdolphinrepaired.png"
    img.style.width = "8em"
    img.style.height = "15em"
    if (dayCounter === 6) {
        modal.appendChild(img)
        modal.insertAdjacentHTML("beforeend", "<p>Congratulations! You've helped the Pikmin save Olimar and get him off of the planet and back home to his wife and kids! Press the button below to watch him blast off!</p>")
        disableButton.style.display = "block"
        //insert video & video button
    } else {
        img.src = "image/ssdolphinbroken.png"
        img.style.width = "8em"
        img.style.height = "15em"
        modal.appendChild(img)
        modal.insertAdjacentHTML("afterbegin", "<p>Olimar's Ship. He needs the Pikmin's help to repair it! Make sure to help him out by clicking the buttons around the map!</p>")
    }
})

//CLOSE MODAL ON CLICK OUTSIDE OF MODAL EVENTLISTENER
document.addEventListener("click", (e)=> {

})

//if counter = 6 {
    //img.src = the repaired ship
    //else
    //img.src = the broken ship
//}





