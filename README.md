# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Overview
Interactive rating component created using CSS flexbox and vanilla javascript.
### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating


## My process

Crated and styled two different divs for both the states.

Hover states were created using css and javascript event listeners.
JavaScript logic : 
  For each rating dot, if there exist a previous sibling, change it's style as long as the mouse hovers over the dot.

Changed the dot style on click and registered the associated dataset value (which is the rating value of the respective dot) on a predefined variable.
Logic: 
  If the click style is applied on a dot already remove it.
  Add the click style to the dot clicked. And assign its dataset value to the predefined variable.

At last, added an event listener for click to the submit button. That would take the user to the thank you state.
Logic: 
  Default behaviour of the submit button is turned off.
  If the value of user-rating variable is undefined, that is If the user has not selected any value, the button would do nothing.
  Else first div (initial state) is made invisible and the second div (thank you state) is made visible, using css classes, and the value assigned to the user-rating variable is appended to the text in the new div.


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned






