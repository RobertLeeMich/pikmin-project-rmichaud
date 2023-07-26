// //Beginning of the Pikmin-Project
let body = document.querySelector("body")

//BACKGROUND STYLING
body.style.backgroundImage = "url(image/thefinaltrialmap.png)"
body.style.backgroundSize = "100vw"
body.style.backgroundRepeat = "no-repeat"
body.style.backgroundColor = "black"

//SELECTORS
// const fire = document.querySelector(".fire")
// const electric = document.querySelector(".electric")
const olimarsShip = document.querySelector(".i3")
// const water = document.querySelector(".water")
const divs = document.querySelectorAll(".imgdiv")
const imgDivs = document.querySelectorAll(".imgdiv")
const disableButton = document.querySelector("#disabling-div")
const allElements = document.querySelectorAll(".fire, .electric, .water")
//i5, i6, i8 normal div selectors
const div5 = document.querySelector(".i5")
const div6 = document.querySelector(".i6")
const div7 = document.querySelector(".i7")
const div8 = document.querySelector(".i8")
const allNormalDivs = document.querySelectorAll(".i5, .i6, .i7, .i8")

//SHIP MANIPULATION
const damagedShip = document.getElementById("damaged-ship")
const repairedShip = document.getElementById("repaired-ship")
repairedShip.style.display = "none" //Flip this later when ship is repaired

//MODAL MANIPULATION
const modal = document.getElementById("modal")
const outerModal = document.querySelector(".i10")
outerModal.style.display = "none" //setting the modal to not display anything before a click

document.addEventListener("click", (e)=>{
    if (outerModal.style.display === "block"){
        outerModal.style.display = "none"
        disableButton.style.display = "none"
        modal.innerHTML = ""
    }
    })

// PIKMIN COUNTER/PIKMIN MANIPULATION
const outerPikminNumbers = document.querySelector(".i9")
const innerPikminNumbers = document.getElementById("#pikmin-numbers")
let redPikmin = document.getElementById("red-pikmin")
let yellowPikmin = document.getElementById("yellow-pikmin")
let bluePikmin = document.getElementById("blue-pikmin")

