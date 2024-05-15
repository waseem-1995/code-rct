function redirectToIndexPage() {
  window.location.href="index.html"
}

let data = JSON.parse(localStorage.getItem('data')) || []

function append(data) {

  let container = document.getElementById('products_data');
  container.innerHTML = null;

  data.forEach((item,index) => {
     let div = document.createElement('div');
     
     let image = document.createElement('img');
     image.src=item.image;
     
     let name = document.createElement('h3');
     name.innerHTML=item.name;
     
     let brand = document.createElement('p');
     brand.innerHTML=item.brand;
     
     let price = document.createElement('p');
     price.innerHTML=item.price;
     
     let removes = document.createElement('button');
     removes.innerText="Remove"
     removes.addEventListener('click',()=>{
      remove(index)
      })
      
      div.append(image,name,brand,price,removes)
      container.append(div)
  })

}

function remove(index) {
  
  data.splice(index,1)
  
  localStorage.setItem('data',JSON.stringify(data))
  
  append(data)

}

window.addEventListener("load", function () {
  // get the add more products button here and add eventlisteners
  // onload invoke append function
  let container = document.getElementById('add_product');
  
  container.addEventListener('click', () => {
  
    redirectToIndexPage()
  
  })
  
  append(data)

})