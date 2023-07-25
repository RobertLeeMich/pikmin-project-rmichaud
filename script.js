//Beginning of the Pikmin-Project
const body = document.querySelector("body")

//BACKGROUND STYLING
body.style.backgroundImage = "url(image/thefinaltrialmap.png)"
body.style.backgroundSize = "100vw"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundColor = "black"

//SELECTORS
const fire = document.querySelector(".fire")
const electric = document.querySelector(".electric")
const olimarsShip = document.querySelector(".i3")
const water = document.querySelector(".water")
const div4 = document.querySelector(".i5")
const div6 = document.querySelector(".i6")
const div7 = document.querySelector(".i7")
const div8 = document.querySelector(".i8")
const outerModal = document.querySelector(".i10")
const disableButton = document.querySelector("#disabling-div")
const allElements = document.querySelectorAll("fire", "electric", "water")

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
let redPikmin = document.getElementById("red-pikmin")
let yellowPikmin = document.getElementById("yellow-pikmin")
let bluePikmin = document.getElementById("blue-pikmin")

const pikmin =  {
    redPikmin: {
        type: "fire",
        numberOf: 1
    },
    yellowPikmin: {
        type: "electric",
        numberOf: 0
    },
    bluePikmin: {
        type: "water",
        numberOf: 0
    },
    get totalPikmin() {
        return this.redPikmin.numberOf + this.yellowPikmin.numberOf + this.bluePikmin.numberOf
    },
    element: document.querySelector("#pikmin-numbers"),
    render : function() {
        this.element.innerHTML = 
        `<h3> Pikmin Totals</h3> <span id ="red-pikmin">${this.redPikmin.numberOf}</span> <span id ="yellow-pikmin">${this.yellowPikmin.numberOf}</span> <span id ="blue-pikmin">${this.bluePikmin.numberOf}</span> <span>${this.totalPikmin}</span>`
    }
}
pikmin.render()

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
        //insert video & video button & play again button
    } else {
        outerModal.style.display = "block"
        img.src = "image/ssdolphinbroken.png"
        img.style.width = "8em"
        img.style.height = "12.1em"
        modal.appendChild(img)
        disableButton.style.display = "block"
        damagedShip.style.display = "block"
        repairedShip.style.display = "none"
        modal.insertAdjacentHTML("afterbegin", "<p class = \"olimar-ship-text\" >Olimar's Ship. He needs the Pikmins' help to repair it! Make sure to help him out by clicking the buttons around the map!</p>")
    }
})

//RANDOMIZED DIV IMAGES
const imageArr = [
    "image/armored-cannon-beetle.png", "image/blue-1-pellet.png", "image/blue-5-pellet.png", "image/emperor-bulblax.png","image/red-5-pellet.png", "image/red-1-pellet.png", "image/small-bulborb.png", "image/yellow-1-pellet.png", "image/yellow-5-pellet.png", "image/yellow-wollywog.png"
] //LENGTH 10

//CODE TO RANDOMIZE THE ELEMENTS AND ADD THEM TO EACH DIV
const divs = document.querySelectorAll(".imgdiv").forEach(div => {
    const random = Math.floor(Math.random() * imageArr.length)
    const imgTag = document.createElement(`img`)
    imgTag.setAttribute("src", imageArr[random]) 
    //imageArr[random] ends up returning a string because the array item is a string so it's a valid arg for setAttribute
    imgTag.setAttribute("class", "div-image") 
    div.appendChild(imgTag)
    //CODE TO REMOVE AN ELEMENT SO IT'S NOT REPEATED ON A ROUND(DAY) IN ANOTHER DIV
    imageArr.splice(random, 1)
})

//PICTURE REQUIREMENT HANDLING CONDITIONS
const imageRequirements = {
    "image/armored-cannon-beetle.png": {
        pikmin: 10
    },
    "image/blue-1-pellet.png": {
        pikmin: 1
    },
    "image/blue-5-pellet.png": {
        pikmin: 5
    },
    "image/emperor-bulblax.png": {
        pikmin: 10
    },
    "image/red-1-pellet.png": {
        pikmin: 1
    },
    "image/red-5-pellet.png": {
        pikmin: 5
    },
    "image/small-bulborb.png": {
        pikmin: 4
    },
    "image/yellow-1-pellet.png": {
        pikmin: 1
    },
    "image/yellow-5-pellet.png": {
        pikmin: 5
    },
    "image/yellow-wollywog.png": {
        pikmin: 4
    },
}

//ELEMENTAL DIV HANDLING
allElements.forEach(element => {
    element.addEventListener("click", () => {
        if (element === "fire"){
            divs.forEach(div => {
                let img = div.querySelector('img')
                if ('img'){
                    const src = img.getAttribute("src")
                    const requirements = imageRequirements[src]
                    if (requirements){
                        if (pikmin.yellowPikmin >= requirements.pikmin){
                            //modal code here
                        }
                    }
                }
            })
        } else if (element === "electric"){
            divs.forEach(div => {
                let img = div.querySelector('img')
                if ('img'){
                    const src = img.getAttribute("src")
                    const requirements = imageRequirements[src]
                    if (requirements){
                        if (pikmin.yellowPikmin >= requirements.pikmin){
                            //modal code here
                        }
                    }
                }
            })
        } else if (element === "water"){
            divs.forEach(div => {
                let img = div.querySelector('img')
                if ('img'){
                    const src = img.getAttribute("src")
                    const requirements = imageRequirements[src]
                    if (requirements){
                        if (pikmin.yellowPikmin >= requirements.pikmin){
                            //modal code here
                        }
                    }
                }
            })
        }
    })
})

//need a connection between the class name and the specific pikmin
//if element in div === 1 of 3 elements, player must have at least x type of that element of pikmin (I want x to be dependent on the specific image that's loaded)


// divs.addEventListener("load", () => { //hopefully on image load, idk

// })
// //ELEMENTAL DIV LOGIC
// allElements.forEach(ele  => {
//     if (ele)
// })

//reference div with image in it for modal
//write logic for elemental divs
//WRITE DAY LOGIC

//elemental logic:
//we want to check if the player has an adequate amount of pikmin for each specific div
//bind specific strings to pikmin number //pikmin.redPikmin
//need to compare against the image property AND the amount of elemental pik












