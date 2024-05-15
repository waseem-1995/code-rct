
let search_list = document.querySelector("#movies");
let moneywaleet = JSON.parse(localStorage.getItem("amount")) || [];
let display_amount = document.getElementById("wallet");
if (moneywaleet == 0) {
  display_amount.innerHTML = "0";
} else {
  display_amount.innerHTML = moneywaleet;
}




// waleetmoney





//find movies;
let id;
async function search_movies() {
  try {
    let search_box = document.querySelector("#search").value;
    const res = await fetch(
      `https://omdbapi.com/?s=${search_box}&i=&page=1&apikey=fc1fef96`
    );

    const data = await res.json();
    const search = data.Search;
    //  console.log(data);
    return search; //go to main method
  } catch (error) {
    console.log(error);
  }
}



function append_movies(data) {
  search_list.innerHTML = "";
  data.forEach(function (elem) {
    let div = document.createElement("div");
    div.setAttribute("class","movie_tab")

    let img = document.createElement("img");
    img.src = elem.Poster;

    let p = document.createElement("p");
    p.setAttribute("id", "title");
    p.innerHTML = elem.Title;

    let btn = document.createElement("button");
    btn.innerHTML = "Book now";
    btn.setAttribute("class", "book_now");
    btn.addEventListener("click", function () {
      bookmyshow(elem);
    });

    div.append(img, p, btn);
    search_list.append(div);
  });
  // loadMovies();
}
let main = async () => {
  let data = await search_movies();
  if (data === undefined) {
    return false;
  }
  append_movies(data);
};

let findmovies = (fun, delay) => {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout(function () {
    fun();
  }, delay);
};

// let findMovies = () => {
//   dbfindmovies(main, 1000);
//   console.log("find");
// };









//bookmyshow
let moviedata = JSON.parse(localStorage.getItem("movie"))|| [];
function bookmyshow(element) {
  console.log(element);
  moviedata.push(element);
  localStorage.setItem("movie", JSON.stringify(moviedata));
  // alert("added");
  window.location.href = "checkout.html";
}