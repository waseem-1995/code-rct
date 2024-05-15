import navbar from "../components/navbar.js";
import url from "../components/products_data.js";


let nav=document.getElementById("navbar")
nav.innerHTML=navbar()


async function getItem(){
    try{
        let response = await fetch(url)
        let data = await response.json();
        renderDom(data.data)
        //console.log(data.data)
    }
    catch(err){
        console.log("err:", err);
    }
    
}
getItem()


    let renderDom=(data)=>{
        let container=document.getElementById("container")
        container.innerHTML=null;
        data.forEach(({image,title,price})=>{

            let img=document.createElement("img")
            img.src=image;
            let name=document.createElement("p")
            name.innerText=title;
            let P_rice=document.createElement("p")
            P_rice.innerText=price;
            let btn=document.createElement("button")
            btn.innerText='cart'
            btn.addEventListener("click",function(){
              addtocart(image,title,price);
              
            })
           
            let div=document.createElement("div")
            div.append(img,name,P_rice,btn)
            container.append(div);
            
          })
          
    }
    function addtocart(image,title,price){
        let p={
            image,title,price
        }
        let cart=JSON.parse(localStorage.getItem("cart"))||[];
        cart.push(p);
        localStorage.setItem("cart",JSON.stringify(cart));
        console.log(cart)
        document.getElementById("count").innerText=cart.length;
      
      }

// let card=(strMealThumb,n,p)=>{
//     let div=document.createElement("div");
//     let img=document.createElement("img");
//     img.src=strMealThumb
//     ;

//     let name=document.createElement("h3");
//     name.innerText=n;

//     let price=document.createElement("h3");
//     price.innerText=p;

//     div.append(img,name,price);
//     return div;
// }

// let append=(data)=>{
//     container.innerHTML=null;
//     data.forEach(({img,name,price})=>{
//         let p=card(img,name,price)
//         container.append(p)
//     })
// }

// window.onload=()=>{
//     append()
// }