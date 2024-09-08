Week 2 Assignment - Accessible Gallery Website README

Aditional reflections are placed within comments of my code.
🎯 What requirements did you achieve?
I have achieved all the requirements of this project.
🎯 Implement responsive design using media queries to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px):
Including the default settings there are 4 possible versions of the site where the size of the thumbnail container and its images are reduce to accompany the smaller screen size. (last minute correction, for some reason adding extra media queries broke the site so i had to comment out so I only have 1, so the stretch goal wasnt reached)
🎯 Ensure all images have appropriate alt text attributes for accessibility:
All images have been assigned alt text when they get created in the JS code.
🎯 Correctly use event handlers to switch images based on user interactions:
Event handlers are used to create the large image everytime the user clicks on a thumbnail, the arrow buttons, or the left and right arrow keys on the keyboard.

In addition to the requirements, I have also completed 1-3 (depending on interpretation) of the stretch goals.
🏹 Implement key bindings for buttons to enhance navigation, such as using arrow keys to switch between images:
This was trivial to implement.
🏹 Add ARIA elements to improve accessibility, such as aria-label, aria-live, and other relevant attributes:
Not exactly sure what I was doing but I have tried adding ARIA elements to everything I thought was relevent.
🏹 Develop media queries for multiple screen sizes: I have 3 media queries too adjust the size of the thumbnail container, so there are 4 differant versions of the site to suit the needs of smaller screensizes.
🏹 Use 'srcset' to specify which image will be used based on the size of the screen for optimal viewing experience:
I have watched a video about srcset and I didnt really get it and also I believed it wouldnt solve any of my problems I have with this project so I opted to not use it.
🎯 Were there any requirements or goals that you were unable to achieve?
srcset stretch goal was not attempted and ARIA + media queries for multiple screen sizes was attempted
🎯 If so, what was it that you found difficult about these tasks?
When looking up stuff to do with ARIA none of the sources where clear about what exactly each tag is used for and some tags were similar and also some HTML elements makes ARIA not neccessary for it making it a bit confusing on where to use it is needed and what to write in the ARIA tags

The javascript section was by far the most enjoyable and mostly was the easiest part and the part I am most satisfied with. I also would like to know if there was anything in JS that I could improve on as its the only section I can't think of improvements, other than to implement more features.

Bug 1: img.src and others were not getting values from element in the forEach loop and display undefined when console.logged.
Solution has been found open checking the name of the object properties and realising I was trying to call them by the wrong name.
Bug 2: Multiple class names aren't being added. Solution was className = changes the class name instead of adding a new one so classList.add() fixes the problem.
Bug 3: Index not correctly updating when clicking a new image. Solution: there was no bug, I was logging the wrong index variable and the global index variable is updating correctly.
Bug 4: "Uncaught ReferenceError: can't access lexical declaration 'imageIndex' before initialization" solution is trivial as I moved the invoke createImageArray function to after the imageIndex was initialized
Bug 5: TypeError occurs when you press left on image index 0. Appears to be caused by JS calculating -1 % imageArray.length as -1 instead of 14 (which is the correct answer mathematically and what I intended to use for this function). Solved by manually adding the value of imageArray.length to make the looping property work as intended

Unsolved issue 1: Due to the 4:3 aspect ratio of my photos a lot of them look bad when resized to take 100% of viewport width and height because few devices have a similar aspect ratio.
Unsolved issue 2: I was unable to implement a feature I wanted to which was a button that attached itself to the thumbnail container where clicking it will hide the container and clicking it again would bring it back. This is due to time contraints as I would be able to implement this feature if I had more time to work on the project, and also because I couldnt figure out how to get the button to attach to the container div as placing it inside messed with something I cant remember and I cant figure out how to attach it if placed outside the div.

Resources:
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-live
https://www.youtube.com/watch?v=q32skvBgxo4 key events
https://www.youtube.com/watch?v=d7cH8geV2dY overflow (scroll bar
https://stackoverflow.com/questions/1988514/javascript-css-how-to-add-and-remove-multiple-css-classes-to-an-element.s
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
