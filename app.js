//Test Comment

let imageIndex = -1; //function increments before returning the image index so to make the first image in the array index 0 imageIndex has to be innitiated at -1
let globalIndex = 0;
let images = createImageArray();

const leftButton = document.getElementById("left-button");
leftButton.addEventListener("click", function () {
  globalIndex = mod("left");
  createBigImage(images[globalIndex]);
});
const rightButton = document.getElementById("right-button");
rightButton.addEventListener("click", function () {
  globalIndex = mod("right");
  createBigImage(images[globalIndex]);
});
document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft") {
    globalIndex = mod("left");
    createBigImage(images[globalIndex]);
  }
});
document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight") {
    globalIndex = mod("right");
    createBigImage(images[globalIndex]);
  }
});

//STEP 1: Select DOM elements that will contain the images.
const thumbnailContainer = document.getElementById("thumbnail-container");
const mainImageContainer = document.getElementById("main-image-container");
createThumbnails(images);
createBigImage(images[0]); //automatically loads the first image
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

function createBigImage(element) {
  //set inner HTML to empty string.
  mainImageContainer.innerHTML = ""; //create img element
  const bigImg = document.createElement("img");
  bigImg.src = element.imageSrc; //set the img values (src alt. width height are styled in css)
  bigImg.alt = element.imageAlt;
  bigImg.classList.add(element.imageOrientation); //give class
  bigImg.classList.add("big-image"); //using classList.add allows multiple classes to be added
  globalIndex = element.imageIndex; //when img is cliked, it should set global index to the value of the current image's position in the array, eg image 3 is index 2.
  mainImageContainer.appendChild(bigImg); //append to DOM
}
function mod(direction) {
  if (globalIndex - 1 < 0) {
    globalIndex += images.length;
  }
  if (direction == "left") {
    return (globalIndex - 1) % images.length;
  } else {
    return (globalIndex + 1) % images.length;
  }
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
      "An image of the Sapporo clock tower taken at 7:09am on a february morning. Location: Sapporo.",
      "portrait"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Snow Sculpture.jpg",
      "A big snow sculpture of a building being lit up with purple lights at night. Location: Sapporo.",
      "landscape"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Akita Lake.jpg",
      "A picture of a lake taken at dusk while it is lightly snowing. Location: Akita.",
      "portrait"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Kyoto River.jpg",
      "A river with traditional styled Japanese houses on the opposite bank. Location: Kyoto.",
      "landscape"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Fukuoka Nightscape.jpg",
      "A picture taken at night on a bridge over a river with a second bridge and the modern cityscape in the background. Location: Fukuoka.",
      "portrait"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Okayama Lake.jpg",
      "A beautiful river with Okayama Castle in the background. Location: Okayama.",
      "portrait"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Okayama Castle.jpg",
      "A picture of Okayama Castle taken from a distance on the opposite side of a river with swan theme boats docked. Location: Okayama",
      "portrait"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Red Panda sign.jpg",
      "A bilingual sign that warns the reader of the dangerous animal known as the adorable Red Pandas. Location: Osaka Tennoji Zoo.",
      "portrait"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Red Panda.jpg",
      "A picture of the Red Panda being cute behind a glass pane, for the protection of the spectators. Location: Osaka Tennoji Zoo.",
      "portrait"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Nara Deer.jpg",
      "A picture a Nara deer after being fed to recieve more treats but is met with the grim reality that there is none left. Location: Nara Park.",
      "portrait"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Temple.jpg",
      "A picture of a traditional Japanese temple. Location: Nara.",
      "landscape"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Snow Monkey Village.jpg",
      "A picture of a snowy landscape with traditional styled Japanese building and mountains in the background. Location: Jigokudani Monkey Park.",
      "portrait"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Snow Monkey.jpg",
      "A picture of an adorable baby snow monkey also known as the Japanese macaque. Location: Jigokudani Monkey Park.",
      "portrait"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Snow Monkey Chilling.jpg",
      "A picture of a Japanese macaque bathing in an onsen (Japanese hot spring), several more can be seen in the background behind the steam. Location: Jigokudani Monkey Park.",
      "portrait"
    )
  );
  imageArray.push(
    createSingleImage(
      "./images/Tokyo River.jpg",
      "A picture of a river with greenery and trees on top of a mound. Skyscrapers can be seen in the background. Location: Tokyo.",
      "portrait"
    )
  );
  return imageArray;
}
