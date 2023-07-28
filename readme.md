# The Pikmin Project

A simple small game based on Nintendo's IP, Pikmin.

## Description

The game is RNG-based, so it's based on chance, but you can win!

Click the left box to "gather" the item, or click a monster and get hurt. If you click 3 monsters, you lose. If you click 3 ship parts, you win. You can accrue more score by clicking the Pikmin Pellets that come up that are labeled with a 1 and a 5.

## Technologies Used

HTML, CSS, JavaScript

## Requirements Met

This is a game, so the requirements met are:

* 2 Player Game (monster images deduct "Pikmin" which are the score)
* A win state (click 3 ship parts and you win)
* A lose state (click 3 monsters and you lose)
* A way to keep playing if the game is not over ("Next day button")
* Multiple Rounds to Play ("next day button")

## Getting Started

### Dependencies

A windows PC (It might work on mobile, but it wasn't overly developed for mobile devices)
Google Chrome (It may work in other browsers but I can't guarantee it)
A browser able to run JavaScript in general

### Installing

Visit the github pages website at https://robertleemich.github.io/pikmin-project-rmichaud/

### Executing program

Visit the github pages website at https://robertleemich.github.io/pikmin-project-rmichaud/

## Help

I can be reached at robert.mich@mail.com for any inquiries.

## Difficulties I had with this project

I imagined this project to be fairly extensive on paper, now that I am aware of how to create this kind of stuff in JavaScript in a browser. I am ecstatic to be able to create this stuff and understand JS code more than I ever have in the last 10 years of working with HTML/CSS and a wee bit of JS. I'm so excited for new knowledge and these projects and homework and stuff to exercise my brain.

However, my plan that I wrote down was way too big of a scope to perform in a week, but I thought I could do it, and I probably could have if I had actually used my brain a little bit. But I had 2 iterations of the project's .js file before I ran out of time and had to create this severely cut down version of what I actually wanted. So I learned to have a project be functional modularly before moving onto other parts of the project.

A few things I had difficulties with was having the next day overlay show up with the button when needed, the win/lose conditions, and the high scores. I was unable to get the high scores to record to an array and be displayed, because I couldn't understand localStorage, JSON and that stuff, and using localStorage.

I did ask on stackOverflow about the high scores (https://stackoverflow.com/questions/76784193/appending-to-div-saving-date-and-score-to-localstorage-js-only) and I did get an answer back using JSON and JSON's stringify, but I couldn't quite get it to work (I probably missed changing a div selector or something, my brain was absolutely mush at that point) and I went with the JS solution that user offered.

I also struggled with using localStorage and understanding how it worked, since I had used it previously for the day timer, but I couldn't really grasp how to insert it into the high scores. But when I saw the user's code, it made sense, it made sense, but like I mentioned, I still need some practice particularly using localStorage and manipulating data in it.

## Stretch Goals

* I wanted to have specific divs that required a specific number of type of Pikmin to interact with the image in the box. I did have this working at a point in a different iteration, but it ended up not working out.

* I wanted to have different kinds of Pikmin in general. Again I did have this working (Thanks Barbie codealong) but again, ended up not working out.

* Using modals to display information about the item you clicked, your success/failure of getting items/fighting monsters with your Pikmin, etc. I did have this halfway working previously as well.

* I wanted to have sounds for specific actions, i.e. when the user clicks a pellet it brings up a modal that displays the image of the pellet and pikmin carrying the pellet with the "pikmin working" noise, sounds for Pikmin fighting monsters, sounds for the background of the website with little "pikmin humming" noises from the game.

* I also wanted to implement a video when the user wins the game that would have displayed in the modal on a button press of Olimar leaving the planet, from Pikmin 1.

## Authors

Contributors names and contact info

Robert Michaud - robert.mich@mail.com

## Version History

* 0.1
    * Initial Release*

## Acknowledgments

Inspiration, code snippets, etc.
* stackOverflow (https://stackoverflow.com/)
* Per Scholas for being awesome and creating this full-stack course (https://perscholas.org/)
* Joshua and Christina for sharing their infinite wisdom and enabling me to make this (Instructors for the Full-Stack development course)