const baseServerURL = `http://localhost:${
  import.meta.env.REACT_APP_JSON_SERVER_PORT
}`;
// --- do not touch  ↑↑↑↑↑↑↑↑↑↑↑↑ ----------

// ***** Constants / Variables ***** //
const bookURL = `${baseServerURL}/books`;
//const bookURL=`http://localhost:9090/books`

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

// window.addEventListener("load",()=>{
//   // try {
//   //   let res =await fetch(bookURL)
//   //   let data=await res.json()
//   //   //booksData(data)
//   //   renderCardList(data)
//   // } catch (error) {
//   //   console.log(error);
//   // }
//   fetch(`${bookURL}`)
//     .then((res)=> res.json())
//     .then((res)=>{
//       booksData = res;
//       renderCardList(booksData)
//     })
// })


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
    renderCardList(booksData)
  })

}
getdata()

 
function renderCardList(booksData){
  let cardList=`
  <div class="card-list">
  ${booksData
    .map((item)=>{
      let title=item.title;
      let author=item.author;
      let category=item.category;
      let image=item.image;
      let price=item.price;
      
      return bookCard(title,author,category,image,price)
    })
    .join("")
  }
 </div>
  `
  mainSection.innerHTML=cardList
}


function bookCard(title,author,category,image,price,id){
  return`
  <div class="card" data-id=${id}>
    <div class="card-image">
    <img src=${image}>
    </div>
    <div class="card-body">
    <h4 class="card-title">${title}</h4>
    <p class="card-author">${author}</p>
    <p class="card-category">${category}</p>
    <p class="card-price">${price}</p>
    <a href="#" data-id=${id} class="card-link">Edit</a>
    <button data-id=${id} class="card-button">Delete</button>
    </div>
  </div>
  `
}

//add one way
// bookCreateBtn.addEventListener("click",createBook)

//  function createBook(){
//   let newData={
//     title:document.getElementById("book-title").value,
//     author:document.getElementById("book-image").value,
//     category:document.getElementById("book-category").value,
//     image:document.getElementById("book-author").value,
//     price:document.getElementById("book-price").value,
//   }

//    fetch(bookURL,{
//     method:'POST',
//     body:JSON.stringify(newData),
//     headers:{
//       "Content-Type":"application/json"
//     }
//   }).then((res)=>{
//     return res.json()
//   })

// }

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

// update only price 

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




// sorting way 1
// sortAtoZBtn.addEventListener("click", () => {
//   let newdata = booksData.sort((a, b) => {
//   if(a.price > b.price) return 1;
//   if(a.price < b.price) return -1;
//   return 0;
//   })
//   renderCardList(newdata)
// })

// sortZtoABtn.addEventListener("click", () => {
//     booksData.sort((a, b) => {
//     if(a.price < b.price) return 1;
//     if(a.price > b.price) return -1;
//     return 0;
//   })
//   renderCardList(booksData)
// })



// sorting  way2

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
      renderCardList(booksData);
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
      renderCardList(booksData);
    });
});

filterClassic.addEventListener("click", () => {
  // const filteredData = data.filter(item => item.category === "Classic")
  // renderCardList(filteredData)
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
      renderCardList(booksData);
    });
})

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
      renderCardList(booksData);
    });
})

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
      renderCardList(booksData);
    });
})

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
      renderCardList(booksData);
    });
})