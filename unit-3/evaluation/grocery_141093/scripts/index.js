// The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items

async function getData(){
    try{
        
        let res= await fetch(` https://grocery-mock-api.herokuapp.com/items`);
        let items=await res.json();
        console.log(items)
       
    }catch(err){
        console.log("error")
    }
}
getData()
localStorage.setItem("data", JSON.stringify(items));
let items=JSON.parse(localStorage.getItem("data"))||[]

function appendgroccery(items){
    let data_div=document.getElementById("items")
    data_div.innerHTML=null;

    items.forEach(function(el){
        let div=document.createElement("div");
        let p_name=document.createElement("p")
        p_name.innerHTML=`Name:${el.name}`;

        let p_price=document.createElement("p");
        p_price.innerHTML=`Year:${el.price}`;

        let img=document.createElement("img");
        img.src=el.image

        let btn=document.createElement("button")
        btn.innerText="Add to cart";
        btn.setAttribute("class","Add to cart")
        btn.addEventListener("click",function(){
            this.remove(index)
        })

        div.append(img,p_name,p_price,btn);
        data_div.append(div)
    })
}
appendgroccery()
