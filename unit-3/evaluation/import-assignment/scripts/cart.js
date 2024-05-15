import navbar from "../components/navbar.js";

let nav=document.getElementById("navbar")
nav.innerHTML=navbar()


let cart=JSON.parse(localStorage.getItem("cart"))||[];

function cartlength(){
  document.getElementById("count").innerText=cart.length;
  
}
cartlength();

let appendData=()=>{
  let container=document.getElementById("container")
  container.innerHTML=null;
  
  cart.forEach((el,index)=>{
  let img=document.createElement("img")
  img.src=el.image;
  let name=document.createElement("p")
  name.innerText=el.title;
  let price=document.createElement("p")
  price.innerText=el.price;
  let btn=document.createElement("button")
  btn.innerText="Remove"
  btn.addEventListener("click",function(){
    removeitem(index)
  })
  let div=document.createElement("div")
  div.append(img,name,price,btn)
  container.append(div);

  })
}

appendData();


function removeitem(index){
 cart.splice(index,1)
 localStorage.setItem("cart",JSON.stringify(cart));
 appendData();
 cartlength();

  
}

