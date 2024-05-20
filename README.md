# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

| Mobile View | Tablets View | Desktop View |
|:---:|:---:|:---:|
| ![mobile-view](https://github.com/PauloRicardoSM/interactive-pricing-component-main/assets/135445155/34fc72bf-56fc-45b6-90b9-bf365448f19b) | ![tablet-view](https://github.com/PauloRicardoSM/interactive-pricing-component-main/assets/135445155/7f06b6af-553b-4940-97f2-214de0b09c07) | ![desktop-view](https://github.com/PauloRicardoSM/interactive-pricing-component-main/assets/135445155/84169d9d-c0c7-48b5-9e5e-003f17534f57) |

### Links

- Solution URL: [Click here.](https://github.com/PauloRicardoSM/interactive-pricing-component-main)
- Live Site URL: [Click here.](https://pauloricardosm.github.io/interactive-pricing-component-main/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS preprocessor
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

In this project, I mainly learned how SCSS behaves in relation to CSS and how it can be useful. For example, we can nest tags within tags with more readability than CSS, as in the section below:

```scss
.attribution {
    font-size: .7em;
    text-align: center;
    margin-top: 5%;

    a {
        color: hsl(228, 45%, 44%);
    }

    @include mixins.tablet {
        font-size: .9em;
    }

    @include mixins.large-tablet {
        font-size: 1em;
    }
}
```

We can also create mixins and variables, which makes coding faster and more organized. In addition, I was able to learn more basic and useful JavaScript properties and to work better using CSS Grid and Flexbox.

### Continued development

For future projects, I intend to work and improve my skills and competencies in:

- Flexbox
- CSS Grid
- JavaScript
- SCSS
  
I also plan to start studying some JavaScript frameworks like React, in addition to starting with the basics of databases and backend with the Python framework Django.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Frontend Mentor - [@PauloRicardoSM](https://www.frontendmentor.io/profile/PauloRicardoSM)
- LinkedIn - [Paulo Ricardo Sousa Menezes](https://www.linkedin.com/in/paulo-ricardo-sousa/)
- Email - pauloricardosm@alu.ufc.br

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
