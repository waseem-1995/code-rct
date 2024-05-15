// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let moviedata = JSON.parse(localStorage.getItem("movie")) || [];
let waleetmoney = JSON.parse(localStorage.getItem("amount")) || [];

let display_amount = document.getElementById("wallet");
if (waleetmoney == 0) {
  display_amount.innerHTML = "0";
} else {
  display_amount.innerHTML = waleetmoney;
}










let _list = document.querySelector("#movie");
document.querySelector("form").addEventListener("submit", bookshowS);
let total_val = 100;
function bookshowS() {
  event.preventDefault();
  let form = document.querySelector("form");

  let name = form.user_name.value;
  let seats = form.number_of_seats.value;

  if (total_val * seats <= waleetmoney) {
    alert("Booking successful!");
    window.location.href = "index.html";
  } else {
    alert("Insufficient Balance!");
  }
}











//show on cart
moviedata.map(function (elem) {
  console.log(elem);
  let div = document.createElement("div");
  div.setAttribute("class","movie_tab")
  let img = document.createElement("img");
  img.src = elem.Poster;

  let p = document.createElement("h3");
  p.setAttribute("id", "title");
  p.innerHTML = elem.Title;

  div.append(p,img);
  _list.append(div);
});
