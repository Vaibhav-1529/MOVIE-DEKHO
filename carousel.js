let trendingSlide = document.querySelectorAll(".trendingSlide");
console.log(trendingSlide);
trendingSlide.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});
trendingSlide.forEach((slide) => {
  slide.style.transform = `translateX(-${2 * 100}%)`;
});
console.log(trendingSlide[0]);

const token3 =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDVkMTU1OGE4MDI0Y2EyNWRmNjFkMTg0MmMxN2Q4NCIsIm5iZiI6MTc0MjgxNDQ2NS4wNjQsInN1YiI6IjY3ZTEzZDAxY2U2MDVhMWVkMWM3NTBlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Qj6JTm62PiUzN5s5Qt_vSgFT3zhGlh4UGs--mPPBNk";

async function setImages() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token3}`,
    },
  };
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
      options
    );
    const data = await response.json();
    searchData2 = data.results;
    console.log("hello" + searchData2);
    for (let i = 0; i < 5; i++) {
      if (searchData2[i] && searchData2[i].poster_path) {
        trendingSlide[i].src =
          "https://image.tmdb.org/t/p/w500" + searchData2[i].poster_path;
      } else {
        trendingSlide[i].src = "default-fallback-image.jpg";
      }
    }
  } catch (error) {
    console.error("Error fetching movie:", error);
  }
}
let autointerval;
function autorotate() {
  clearInterval(autointerval);
  autointerval = setInterval(() => {
    Carouselshiftright();
  }, 5000);
}
autorotate();
function goRcarousel() {
  Carouselshiftright();
  autorotate();
}
function goLcarousel() {
  Casouselshiftleft();
  autorotate();
}
function Carouselshiftright() {
  let slidearray = document.querySelectorAll(".trendingSlide");
  let first = slidearray[0];
  let parent = first.parentElement;
  parent.removeChild(first);
  parent.appendChild(first);
  trendingSlide = document.querySelectorAll(".trendingSlide");
  trendingSlide.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
}
function Casouselshiftleft() {
  let slidearray = document.querySelectorAll(".trendingSlide");
  let last = slidearray[trendingSlide.length - 1];
  let parent = last.parentElement;
  parent.removeChild(last);
  parent.insertBefore(last, slidearray[0]);
  console.log(parent);
  trendingSlide = document.querySelectorAll(".trendingSlide");
  trendingSlide.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
  });
}
setImages();
