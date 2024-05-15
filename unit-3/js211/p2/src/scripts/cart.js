import navbar  from "./navbar.js";
document.getElementById("navbar").innerHTML=navbar();


let data=JSON.parse(localStorage.getItem("cart"))||[];
// let total=data.reduce(function(acc,el,i){
//     return acc+Number(el.price)
// },0)
let count=document.getElementById("cart_count");
 count.innerText=data.length

function appendCart(){
    let data_div=document.getElementById("items")
    data_div.innerHTML=null;

    data.forEach(function(el,index){
        let div=document.createElement("div");
        div.setAttribute("class","item")

        let p_name=document.createElement("p")
        p_name.innerText=el.title;

        let p_price=document.createElement("p")
        p_price.setAttribute("class","price")
        p_price.innerText=el.price;

        let img=document.createElement("img");
        img.src=el.image;
       
        let btn =document.createElement("button");
        btn.innerText="Remove";
        btn.setAttribute("class","remove")
        btn.addEventListener("click",function(){
            deleteItem(index)
        })

        div.append(img,p_name,p_price,btn)
        data_div.append(div)

    })
}
appendCart()

function deleteItem(index){
    data.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(data))
    let count=document.getElementById("cart_count")
    count.innerText=data.length
    appendCart()
}

