//Test Comment

let imageIndex = -1; //function increments before returning the image index so to make the first image in the array index 0 imageIndex has to be innitiated at -1
let globalIndex = 0;
let images = createImageArray();
//STEP 1: Select DOM elements that will contain the images.
const thumbnailContainer = document.getElementById("thumbnail-container");
const mainImageContainer = document.getElementById("main-image-container");
createThumbnails(images);

//STEP 2: Write a function to create the images in the thumbnail.
function createThumbnails(thumbnailArray) {
  //   A whole array will be passed as a parameter
  thumbnailArray.forEach((element) => {
    const img = document.createElement("img"); //Create the image at this index
    img.src = element.imageSrc; //assign the values
    img.alt = element.imageAlt;
    img.className = "thumbnail-image"; //give images class name
    //append image to the DOM
    thumbnailContainer.appendChild(img);
    //add event listener to display the clicked image in the main container.
    img.addEventListener("click", (event) => {
      createBigImage(element);
    });
  });
}

//STEP 3: we need to write a function to create big image.
//test
//function createLargeImage(largeImage) {

//}

//!Arrow Key Stretch Goal
//you need a global variable to keep track of index value

function createBigImage(element) {
  //set inner HTML to empty string.
  mainImageContainer.innerHTML = ""; //create img element
  const bigImg = document.createElement("img");
  bigImg.src = element.imageSrc; //set the img values (src alt. width height are styled in css)
  bigImg.alt = element.imageAlt;
  bigImg.classList.add(element.imageOrientation); //give class
  bigImg.classList.add("big-image"); //using classList.add allows multiple classes to be added
  globalIndex = element.imageIndex; //when img is cliked, it should set global index to the value of the current image's position in the array, eg image 3 is index 2.
  console.log(globalIndex);
  console.log(bigImg);
  console.log(element);
  mainImageContainer.appendChild(bigImg); //append to DOM
}

function createSingleImage(src, alt, orientation) {
  //creates an object that represents 1 image with the source link, the alt text, the orientation of the image as well as its index which will be added later.
  imageIndex++;
  console.log(imageIndex);
  return {
    imageSrc: src,
    imageAlt: alt,
    imageOrientation: orientation,
    imageIndex: imageIndex,
  };
}
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
