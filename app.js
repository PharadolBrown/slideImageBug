const carouselSlide = document.querySelector(".carousel-slide");
let carouselContainer = document.querySelector(".carousel-container");

// define src img array
const numberOfImages = 4; // increase up to 10 :Because there are only 10 images in the image folder
const srcImages = [];

// for (let index = 0; index < numberOfImages; index++) {
//   srcImages.push(`image/natural_wander${index + 1}.jpg`);
// }
// // clone first & last image
// const lastCloneSrc = srcImages.length;
// srcImages.unshift(`image/natural_wander${lastCloneSrc}.jpg`);
// const firstCloneSrc = 1;
// srcImages.push(`image/natural_wander${firstCloneSrc}.jpg`);

// //create element img & add first , last clone class to some img
// for (let index = 0; index < srcImages.length; index++) {
//   const image = document.createElement("img");
//   image.src = srcImages[index];
//   let idImg = "";
//   index == 0
//     ? (idImg = "lastClone")
//     : index == srcImages.length - 1
//     ? (idImg = "firstClone")
//     : (idImg = index);
//   image.setAttribute("id", idImg);
//   carouselSlide.append(image);
// }

const carouselImages = document.querySelectorAll("img");
console.log("container : " + carouselContainer.clientWidth);
console.log("slide : " + carouselSlide.clientWidth);
for (let index = 0; index < carouselImages.length; index++) {
  console.log(
    "img " + (index + 1) + " width " + carouselImages[index].clientWidth
  );
}

//Buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

//Counter
let counter = 1;
let sizeContainer = carouselContainer.clientWidth;

function slideImages(count) {
  carouselSlide.style.transform =
    "translateX(" + -sizeContainer * count + "px)";
  console.log("move : " + -sizeContainer + "*" + count);
  // focusCircleBtn();
}
slideImages(counter);

//Button Listeners
nextBtn.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter++;
  slideImages(counter);
});

prevBtn.addEventListener("click", () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  counter--;
  slideImages(counter);
});

// Carousel Images
carouselSlide.addEventListener("webkitTransitionEnd", () => {
  if (carouselImages[counter].id === "lastClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    slideImages(counter);
  }
  if (carouselImages[counter].id === "firstClone") {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    slideImages(counter);
  }
});

// set when screen size is has changes

window.onresize = function () {
  sizeContainer = carouselContainer.clientWidth;
  slideImages(counter);
};