const pikmin =  {
    redPikmin: {
        type: "fire",
        numberOf: 20
    },
    yellowPikmin: {
        type: "electric",
        numberOf: 20
    },
    bluePikmin: {
        type: "water",
        numberOf: 20
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
let shipPartCounter = 0

//INFORMATION MODAL/EVENT LISTENER ABOUT OLIMAR'S SHIP
olimarsShip.addEventListener("click", (e) => {
    e.stopPropagation()
    outerModal.style.display = "block"
    let img = new Image()
    img.src = "image/ssdolphinrepaired.png"
    img.style.width = "8em"
    img.style.height = "12.2em"

    //OLIMARSSHIP REPAIRED/FIXED
    if (dayCounter <= 6 && shipPartCounter === 6) {
        modal.appendChild(img)
        modal.insertAdjacentHTML("beforeend", "<p class = \"olimar-ship-text\" >Congratulations! You've helped the Pikmin save Olimar and get him off of the planet and back home to his wife and kids! Press the button below to watch him blast off!</p>")
        disableButton.style.display = "block"
        damagedShip.style.display = "none"
        repairedShip.style.display = "block"
        //insert video & video button & play again button
    } else if (dayCounter <= 6 && shipPartCounter < 6) {
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
    divs.forEach(div => {
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
        pikmin: 10,
        notEnough: `Sorry, you don't have enough Pikmin to fight this!`,
        positiveMessage:`You killed the Armored Cannon Beetle and got 7 Pikmin!`,
        givePikmin: 7,
        killPikmin: true,
        elementPikmin: ["fire", "electric", "water"],
        monsterSize: "large"
    },
    "image/blue-1-pellet.png": {
        pikmin: 1,
        givePikmin: 1,
        mainElement: "water",
        elementPikmin: ["fire", "electric", "water"]
    },
    "image/blue-5-pellet.png": {
        pikmin: 5,
        givePikmin: 5,
        mainElement: "water",
        elementPikmin: ["fire", "electric", "water"]
    },
    "image/emperor-bulblax.png": {
        pikmin: 10,
        notEnough: `Sorry, you don't have enough Pikmin to fight this!`,
        positiveMessage: `You killed the Emperor Bulblax and got 7 Pikmin!`,
        givePikmin: 7,
        killPikmin: true,
        elementPikmin: ["fire", "electric", "water"],
        monsterSize: "large"
    },
    "image/red-1-pellet.png": {
        pikmin: 1,
        givePikmin: 1,
        mainElement: "fire",
        elementPikmin: ["fire", "electric", "water"]    },
    "image/red-5-pellet.png": {
        pikmin: 5,
        givePikmin: 5,
        mainElement: "fire",
        elementPikmin: ["fire", "electric", "water"]
    },
    "image/small-bulborb.png": {
        pikmin: 4,
        notEnough: `Sorry, you don't have enough Pikmin to fight this!`,
        givePikmin: 5,
        killPikmin: true,
        elementPikmin: ["fire", "electric", "water"],
        monsterSize: "small"
    },
    "image/yellow-1-pellet.png": {
        pikmin: 1,
        givePikmin: 1,
        mainElement: "electric",
        elementPikmin: ["fire", "electric", "water"]
    },
    "image/yellow-5-pellet.png": {
        pikmin: 5,
        givePikmin: 5,
        mainElement: "electric",
        elementPikmin: ["fire", "electric", "water"]
    },
    "image/yellow-wollywog.png": {
        pikmin: 4,
        notEnough: `Sorry, you don't have enough Pikmin to fight this!`,
        givePikmin: 5,
        killPikmin: true,
        elementPikmin: ["fire", "electric", "water"],
        monsterSize: "small"
    },
}

// ELEMENTAL DIV HANDLING
allElements.forEach(element => {
     //EVENTLISTENER LOOPING THROUGH USING THE PARENTELEMENT (i[num] div)
    element.parentElement.addEventListener('click', function(event) { 
        event.stopPropagation()
        this.disabled = true

        //CODE TO GET THE BASE IMAGE/PATH DEFINED FOR IMAGEREQUIREMENTS
        let imageSrc = event.target.getAttribute('src');
        let imageKey = imageSrc.replace(window.location.origin + '/', ''); //this took forever

        // GETTING CLASS OF THE DIV TO COMPARE AGAINST PIKMIN
        const clickedClass = element.className
        let pikminType;
        let pikminCount;

        //CLASS ARRAY SELECTOR SPECIFICALLY FOR MODALS TO LOOK PRETTY
        let classArray = clickedClass.split(' ');
        let elementalClass = classArray.find(cls => ['fire', 'electric', 'water'].includes(cls));
        
        //BINDING KEY/VALUE PAIRS TO VARS FOR ELEMENTAL PIKMIN
        let imageDetails = imageRequirements[imageKey];
        if (["fire", "electric", "water"].includes(elementalClass)){
            imageDetails.mainElement = elementalClass
        }
        let reward = imageDetails.givePikmin

        //CHECKING IF THE CLICKED DIV CLASS INCLUDES CLASS OF ELEMENTAL TYPE
        if (clickedClass.includes("fire")){
            pikminType = "redPikmin"
            pikminCount = pikmin.redPikmin.numberOf
        } else if (clickedClass.includes("electric")){
            pikminType = "yellowPikmin"
            pikminCount = pikmin.yellowPikmin.numberOf
        } else if (clickedClass.includes("water")){
            pikminType = "bluePikmin"
            pikminCount = pikmin.bluePikmin.numberOf
        } else {
            pikminType = null
            pikminCount = pikmin.totalPikmin
        }
        //ADDING PIKMIN TO TOTAL IF USER MEETS IMAGE REQUIREMENTS + NEW IMAGE FOR MODAL
        if (pikminCount >= imageDetails.pikmin){
            let img = new Image();
                img.src = imageSrc;
                img.style.width = "8em";
                img.style.height = "12.2em";
                modal.innerHTML = "";
                
                //IF USER SUCCESSFULLY GETS PIKMIN
                if (["redPikmin", "yellowPikmin", "bluePikmin"].includes(pikminType)) {
                    if (pikmin.numberOf >= imageDetails.pikmin){
                        pikmin[pikminType].numberOf += imageDetails.givePikmin;
                        pikmin.render();
                    }
                }
                //APPENDING CLICKED IMAGE AND DISPLAYING MODAL
                modal.appendChild(img);
                outerModal.style.display = "block";
                disableButton.style.display = "block";
        }
        //CHECKING PIKMIN TYPE AGAINST THE IMAGE REQUIREMENTS AND ASSIGNING THE TYPES TO VARIABLES
        if (["redPikmin", "yellowPikmin", "bluePikmin"].includes(pikminType))  {
            const imageSrc = element.parentElement.querySelector('img').getAttribute('src');
            const pikminRequirement = imageRequirements[imageSrc].pikmin;

            //CHECKING IF PIKMINCOUNT IS GREATER THAN OR EQUAL TO PIKMINREQUIREMENT AND PERFORMING ACTIONS
            if (pikminCount >= pikminRequirement){

                //NEW IMAGE FOR THE MODAL
                let img = new Image()
                img.src = imageSrc
                img.style.width = "8em"
                img.style.height = "12.2em"

                //CLEAR MODAL CONTENT SO USER CAN CLICK ITEM WITHOUT IT DUPLICATING
                modal.innerHTML = ""

                //RANDOMIZE NUMBER OF PIKMIN DEATHS
                let killPikminLg = Math.ceil(Math.random() * (5 - 1)) // between 5 and 1
                let killPikminSm = Math.floor(Math.random() * (3 - 1)) //between 3 and 1
                let pikminLost;
                console.log(pikminLost)
                //COMPUTER FUNCTIONALITY TO REMOVE PIKMIN FROM THE GAME
                function decreasePikmin(pikminType, monsterSize){
                    let pikminLoss
                    if (monsterSize === "small"){
                        pikminLoss = killPikminSm
                    } else {
                        pikminLoss = killPikminLg
                    }
                    pikmin[pikminType].numberOf -= pikminLoss

                    //ERROR CHECKING FOR BELOW ZERO TO ENSURE WE CAN'T HAVE SPOOPY NEGATIVE GHOST PIKMIN NUMBERS
                    if (pikmin[pikminType].numberOf < 0){
                        pikmin[pikminType].numberOf =0
                    }
                    return pikminLoss
                }

                //ADDING CONTENT TO THE MODAL
                modal.innerHTML = `<p>You clicked on a ${elementalClass} element item with the right amount of ${elementalClass} Pikmin! You get +${reward} ${elementalClass} Pikmin!</p>`
                let imageDetails = imageRequirements[imageKey]

                //IF IMAGE IS A MONSTER (2ND PLAYER REQUIREMENT)
                let monsterSize = imageDetails.monsterSize
                if (imageDetails.killPikmin && pikmin.hasOwnProperty(pikminType)){
                    if (pikminType === "fire"){
                        pikminLost = decreasePikmin(pikminType, monsterSize)
                        console.log(pikminLost)
                    } else if (pikminType === "electric"){
                        pikminLost = decreasePikmin(pikminType, monsterSize)
                    } else if (pikminType === "water"){
                        pikminLost = decreasePikmin(pikminType, monsterSize)
                    }
                    modal.innerHTML += `<p>${pikminLost} You lost ${pikminLost} ${elementalClass} Pikmin in the fight!</p>`;
                }

                pikmin[pikminType].numberOf += reward
                pikmin.render()
                modal.appendChild(img)

                //MODAL DISPLAY
                outerModal.style.display = "block"
                disableButton.style.display = "block"
                
                //IF USER DOES NOT HAVE ENOUGH PIKMIN
            } else {
                //NEW IMAGE PLACED IN THE MODAL
                let img = new Image()
                img.src = imageSrc
                img.style.width = "8em"
                img.style.height = "12.2em"

                modal.innerHTML = ""
                modal.appendChild(img)
                modal.innerHTML += `<p>Sorry, you don't have enough ${elementalClass} Pikmin!</p>` 
                outerModal.style.display = "block";
                disableButton.style.display = "block";
            }

            //CLICK MODAL/OUTSIDE MODAL TO CLOSE
            outerModal.addEventListener('click', function(event) {
                if (event.target == outerModal) {
                    outerModal.style.display = "none";
                    element.parentElement.disabled = false;
                }
            });
        }
    });
});





// //ADD SHIP PARTS IMAGES AND CODE!!

// //reference div with image in it for modal
// //write logic for elemental divs
// //WRITE DAY LOGIC

// //elemental logic:
// //we want to check if the player has an adequate amount of pikmin for each specific div
// //bind specific strings to pikmin number //pikmin.redPikmin
// //need to compare against the image property AND the amount of elemental pikmin