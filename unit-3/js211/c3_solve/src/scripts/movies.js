
document.querySelector("#wallet").innerText = localStorage.getItem("amount");

async function search_movies(){
    try{
        const query = document.getElementById("search").value;
        let res = await fetch(`https://www.omdbapi.com/?apikey=70d1c4fa&s=${query}`)
        let data = await res.json();
        let movies = data.Search;
        appendMovies(movies);
    }catch(err){
        console.log("err:", err);
    }
}
function appendMovies(data){

        if(data === undefined) {
            return false;
        }

        let container = document.getElementById("movies");
        container.innerHTML =null;

        data.forEach(function(el){
            let div = document.createElement("div");
            div.setAttribute("class","movie_tab")
            let img = document.createElement("img");
            img.src = el.Poster;

            let movieName = document.createElement("p");
            movieName.innerText = el.Title;

            let btn = document.createElement("button");
             btn.setAttribute("class","book_now")
             btn.innerText = "book now";
            btn.addEventListener("click", function(){
                bookNow(el);
            })

            div.append(img, movieName, btn);
            container.append(div);
        });
}  


let id
let debounce = ( delay) => {
  if (id) {
    clearTimeout(id);
  }

  id = setTimeout( () =>{
    search_movies();
  }, delay);
};


function bookNow(el){

    var movieObj = {
        image: el.Poster,
        movieName: el.Title,
    }

    localStorage.setItem("bookedMovie", JSON.stringify(movieObj));

    window.location.href= "checkout.html";
}














// let id;
// let search_movies=async() =>{
//   try {
//     let query = document.getElementById("search").value;
//     let res = await fetch(
//       `https://omdbapi.com/?s=${query}&page=1&apikey=fc1fef96`
//     );

//     let data = await res.json();
//     let movie_list = data.Search;
//     //  console.log(data);
//     append(movie_list ) 
//   } catch (error) {
//     console.log(error);
//   }
// }



// let append=(data)=> {
//   let container = document.getElementById("movies");
//   container.innerHTML =null;
//   data.forEach(({Poster,Title},i)=>{

//     let div = document.createElement("div");
//     div.setAttribute("class","movie_tab");

//     let img = document.createElement("img");
//     img.src = Poster;

    
//     let p = document.createElement("p");
//     p.innerText =Title;

    
//     let book = document.createElement("button");
//     book.innerText = "Book Now";
//     book.setAttribute("class", "book_now");
//     book.onclick=()=> {
//       bookMovie(i);
//     };

//     div.append(img, p, book);
//     container.append(div)

//   })
  
// }


// let debounce = ( delay) => {
//   if (id) {
//     clearTimeout(id);
//   }

//   id = setTimeout( () =>{
//     search_movies();
//   }, delay);
// };

//bookmovie

// let bookMovie=(index)=> {
  
//   localStorage.setItem("movie", JSON.stringify(movie_list[index]));
//   window.location.href = "checkout.html";
// };


