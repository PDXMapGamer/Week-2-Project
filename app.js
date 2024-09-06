//Test Comment
let images = createImageArray();

//STEP 1: Select DOM elements that will contain the images.
const thumbnailContainer = document.getElementById("thumbnail-container");
const mainImageContainer = document.getElementById("main-image-container");
createThumbnails(images);

//STEP 2: Write a function to create the images in the thumbnail.
function createThumbnails(thumbnailArray) {
  //   A whole array will be passed as a parameter
  thumbnailArray.forEach((element) => {
    //Create the image at this index
    const img = document.createElement("img");
    img.src = element.imageSrc;
    img.alt = element.imageAlt;
    img.className = element.imageOrientation;
    console.log(
      `src: ${img.src} alt: ${img.alt} orientation: ${img.className}`
    );
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
  imageArray.push(
    createSingleImage(
      "./images/Clock Tower.jpg",
      "An image of the Sapporo clock tower taken at 7:09am on a february morning",
      "portrait"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Snow Sculpture.jpg",
      "A big snow sculpture of a building being lit up with purple lights at night",
      "landscape"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Akita Lake.jpg",
      "A picture of a lake taken at dusk while it is lightly snowing.",
      "portrait"
    )
  );
  return imageArray;
}

function createSingleImage(src, alt, orientation) {
  return {
    imageSrc: src,
    imageAlt: alt,
    imageOrientation: orientation,
  };
}
