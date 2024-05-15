function Listing( name,category,imageUrl,price) {
  this.name=name;
  this.category=category;
  this.imageUrl=imageUrl;
  this.price=price;
  this.sold=false;
 
}

function getFormData(e) {
  e.preventDefault();
  let form=document.getElementById("form")
   let name=form.name.value;
   let category=form.category.value;
   let imageUrl=form.image.value;
   let price=form.price.value;
   
   addListing(name,category,imageUrl,price)
}

function addListing(name,category,imageUrl,price) {

 let product=new Listing(name,category,imageUrl,price);
  let data=JSON.parse(localStorage.getItem("Products")) || []
  data.push(product);

  localStorage.setItem("Products",JSON.stringify(data))
  console.log(data)
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  getFormData(e)
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
