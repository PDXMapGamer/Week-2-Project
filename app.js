//Test Comment
let images = createImageArray();
console.log(images);
//STEP 1: Select DOM elements that will contain the images.
const thumbnailContainer = document.getElementById("thumbnail-container");
const mainImageContainer = document.getElementById("main-image-container");
//STEP 2: Write a function to create the images in the thumbnail.

function createThumbnails(thumbnailArray) {
  //   A whole array will be passed as a parameter
  thumbnailArray.forEach((element) => {
    console.log(element);
    //Create the image at this index
    //assign the values
    //give images class name
    //append image to the DOM
    //add event listener to display the clicked image in the main container.
    //createLargeImage(element)
  });
}

//STEP 3: we need to write a function to create big image.
//test
function createLargeImage(largeImage) {
  //set inner HTML to empty string.
  //create img element
  //give class
  //set the img values (src alt width height)
  //append to DOM
}

//!Arrow Key Stretch Goal
//you need a global variable to keep track of index value

//Function that creates the array of images.
function createImageArray() {
  let imageArray = [];
  imageArray.push(createSingleImage("src test", "alt test", "landscape"));
  imageArray.push(createSingleImage("src test 2", "alt test 2", "portrait"));
  imageArray.push(createSingleImage("src test 3", "alt test 3", "landscape"));
  return imageArray;
}

function createSingleImage(src, alt, orientation) {
  return {
    imageSrc: src,
    imageAlt: alt,
    imageOrientation: orientation,
  };
}
