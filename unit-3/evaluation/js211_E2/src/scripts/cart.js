let data=JSON.parse(localStorage.getItem("cart"))||[]
let total=data.reduce(function(acc,el,i){
    return acc + Number(el.price)
},0)
// console.log(total)
// document.querySelector("#checkout").innerText=`${total}`

function appendCart(){
    let container=document.getElementById("items")
    container.innerHTML=null;
    data.forEach(function(el,index){
        let div=document.createElement("div");
        div.setAttribute("class","item")
        let p_name=document.createElement("p")
        p_name.innerHTML=`Name:${el.title}`;


        let p_price=document.createElement("p");
        p_price.innerHTML=`Year:${el.price}`;

        let img=document.createElement("img");
        img.src=el.image

        let btn=document.createElement("button")
        btn.innerText="remove";
        btn.setAttribute("class","remove")
        btn.addEventListener("click",function(){
            
            deleteItem(index)
            
        })

        div.append(img,p_name,p_price,btn);
        container.append(div)
    })
}
appendCart()
function deleteItem(index){
    data.splice(index,1)
    localStorage.setItem("cart", JSON.stringify(data));
    appendCart()
}

function order(){
 alert("your order is successful")
}
