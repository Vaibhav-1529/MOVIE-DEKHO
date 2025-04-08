const slides = document.querySelectorAll(".search-card");
const leftBtn = document.querySelector(".search-leftBtn");
const rightBtn = document.querySelector(".search-rightBtn");
let seachnext = false;
function goright() {
  shiftright();
  changeback();
}
function goleft() {
  shiftleft();
  changeback();
}
function shiftright() {
  let slidearray = document.querySelectorAll(".search-card");
  let first = slidearray[0];
  let parent = first.parentElement;
  parent.removeChild(first);
  parent.appendChild(first);
  slides = document.querySelectorAll(".search-card");
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 220}px`;
  });
}
function shiftleft() {
  let slidearray = document.querySelectorAll(".search-card");
  let last = slidearray[slides.length - 1];
  let parent = last.parentElement;
  parent.removeChild(last);
  parent.insertBefore(last, slidearray[0]);
  console.log(parent);
  slides = document.querySelectorAll(".search-card");
  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
}
