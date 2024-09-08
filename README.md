Week 2 Assignment - Accessible Gallery Website README

Bug 1: img.src and others were not getting values from element in the forEach loop and display undefined when console.logged.
Solution has been found open checking the name of the object properties and realising I was trying to call them by the wrong name.
Bug 2: Multiple class names aren't being added. Solution was className = changes the class name instead of adding a new one so classList.add() fixes the problem.
https://stackoverflow.com/questions/1988514/javascript-css-how-to-add-and-remove-multiple-css-classes-to-an-element.s
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
Bug 3: Index not correctly updating when clicking a new image. Solution: there was no bug, I was logging the wrong index variable and the global index variable is updating correctly.
Bug 4: "Uncaught ReferenceError: can't access lexical declaration 'imageIndex' before initialization" solution is trivial as I moved the invoke createImageArray function to after the imageIndex was initialized
