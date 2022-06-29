# Rock, Paper, Scissors - React/Redux/MUI

  

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH).

  

## Table of contents

  

- [Overview](#overview)

	- [The challenge](#the-challenge)

	- [Screenshot](#screenshot)

	- [Links](#links)

- [My process](#my-process)

	- [Built with](#built-with)

	- [What I learned](#what-i-learned)

	- [Continued development](#continued-development)

	- [Useful resources](#useful-resources)

- [Author](#author)



 

  

## Overview

  

### The challenge

  

Users should be able to:

  

- [x] View the optimal layout for the game depending on their device's screen size

- [x] Play Rock, Paper, Scissors against the computer

- [x] Maintain the state of the score after refreshing the browser _(optional)_

-  [ ] **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_
	- Bonus still in progress
  

### Screenshot

  

![](./public/images/screenshot.jpg)
  

### Links

  

- Solution URL: [https://github.com/jpal91/rps-react](https://github.com/jpal91/rps-react)

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

  

## My process

  

### Built with


- [React](https://reactjs.org/) - JS library

- [React-Redux](https://react-redux.js.org/) - State management for React Apps

- [Material UI](https://mui.com/material-ui/) - For styles, CSS


  

### What I learned

 The vast majority of time on this application was spent figuring out how to get the main game page to look the way it does in the template. Ultimately, I ended up pulling the svgs from the Figma app for the actual graphics, but I styled them individually to get them in the right place on the screen.

#### *localStorage*

This was the first app (and first time) I used localStorage for keeping state after a refresh. It was fairly straightforward but there were a few things that tripped me up. Mainly that localStorage does not seem to keep data in it's original form (ie number) and instead converts them to a string. This took me quite a while to figure out, but it now works. 

  

I set up two useEffect hooks, one on mount and one that monitors changes in score:

```js

useEffect(() => {

	if (!localStorage.getItem('score') || localStorage.getItem('score') === '0'){
		return
	}
	let  num = Number(localStorage.getItem('score'))
	userScore(num)
}, [])

  

useEffect(() => {

	localStorage.setItem('score', score)

}, [score])

```

The first sets the score in the app (via redux) to equal the score in localStorage (if available).

The second  updates the localStorage score whenever there is a change in score.

  
#### *Animation*
This was also the first app I used vanilla CSS animations on and it worked out quite well. I needed to utilize Material UI/Emotion's keyframes tool to set everything up properly and convert what I wanted into vanilla CSS -

```js
const  fade = keyframes`
	from {
		opacity: 0
	}

	to {
		opacity: 1
	}
`
```
Then I used MUI's SX prop to add inline CSS for the components/elements I wanted to apply animation to -

```js
animation: `${fade} 3s ease-in 3s 1 normal forwards`
```
 
 It took me a while to figure this out but ended up looking amazing, so I'm very satisfied. 

### Continued development

  

Every project I've done so far has taken me a little farther into CSS and styling. I have learned quite a bit in the last few weeks just because of these exercises. I'm far from perfect, and really CSS is what I end up spending most of my time on figuring out.

With that being said, I learned a lot this round regarding position: 'absolute' and how to use that to get elements exactly where I want them. This was incredibly helpful, but I still have a lot to learn here. I'm hoping I can utilize this a little more efficiently as I progress instead of leaning on Flexbox/Grid so heavily. 

I have not 100% finished this project yet because the bonus is not completed, will be working on that in the coming weeks. 
  

### Useful resources

  

- [Creating Glow Effects with CSS](https://codersblock.com/blog/creating-glow-effects-with-css/) - Great article that helped me get the initial info I needed to figure out the glow animations and how to complete them properly.

- [Material-UI Image](https://www.npmjs.com/package/material-ui-image) - Image component I found for MUI. Works fairly well, but does require some getting used to. 

- [Emotion Keyframes](https://emotion.sh/docs/keyframes) - Explained how to use Keyframes with Emotion/React.

  

## Author

  

- Website - Coming soon...

- Frontend Mentor - [@jpal91](https://www.frontendmentor.io/profile/jpal91)

- GitHub- [https://github.com/jpal91/](https://github.com/jpal91/)