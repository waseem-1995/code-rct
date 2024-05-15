// --- do not touch  ↓↓↓↓↓↓↓↓↓↓↓↓ ----------
const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ** Constants / Variables ** //
const bookURL = `${baseServerURL}/books`;
let mainSection = document.getElementById("data-list-wrapper");

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookCategoryInput = document.getElementById("book-category");
let bookAuthorInput = document.getElementById("book-author");
let bookPriceInput = document.getElementById("book-price");
let bookCreateBtn = document.getElementById("add-book");

// Update book
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookBtn = document.getElementById("update-book");

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterClassic = document.getElementById("filter-Classic");
let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");

//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

//Books Data
let booksData = [];


function getdata(){

    fetch(bookURL,{
      method :"GET",
      header:{
        "Content-Type":"application/json"
      }
    }).then((res)=>res.json()).then((res)=>{
      console.log(res);
      booksData = res
      console.log(booksData)
      displayCard(booksData)
    })

}
getdata()


function displayCard(booksData){
  mainSection.innerHTML = "";
  let div = document.createElement("div");
  div.classList.add("card-list")
   booksData.forEach((el,index)=>{

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("card")
    cardDiv.setAttribute("data-id",el.id)

    let child1 = document.createElement("div");
    child1.classList.add("card-img");
    let image = document.createElement("img");
    image.setAttribute("src",el.image)

    

    let child2 = document.createElement("div");
    child2.classList.add("card-body");

    let title = document.createElement("h4");
    title.classList.add("card-title");
    title.innerText = el.title;

    let author = document.createElement("p");
    author.classList.add("card-author");
    author.innerText = el.author;

    let category = document.createElement("p");
    category.classList.add("card-category");
    category.innerText = el.category;

    let price = document.createElement("p");
    price.classList.add("card-price");
    price.innerText = el.price;

    let edit = document.createElement("a");
    edit.setAttribute("href","#")
    edit.setAttribute("data-id", el.id);
    edit.classList.add("card-link");
    edit.innerText = "Edit"
    edit.addEventListener("click",(e)=>{
      e.preventDefault();
      updateBookIdInput.value= el.id;
      updateBookTitleInput.value = el.title;
      updateBookImageInput.value = el.image;
      updateBookAuthorInput.value = el.author;
      updateBookCategoryInput.value = el.category;
      updateBookPriceInput.value = el.price;
      updatePriceBookId.value = el.id;
      updatePriceBookPrice = el.price;
    })
    

    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("data-id",el.id);
    deleteButton.classList.add("card-button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click",()=>{
       fetch(bookURL+`/${el.id}`, {
         method: "DELETE",
         header: {
           "Content-Type": "application/json",
         },
       })
         .then((res) => res.json())
         .then((res) => {
           console.log(res);
           getdata()
         }).catch((err)=>{console.log(err)});
    })

  child1.append(image);
  child2.append(title,author,category,price,edit,deleteButton)
  cardDiv.append(child1,child2);
  div.append(cardDiv);
   })
    
    mainSection.append(div);
}


// add new book 

bookCreateBtn.addEventListener("click",async()=>{
  let title = bookTitleInput.value;
  let image = bookImageInput.value;
  let category = bookCategoryInput.value;
  let author = bookAuthorInput.value;
  let price = bookPriceInput.value;
  // console.log(title,image,category,author,price)
   let obj = {
    title,
    image,
    category,
    author ,
    price,
   }
    try {
      const response = await fetch(bookURL, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const result = await response.json();
      getdata()
      console.log(result);
    }
     catch (error) {
      console.error("Error:", error);
    }
   
})


// update all 

updateBookBtn.addEventListener("click",async()=>{
  let id = updateBookIdInput.value;
  let title = updateBookTitleInput.value;
  let image = updateBookImageInput.value;
  let author = updateBookAuthorInput.value;
  let category = updateBookCategoryInput.value;
  let price = updateBookPriceInput.value;

  let obj = {
    title,
    image,
    category,
    author ,
    price,
   }
    try {
      const response = await fetch(bookURL+`/${id}`, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const result = await response.json();
      console.log(result);
      getdata()
    }
     catch (error) {
      console.error("Error:", error);
    }
})


// only price 

updatePriceBookPriceButton.addEventListener("click",async()=>{
  let id = updatePriceBookId.value;
  let price = +updatePriceBookPrice.value;
  let  obj = {price}
  try {
      const response = await fetch(bookURL+`/${id}`, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const result = await response.json();
      console.log(result);
      getdata()
    }
     catch (error) {
      console.error("Error:", error);
    }
})


// sorting 

sortAtoZBtn.addEventListener("click",()=>{
  fetch(bookURL + `?_sort=price&_order=asc`, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      booksData = res;
      console.log(booksData);
      displayCard(booksData);
    });
})


sortZtoABtn.addEventListener("click", () => {
  fetch(bookURL + `?_sort=price&_order=desc`, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      booksData = res;
      console.log(booksData);
      displayCard(booksData);
    });
});


// filtering 

filterClassic.addEventListener("click", () => {
  fetch(bookURL + `?category=Classic`, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      booksData = res;
      console.log(booksData);
      displayCard(booksData);
    });
});

filterFantasy.addEventListener("click", () => {
  fetch(bookURL + `?category=Fantasy`, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      booksData = res;
      console.log(booksData);
      displayCard(booksData);
    });
});

filterMystery.addEventListener("click", () => {
  fetch(bookURL + `?category=Mystery`, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      booksData = res;
      console.log(booksData);
      displayCard(booksData);
    });
});


// search 

searchByButton.addEventListener("click",()=>{
  let key = searchBySelect.value;
  let keyValue = searchByInput.value;

  fetch(bookURL + `?${key}_like=${keyValue}`, {
    method: "GET",
    header: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      booksData = res;
      console.log(booksData);
      displayCard(booksData);
    });
})