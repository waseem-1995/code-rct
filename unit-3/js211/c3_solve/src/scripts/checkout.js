// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time



document.querySelector("#wallet").innerText = localStorage.getItem("amount")


let confirm=()=> {
  let seats=document.getElementById("number_of_seats").value
  let total = +seats*100;
  let wallet = +JSON.parse(localStorage.getItem("amount"))
  

  if (total> wallet) {
    document.querySelector("#booking_status").innerText='Insufficient Balance!'
   // window.location.href = "index.html";
  } else {
    let balance=wallet-total;
    localStorage.setItem("amount",JSON.stringify(balance));
    document.getElementById("wallet").innerText=balance;
    document.querySelector("#booking_status").innerText='Booking Successful!'
  }
}



//document.querySelector("#wallet").innerText = localStorage.getItem("amount")

let selectedMovie = JSON.parse(localStorage.getItem("bookedMovie"));

console.log(selectedMovie)


  let div1 = document.createElement("div");
 
  let movieName = document.createElement("h1");
  movieName.innerText = selectedMovie.movieName;

  let img = document.createElement("img");
  img.src = selectedMovie.image;

  div1.append(movieName, img);
  document.getElementById("movie").append(div1);



