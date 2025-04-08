let searchData1;
const token1 =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDVkMTU1OGE4MDI0Y2EyNWRmNjFkMTg0MmMxN2Q4NCIsIm5iZiI6MTc0MjgxNDQ2NS4wNjQsInN1YiI6IjY3ZTEzZDAxY2U2MDVhMWVkMWM3NTBlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Qj6JTm62PiUzN5s5Qt_vSgFT3zhGlh4UGs--mPPBNk";

async function searchTheMovie(row) {
  let searchInput;
  let rowname;
  if (row) {
    searchInput = row;
    rowname = "." + row + "-row";
  } else {
    searchInput = document.getElementById("searchInput").value;
    rowname = ".search-row";
  }
  let rowCon = document.querySelector(".search-row");
  if (searchInput.trim() == "") {
    alert("Enter a valid input");
    return;
  }
  console.log(searchInput);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token1}`,
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchInput}&include_adult=false&language=en-US&page=1`,
      options
    );
    const data = await response.json();
    searchData1 = data.results;
    // console.log(searchData1);
    insertROw(searchData1, rowname);
  } catch (error) {
    console.error("Error fetching movie:", error);
  }
}

function insertROw(data, row) {
  if (row == ".search-row")
    document.querySelector(".movie-cover").style.display = "block";
  document.querySelector(row).innerHTML = ``;
  let i=0;
  for (const element of data) {
    let div = document.createElement("div");
    div.className = "movie-card search-card";
    div.style.animationDelay = `${0.2 + i * 0.2}s`;
    div.innerHTML = ` <div class="movie-card search-card">
                            <div class="movie-poster">
                                <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" />
                                <div class="card-overlay">
                                    <div class="movie-info">
                                    <h3>${element.title}</h3>   
                                        <div class="rating">
                                            <span>&#11088; ${element.vote_average}/10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    document.querySelector(row).append(div);
    i++
  }
}

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    searchTheMovie(); // your function to search
  }
});
searchTheMovie("Avenger");
searchTheMovie("Spiderman");
searchTheMovie("Naruto");
let searchData2;
const token2 =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDVkMTU1OGE4MDI0Y2EyNWRmNjFkMTg0MmMxN2Q4NCIsIm5iZiI6MTc0MjgxNDQ2NS4wNjQsInN1YiI6IjY3ZTEzZDAxY2U2MDVhMWVkMWM3NTBlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Qj6JTm62PiUzN5s5Qt_vSgFT3zhGlh4UGs--mPPBNk";

async function TrendingMovie() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token2}`,
    },
  };
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?language=en-US`,
      options
    );
    const data = await response.json();
    searchData2 = data.results;
    // console.log(searchData2);
    TrendingMovieInsert(searchData2);
  } catch (error) {
    console.error("Error fetching movie:", error);
  }
}

function TrendingMovieInsert(data) {
  document.querySelector(".trending-row").innerHTML = ``;
  let i=0;
  for (const element of data) {
    let div = document.createElement("div");
    div.className = "movie-card search-card";
    div.style.animationDelay = `${0.2 + i * 0.2}s`;
    div.innerHTML = ` <div class="movie-card search-card">
                            <div class="movie-poster">
                                <img src="https://image.tmdb.org/t/p/w500${element.poster_path}" />
                                <div class="card-overlay">
                                    <div class="movie-info">
                                    <h3>${element.title}</h3>   
                                        <div class="rating">
                                            <span>&#11088; ${element.vote_average}/10</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    document.querySelector(".trending-row").append(div);
    i++;
  }
}
TrendingMovie();


let seemore=document.querySelectorAll(".see-more");
for (const element of seemore) {
  let condition=false;
  element.addEventListener("click",(event)=>{
    console.log(event)
    let rowname=event.target.attributes;
    rowname=rowname.value.value;
  if(!condition){
    document.querySelector("."+rowname+"-row").classList.add("full-show");
    condition=true;
    element.innerText="See Less";
  }
  else
  {
    document.querySelector("."+rowname+"-row").classList.remove("full-show");
    condition=false;
    element.innerText="See more";
  }
  })
}
