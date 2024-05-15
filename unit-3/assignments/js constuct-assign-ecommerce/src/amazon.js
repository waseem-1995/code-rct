function Listing( name,price,image,category) {
  this.name=n;
  this.category=c;
  this.price=p;
  this.image=i;
}

function getFormData(e) {
  e.preventDefault();
  let form=document.getElementById("form")
   let name=form.name.value;
   let category=form.category.value;
   let price=form.price.value;
   let image=form.image.value;
}

function addListing(e) {

 let product=new Listing(name,category,price,image);
  let data=JSON.parse(localStorage.getItem("Products")) || []
  data.push(product);

  localStorage.setItem("Products",JSON.stringify(data))
  console.log(data)
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
