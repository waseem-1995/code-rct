//store the products array in localstorage as "data"

function redirectToInventoryPage() {
  window.location.href="inventory.html"
}

function getFormData(event) {
  let name = document.getElementById('product_name').value;
  let brand = document.getElementById('product_brand').value;
  let price = document.getElementById('product_price').value;
  let image = document.getElementById('product_image').value;
 
  addData(name, brand, price, image)
 
}

function addData(name, brand, price, image) {
  let obj = {
    name, brand, price, image
  }
  
  let data = JSON.parse(localStorage.getItem('data')) || []
  data.push(obj)
  
  localStorage.setItem('data', JSON.stringify(data))
  document.getElementById("product_form").reset()
 
}

window.addEventListener("load", function () {
  // get the form and show products button here and add eventlisteners
 

  let form = document.getElementById('product_form');
  
  form.addEventListener('submit', (event) => {
  
    event.preventDefault()
  
    getFormData()
  
  })
  
  let container = document.getElementById('show_products');
  container.addEventListener('click', () => {
    redirectToInventoryPage()
  })
});
