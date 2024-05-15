//store the products array in localstorage as "data"

function redirectToInventoryPage() {
  window.location.href="./inventory.html"
}
// let btn=document.getElementById("show_products")
//   btn.addEventListener("onclick",function(){
//      function
//   })

function getFormData(event) {
  event.preventDefault()
  let brand=document.getElementById("product_brand").value;
  let name=document.getElementById("product_name").value;
  let price=document.getElementById("product_price").value;
  let image=document.getElementById("product_image").value;


  brand.value="",
  name.value="",
  price.value="",
  image.value="",
   addData(name, brand, price, image)
}

function addData(name, brand, price, image) {
  let p= {
    name,
    brand,
    price,
    image,
  };

  let data=JSON.parse(localStorage.getItem("data"))||[];
  data.push(p)
  console.log(data)
  localStorage.setItem("data",JSON.stringify(data))
}

window.addEventListener("load", function () {
  // get the form and show products button here and add eventlisteners
  let form=document.getElementById("product_form")
  form.addEventListener("submit",getFormData)
});
