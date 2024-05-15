let data=JSON.parse(localStorage.getItem("data"))||[];

function redirectToIndexPage() {
  window.location.href="./index.html"
}


function append(data) {
  let data=JSON.parse(localStorage.getItem("data"))||[];
  let container=document.getElementById("products_data");
  div.innerHTML=null;
    data.forEach((el,index)=>{
        let image=document.createElement("img");
        image.src=el.image;
        let brand=document.createElement("p");
        brand.textContent=el.brand;
        let name=document.createElement("p");
        name.textContent=el.name;
        let price=document.createElement("p");
        price.textContent=el.price;
        console.log(el.price)
        let remove =document.createElement("button");
        remove.addEventListener("click",function(){
            remove(index)
        });
       
        let box=document.createElement("div");
        
        box.append(name,brand,price,image,remove);
        container.append(box);
    })
}

function remove(index) {
  let data=JSON.parse(localStorage.getItem("data"))||[]
  data.splice(index,1);
  localStorage.setItem("data",JSON.stringify(data));
  append(data)
}

window.addEventListener("load", function () {
  // get the add more products button here and add eventlisteners
  // onload invoke append function
  let add=document.getElementById("add_product");
  add.addEventListener("click",append)
});
